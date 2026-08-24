export default function Loading() {
  return <main className="min-h-screen bg-[#fafafa] p-6"><div className="mx-auto max-w-6xl animate-pulse"><div className="h-16 rounded-2xl bg-neutral-200"/><div className="mt-12 h-12 w-64 rounded-xl bg-neutral-200"/><div className="mt-6 h-6 w-96 max-w-full rounded-lg bg-neutral-100"/><div className="mt-12 grid gap-5 md:grid-cols-3">{[1,2,3].map(item => <div key={item} className="h-72 rounded-[28px] bg-neutral-100"/>)}</div></div></main>;
}
