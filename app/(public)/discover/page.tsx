"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";
import { events, eventCategories } from "@/data/events";

export default function DiscoverPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [city, setCity] = useState("All");

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesQuery =
        event.title.toLowerCase().includes(query.toLowerCase()) ||
        event.location.toLowerCase().includes(query.toLowerCase()) ||
        event.category.toLowerCase().includes(query.toLowerCase());

      const matchesCategory =
        category === "All" || event.category === category;

      const matchesCity =
        city === "All" || event.city === city;

      return matchesQuery && matchesCategory && matchesCity;
    });
  }, [query, category, city]);

  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-950">

      {/* HEADER */}

      <section className="border-b border-neutral-200 bg-white">

        <div className="mx-auto max-w-7xl px-6 pb-14 pt-10 md:px-8 md:pt-16">

          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-500">
                <Sparkles size={15} />
                Curated for you
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
                Discover
                <br />
                something worth
                <br />
                going out for.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-500">
                Find events, communities and experiences happening around
                Navi Mumbai and Thane.
              </p>
            </div>

            <div className="hidden text-right md:block">
              <p className="text-sm text-neutral-400">
                {filteredEvents.length} experiences
              </p>
              <p className="mt-1 font-medium">
                near you
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CONTROLS */}

      <section className="sticky top-0 z-20 border-b border-neutral-200 bg-[#fafafa]/90 backdrop-blur-xl">

        <div className="mx-auto max-w-7xl px-6 py-4 md:px-8">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

            <div className="relative flex-1">

              <Search
                size={19}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400"
              />

              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search events, places or experiences..."
                className="h-14 w-full rounded-full border border-neutral-200 bg-white pl-13 pr-12 text-sm outline-none transition focus:border-neutral-400"
              />

              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400"
                >
                  <X size={17} />
                </button>
              )}

            </div>

            <div className="flex gap-3 overflow-x-auto pb-1">

              <button
                onClick={() => setCity("All")}
                className={`whitespace-nowrap rounded-full border px-5 py-3 text-sm ${
                  city === "All"
                    ? "border-black bg-black text-white"
                    : "border-neutral-200 bg-white"
                }`}
              >
                All locations
              </button>

              <button
                onClick={() => setCity("Navi Mumbai")}
                className={`whitespace-nowrap rounded-full border px-5 py-3 text-sm ${
                  city === "Navi Mumbai"
                    ? "border-black bg-black text-white"
                    : "border-neutral-200 bg-white"
                }`}
              >
                Navi Mumbai
              </button>

              <button
                onClick={() => setCity("Thane")}
                className={`whitespace-nowrap rounded-full border px-5 py-3 text-sm ${
                  city === "Thane"
                    ? "border-black bg-black text-white"
                    : "border-neutral-200 bg-white"
                }`}
              >
                Thane
              </button>

              <button className="flex items-center gap-2 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm">
                <SlidersHorizontal size={16} />
                Filters
              </button>

            </div>

          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">

            {eventCategories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm transition ${
                  category === item
                    ? "bg-black text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {item}
              </button>
            ))}

          </div>

        </div>

      </section>

      {/* EVENTS */}

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">

        <div className="mb-10 flex items-end justify-between">

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
              Around you
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Experiences happening now.
            </h2>
          </div>

          <span className="hidden text-sm text-neutral-400 md:block">
            {filteredEvents.length} results
          </span>

        </div>

        {filteredEvents.length === 0 ? (

          <div className="rounded-[32px] border border-neutral-200 bg-white px-8 py-24 text-center">
            <h3 className="text-2xl font-bold">
              Nothing found.
            </h3>
            <p className="mt-3 text-neutral-500">
              Try another search or category.
            </p>
          </div>

        ) : (

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {filteredEvents.map((event) => (

              <Link
                href={`/event/${event.id}`}
                key={event.id}
                className="group overflow-hidden rounded-[32px] border border-neutral-200 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]"
              >

                {/* POSTER */}

                <div className="relative h-72 overflow-hidden bg-neutral-100">

                  <Image src={event.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/10" />

                  <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold">
                    {event.tag}
                  </div>

                  <div className="absolute bottom-5 left-5">
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                      {event.category}
                    </p>
                  </div>

                  <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={19} />
                  </div>

                </div>

                {/* CONTENT */}

                <div className="p-7">

                  <h3 className="text-2xl font-bold tracking-tight">
                    {event.title}
                  </h3>

                  <div className="mt-6 space-y-3 text-sm text-neutral-500">

                    <div className="flex items-center gap-3">
                      <MapPin size={17} />
                      {event.location}, {event.city}
                    </div>

                    <div className="flex items-center gap-3">
                      <CalendarDays size={17} />
                      {event.date} · {event.time}
                    </div>

                  </div>

                  <div className="mt-8 flex items-end justify-between border-t border-neutral-100 pt-6">

                    <div>
                      <p className="text-xs text-neutral-400">
                        Starting from
                      </p>

                      <p className="mt-1 text-xl font-bold">
                        {event.price}
                      </p>
                    </div>

                    <span className="text-sm font-medium text-neutral-400 transition group-hover:text-black">
                      View event →
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        )}

      </section>

    </main>
  );
}
