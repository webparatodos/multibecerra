import { Sprout } from "lucide-react";
import Link from "next/link";

export function Logo({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <Link
      href="#top"
      className={`flex items-center gap-2 shrink-0 ${className ?? ""}`}
    >
      <span
        className={`relative flex h-9 w-9 items-center justify-center rounded-full text-brand-green-light ${
          isDark ? "bg-white/10" : "bg-brand-dark"
        }`}
      >
        <Sprout className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <span className="leading-tight">
        <span
          className={`block font-heading italic text-sm -mb-1 ${
            isDark ? "text-brand-green-light" : "text-[#4b8166]"
          }`}
        >
          multi
        </span>
        <span
          className={`block font-heading font-extrabold text-xl tracking-tight ${
            isDark ? "text-white" : "text-brand-dark"
          }`}
        >
          Becerra
        </span>
      </span>
    </Link>
  );
}
