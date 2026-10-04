export function MonoLabel({
  children,
  className = "text-muted",
  dot = false,
}: {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}) {
  return (
    <p className={`mono-label flex items-center gap-2 ${className}`}>
      {dot && <span className="inline-block h-2.5 w-2.5 rounded-full bg-lime" />}
      {children}
    </p>
  );
}
