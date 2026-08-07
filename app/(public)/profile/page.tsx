import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: `Profile — ${siteConfig.name}`,
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <main className="mx-auto max-w-2xl px-6 py-24 text-center lg:py-32">
        <h1 className="text-3xl font-semibold tracking-[-0.03em] text-neutral-950">
          Your profile
        </h1>
        <p className="mt-4 text-neutral-500">
          Sign in to view your bookings, saved events, and community memberships.
        </p>
        <Link
          href={siteConfig.links.signIn}
          className="mt-8 inline-flex rounded-full bg-neutral-950 px-8 py-3 text-sm text-white transition-colors hover:bg-neutral-800"
        >
          Sign In
        </Link>
      </main>
      <Footer />
    </div>
  );
}
