"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [name, setName] = useState("");
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

        {/* BRAND */}

        <section className="hidden bg-black p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <Link href="/" className="text-2xl font-black tracking-tight">
            BunkGo
          </Link>

          <div className="max-w-xl">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-neutral-500">
              Join the community
            </p>

            <h1 className="text-7xl font-black leading-[0.9] tracking-[-0.06em]">
              Go out.
              <br />
              Meet people.
              <br />
              Find your thing.
            </h1>

            <p className="mt-8 max-w-md text-lg leading-8 text-neutral-400">
              Create your BunkGo account and discover experiences around
              Navi Mumbai and Thane.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <MapPin size={15} />
            Built for your city
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
              Get started
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Create account.
            </h2>

            <p className="mt-4 text-neutral-500">
              Your next experience starts here.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Full name
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="h-14 w-full rounded-2xl border border-neutral-200 bg-white px-5 outline-none transition focus:border-black"
                />
              </div>

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
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  className="h-14 w-full rounded-2xl border border-neutral-200 bg-white px-5 outline-none transition focus:border-black"
                />
              </div>

              <button
                type="submit"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-full bg-black font-semibold text-white transition hover:scale-[1.01] hover:bg-neutral-800"
              >
                Create account
                <ArrowRight size={17} />
              </button>

            </form>

            <p className="mt-8 text-center text-sm text-neutral-500">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="font-semibold text-black underline underline-offset-4"
              >
                Sign in
              </Link>
            </p>

          </div>
        </section>

      </div>
    </main>
  );
}
