import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Sign In — ${siteConfig.name}`,
};

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <main className="mx-auto flex max-w-md flex-col px-6 py-24 lg:py-32">
        <h1 className="text-3xl font-semibold tracking-[-0.03em] text-neutral-950">
          Welcome back
        </h1>
        <p className="mt-3 text-neutral-500">
          Sign in to discover experiences and manage your bookings.
        </p>

        <form className="mt-10 space-y-5" action="/dashboard">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-neutral-700">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="h-12 rounded-2xl border-[#E8E8E8] bg-white"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-neutral-700">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="h-12 rounded-2xl border-[#E8E8E8] bg-white"
            />
          </div>
          <button
            type="submit"
            className={cn(
              buttonVariants(),
              "h-12 w-full rounded-full bg-neutral-950 hover:bg-neutral-800"
            )}
          >
            Sign In
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-neutral-500">
          Don&apos;t have an account?{" "}
          <Link href={siteConfig.links.signUp} className="text-neutral-950 underline-offset-4 hover:underline">
            Sign up
          </Link>
        </p>
      </main>
      <Footer />
    </div>
  );
}
