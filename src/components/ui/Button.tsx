import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

export default function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200/60";

  const styles: Record<Variant, string> = {
    primary:
      "bg-zinc-50 text-zinc-950 hover:bg-zinc-200 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.25)]",
    secondary:
      "bg-zinc-900 text-zinc-50 border border-zinc-800 hover:bg-zinc-800",
    ghost: "text-zinc-200 hover:text-zinc-50 hover:bg-zinc-900",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}
