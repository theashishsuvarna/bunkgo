import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: `Organizers — ${siteConfig.name}`,
};

export default function OrganizersPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.03em] text-neutral-950">
          Host experiences people remember
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-lg text-neutral-500">
          Whether you run a community, venue, or one-off event — BunkGo helps you
          reach the right audience in Navi Mumbai and Thane.
        </p>
        <Link
          href={siteConfig.links.signUp}
          className="mt-10 inline-flex rounded-full bg-neutral-950 px-8 py-3 text-sm text-white transition-colors hover:bg-neutral-800"
        >
          Become a Host
        </Link>
      </main>
      <Footer />
    </div>
  );
}
