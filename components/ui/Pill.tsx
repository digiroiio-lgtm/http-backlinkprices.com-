import Link from "next/link";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "lime" | "ink" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  sponsored?: boolean;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">;

const VARIANT = {
  lime: "bg-lime text-ink hover:brightness-95",
  ink: "bg-ink text-white hover:bg-ink-2",
  white: "bg-white text-ink hover:bg-paper",
  ghost: "border border-ink/15 text-ink hover:bg-ink/5",
};
const SIZE = {
  sm: "h-9 px-4 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

export function Pill({ href, children, variant = "lime", size = "md", className = "", sponsored, ...rest }: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition ${VARIANT[variant]} ${SIZE[size]} ${className}`;
  if (href) {
    const external = sponsored || href.startsWith("http");
    return (
      <Link
        href={href}
        className={cls}
        {...(external ? { rel: sponsored ? "sponsored noopener" : "noopener", target: "_blank" } : {})}
      >
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
