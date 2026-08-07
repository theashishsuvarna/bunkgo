import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: `Dashboard — ${siteConfig.name}`,
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-semibold tracking-[-0.03em] text-neutral-950">
          Dashboard
        </h1>
        <p className="mt-3 text-neutral-500">
          Your upcoming events and bookings will appear here.
        </p>
        <Link
          href={siteConfig.links.discover}
          className="mt-8 inline-flex rounded-full border border-[#E8E8E8] bg-white px-6 py-3 text-sm text-neutral-600 transition-colors hover:border-neutral-950 hover:text-neutral-950"
        >
          Explore Events
        </Link>
      </div>
    </main>
  );
}
