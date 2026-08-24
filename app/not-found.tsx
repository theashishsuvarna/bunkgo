import Link from "next/link";

export default function NotFound() {
  return <main className="grid min-h-screen place-items-center bg-[#fafafa] px-6 text-center"><div><p className="text-xs font-semibold uppercase tracking-[.3em] text-neutral-400">404</p><h1 className="mt-4 text-5xl font-black tracking-tight">Wrong turn.</h1><p className="mt-4 max-w-sm text-neutral-500">That experience isn&apos;t on the guest list, but there&apos;s plenty else worth showing up for.</p><Link href="/discover" className="mt-8 inline-flex rounded-full bg-black px-5 py-3 text-sm font-semibold text-white">Discover events</Link></div></main>;
}
