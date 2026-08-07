import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import EventImage from "@/components/landing/EventImage";
import { featuredEvents, heroEvent } from "@/data/events";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: `Discover — ${siteConfig.name}`,
  description: "Browse curated experiences across Navi Mumbai and Thane.",
};

const allEvents = [heroEvent, ...featuredEvents];

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
            Discover
          </p>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-neutral-950">
            Experiences near you
          </h1>
          <p className="mt-4 text-lg text-neutral-500">
            Curated events and gatherings across Navi Mumbai and Thane.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {allEvents.map((event) => (
            <Link
              key={event.id}
              href={`/event/${event.id}`}
              className="group overflow-hidden rounded-[36px] border border-[#E8E8E8] bg-white transition-shadow duration-300 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.1)]"
            >
              <div className="relative">
                <EventImage label={event.title} className="h-56" />
                <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-neutral-950">
                  {event.tag}
                </span>
              </div>
              <div className="p-7">
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-neutral-950">
                  {event.title}
                </h2>
                <div className="mt-4 space-y-2 text-sm text-neutral-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4" />
                    {event.date}
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xl font-semibold text-neutral-950">{event.price}</span>
                  <span className="flex size-10 items-center justify-center rounded-full border border-[#E8E8E8] transition-all group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
