export default function BackgroundGlow() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
      pointerEvents: 'none',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '50vw',
        height: '50vw',
        borderRadius: '50%',
        background: 'var(--accent)',
        opacity: 0.12,
        filter: 'blur(120px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: '50vw',
        height: '50vw',
        borderRadius: '50%',
        background: 'var(--accent)',
        opacity: 0.08,
        filter: 'blur(140px)'
      }} />
    </div>
  );
}
