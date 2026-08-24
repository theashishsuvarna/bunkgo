import { cn } from "@/lib/utils";
import Image from "next/image";

type EventImageProps = {
  label?: string;
  className?: string;
  src?: string;
};

export default function EventImage({ label, className, src = "/images/events/rooftop-live.png" }: EventImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-neutral-100",
        className
      )}
      role="img"
      aria-label={label ?? "Event image"}
    >
      {/* Generated BunkGo event photography — a local asset, never an external image dependency. */}
      <Image src={src} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
