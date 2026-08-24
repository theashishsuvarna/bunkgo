"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarDays, Pencil, Plus, Trash2, X } from "lucide-react";
import { events as seedEvents, type EventItem } from "@/data/events";

type Draft = Pick<EventItem, "title" | "category" | "location" | "date" | "time" | "price">;
const blank: Draft = { title: "", category: "Music", location: "", date: "", time: "", price: "Free" };

export default function EventsPage() {
  const [items, setItems] = useState(seedEvents);
  const [editing, setEditing] = useState<EventItem | null>(null);
  const [draft, setDraft] = useState<Draft>(blank);
  const [open, setOpen] = useState(false);
  function launch(item?: EventItem) { setEditing(item ?? null); setDraft(item ?? blank); setOpen(true); }
  function save() {
    if (!draft.title.trim() || !draft.location.trim()) return;
    if (editing) setItems(items.map((item) => item.id === editing.id ? { ...item, ...draft } : item));
    else setItems([{ ...seedEvents[0], ...draft, id: `event-${Date.now()}`, tag: "New", seatsLeft: 50, capacity: 50, host: "BunkGo Sessions", image: "/images/events/rooftop.jpg", city: "Navi Mumbai", description: "A fresh BunkGo experience.", status: "Draft" }, ...items]);
    setOpen(false);
  }
  return <main className="min-h-screen bg-[#fafafa] text-neutral-950">
    <header className="border-b border-neutral-200 bg-white"><div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6"><Link href="/" className="text-xl font-black tracking-tight">BunkGo</Link><nav className="flex items-center gap-5 text-sm text-neutral-500"><Link href="/dashboard">Overview</Link><Link href="/dashboard/analytics">Analytics</Link><Link href="/profile">Profile</Link></nav></div></header>
    <section className="mx-auto max-w-6xl px-6 py-10 md:py-16"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-xs font-medium uppercase tracking-[.25em] text-neutral-400">Organizer workspace</p><h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Your events.</h1><p className="mt-3 text-neutral-500">Create, update and keep every experience on track.</p></div><button onClick={() => launch()} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-black px-5 text-sm font-semibold text-white hover:bg-neutral-800"><Plus className="size-4" />Create event</button></div>
    <div className="mt-10 overflow-hidden rounded-[28px] border border-neutral-200 bg-white">{items.length === 0 ? <div className="px-6 py-20 text-center"><CalendarDays className="mx-auto size-8 text-neutral-300"/><h2 className="mt-4 text-lg font-semibold">No events yet</h2><button onClick={() => launch()} className="mt-4 text-sm font-semibold underline">Create your first event</button></div> : <div className="divide-y divide-neutral-100">{items.map((item) => <div key={item.id} className="flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:px-7"><div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-neutral-100 text-xs font-bold">{item.category.slice(0,2)}</div><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><h2 className="truncate font-semibold">{item.title}</h2><span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${item.status === "Published" ? "bg-emerald-50 text-emerald-700" : "bg-neutral-100 text-neutral-500"}`}>{item.status}</span></div><p className="mt-1 text-sm text-neutral-500">{item.date} · {item.time} · {item.location}</p></div><div className="flex items-center gap-3 text-sm"><span className="hidden text-neutral-500 md:inline">{item.capacity - item.seatsLeft}/{item.capacity} booked</span><button onClick={() => launch(item)} aria-label={`Edit ${item.title}`} className="grid size-9 place-items-center rounded-full border border-neutral-200 hover:border-black"><Pencil className="size-4"/></button><button onClick={() => setItems(items.filter((event) => event.id !== item.id))} aria-label={`Delete ${item.title}`} className="grid size-9 place-items-center rounded-full border border-neutral-200 text-neutral-500 hover:border-red-300 hover:text-red-600"><Trash2 className="size-4"/></button></div></div>)}</div>}</div></section>
    {open && <div className="fixed inset-0 z-50 grid place-items-center bg-black/35 p-4"><div className="w-full max-w-lg rounded-[28px] bg-white p-6 shadow-2xl"><div className="flex items-center justify-between"><div><p className="text-xs uppercase tracking-[.2em] text-neutral-400">Event editor</p><h2 className="mt-1 text-2xl font-bold">{editing ? "Edit event" : "New event"}</h2></div><button onClick={() => setOpen(false)} className="grid size-9 place-items-center rounded-full bg-neutral-100"><X className="size-4"/></button></div><div className="mt-6 grid gap-4 sm:grid-cols-2">{(["title","category","location","date","time","price"] as const).map((key) => <label key={key} className={key === "title" ? "sm:col-span-2" : ""}><span className="mb-1.5 block text-xs font-medium capitalize text-neutral-500">{key}</span><input value={draft[key]} onChange={(e) => setDraft({...draft,[key]:e.target.value})} className="h-11 w-full rounded-xl border border-neutral-200 px-3 text-sm outline-none focus:border-black" placeholder={key === "title" ? "Event name" : undefined}/></label>)}</div><button onClick={save} className="mt-6 h-12 w-full rounded-full bg-black text-sm font-semibold text-white hover:bg-neutral-800">Save event</button></div></div>}
  </main>;
}
