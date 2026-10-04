export function Card({
  children,
  dark = false,
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[2rem] border p-6 sm:p-8 ${
        dark ? "border-line bg-ink text-white" : "border-ink/10 bg-white card-shadow"
      } ${className}`}
    >
      {children}
    </div>
  );
}
