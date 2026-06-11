interface Props {
  children: React.ReactNode;
  outline?: boolean;
}

export default function Tag({ children, outline = false }: Props) {
  return (
    <span className={outline ? 'tag tag-outline' : 'tag'}>
      {children}
    </span>
  );
}
