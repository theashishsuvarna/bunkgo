import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  href?: string;
};

export default function Logo({ className, href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2.5 text-[1.35rem] font-semibold tracking-[-0.03em] text-neutral-950",
        className
      )}
      aria-label="BunkGo home"
    >
      <span
        className="flex size-8 items-center justify-center rounded-xl bg-neutral-950"
        aria-hidden
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12L8 4L13 12H3Z"
            fill="white"
            stroke="white"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      BunkGo
    </Link>
  );
}
