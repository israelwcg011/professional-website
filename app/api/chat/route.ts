import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { SITE_DATA } from '@/lib/data';
import { createHash } from 'crypto';

if (!process.env.GEMINI_API_KEY) {
  throw new Error('[api/chat] GEMINI_API_KEY is not configured');
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const ChatSchema = z.object({
  message: z.string().min(1, 'Message is required').max(500),
});

// Simple in-memory rate limiter (5 requests per IP per minute)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; 
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ipHash: string) {
  const now = Date.now();
  const record = rateLimitMap.get(ipHash) || { count: 0, lastReset: now };

  if (now - record.lastReset > RATE_LIMIT_WINDOW_MS) {
    record.count = 0;
    record.lastReset = now;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count += 1;
  rateLimitMap.set(ipHash, record);
  return true;
}

export async function POST(req: NextRequest) {
  const requestId = crypto.randomUUID();
  try {
    const contentType = req.headers.get('content-type') ?? '';
    if (!contentType.includes('application/json')) {
      return NextResponse.json({ error: 'Invalid content type', code: 'BAD_REQUEST' }, { status: 400 });
    }

    const ip = req.headers.get('x-forwarded-for') ?? '127.0.0.1';
    const ipHash = createHash('sha256').update(ip).digest('hex');

    if (!checkRateLimit(ipHash)) {
      console.log(JSON.stringify({ event: 'chat_rate_limit', requestId, ipHash }));
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute before sending another message.', code: 'RATE_LIMITED' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const result = ChatSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0].message, code: 'VALIDATION_ERROR' },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-3-flash-preview',
      systemInstruction: SITE_DATA.isobotContext,
      generationConfig: {
        maxOutputTokens: 800,
      },
    });

    const chat = model.startChat({ history: [] });
    
    // Explicit timeout for the AI call (10 seconds)
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Gemini API timeout')), 10000)
    );

    const geminiResult = await Promise.race([
      chat.sendMessage(result.data.message),
      timeoutPromise,
    ]) as any;

    const reply = geminiResult.response.text();

    return NextResponse.json({ reply });
  } catch (err) {
    console.log(JSON.stringify({ event: 'chat_error', requestId, error: String(err) }));
    return NextResponse.json(
      { error: 'Something went wrong.', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}
