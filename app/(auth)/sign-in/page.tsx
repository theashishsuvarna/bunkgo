"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-950">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* BRAND SIDE */}

        <section className="hidden bg-black p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <Link href="/" className="text-2xl font-black tracking-tight">
            BunkGo
          </Link>

          <div className="max-w-xl">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-neutral-500">
              Discover locally
            </p>

            <h1 className="text-7xl font-black leading-[0.9] tracking-[-0.06em]">
              Your next
              <br />
              experience
              <br />
              is waiting.
            </h1>

            <p className="mt-8 max-w-md text-lg leading-8 text-neutral-400">
              Find events, communities and experiences worth showing up for
              across Navi Mumbai and Thane.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <MapPin size={15} />
            Navi Mumbai · Thane
          </div>
        </section>

        {/* FORM */}

        <section className="flex min-h-screen items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">

            <div className="mb-10 lg:hidden">
              <Link href="/" className="text-2xl font-black">
                BunkGo
              </Link>
            </div>

            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Welcome back
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Sign in.
            </h2>

            <p className="mt-4 text-neutral-500">
              Pick up where you left off.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-14 w-full rounded-2xl border border-neutral-200 bg-white px-5 outline-none transition focus:border-black"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs text-neutral-400 hover:text-black"
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-14 w-full rounded-2xl border border-neutral-200 bg-white px-5 outline-none transition focus:border-black"
                />
              </div>

              <button
                type="submit"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-full bg-black font-semibold text-white transition hover:scale-[1.01] hover:bg-neutral-800"
              >
                Sign In
                <ArrowRight size={17} />
              </button>

            </form>

            <p className="mt-8 text-center text-sm text-neutral-500">
              New to BunkGo?{" "}
              <Link
                href="/sign-up"
                className="font-semibold text-black underline underline-offset-4"
              >
                Create an account
              </Link>
            </p>

          </div>
        </section>

      </div>
    </main>
  );
}
