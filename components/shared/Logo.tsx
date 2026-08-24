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
        "group inline-flex items-center gap-2.5 text-[1.35rem] font-black tracking-[-0.05em] text-neutral-950",
        className
      )}
      aria-label="BunkGo home"
    >
      <span
        className="logo-mark flex size-8 items-center justify-center rounded-[10px] bg-neutral-950 transition-transform duration-200 group-hover:rotate-[-8deg] group-hover:scale-110"
        aria-hidden
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 4h7.5a4.5 4.5 0 0 1 0 9H5V4Zm0 9h8.5a4.5 4.5 0 0 1 0 9H5v-9Z" fill="white" />
        </svg>
      </span>
      BunkGo
    </Link>
  );
}
