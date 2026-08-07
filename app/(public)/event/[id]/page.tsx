import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import EventImage from "@/components/landing/EventImage";
import { buttonVariants } from "@/components/ui/button";
import { featuredEvents, heroEvent } from "@/data/events";
import { cn } from "@/lib/utils";

const allEvents = [heroEvent, ...featuredEvents];

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const event = allEvents.find((e) => e.id === id);
  if (!event) return { title: "Event Not Found" };
  return { title: `${event.title} — BunkGo` };
}

export default async function EventPage({ params }: PageProps) {
  const { id } = await params;
  const event = allEvents.find((e) => e.id === id);

  if (!event) notFound();

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-24">
        <Link
          href="/discover"
          className="mb-10 inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-950"
        >
          <ArrowLeft className="size-4" />
          Back to discover
        </Link>

        <article className="overflow-hidden rounded-[36px] border border-[#E8E8E8] bg-white">
          <EventImage label={event.title} className="h-72 sm:h-96" />
          <div className="p-8 sm:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
              {event.tag}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-neutral-950 sm:text-4xl">
              {event.title}
            </h1>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-neutral-500">
                <MapPin className="size-5" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-500">
                <Calendar className="size-5" />
                <span>{event.date}</span>
              </div>
            </div>

            <p className="mt-8 text-[0.9375rem] leading-relaxed text-neutral-500">
              Join us for an unforgettable experience. Limited spots available —
              book now to secure your place.
            </p>

            <div className="mt-10 flex flex-col gap-4 border-t border-[#E8E8E8] pt-10 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-neutral-400">Price</p>
                <p className="text-3xl font-semibold tracking-tight text-neutral-950">
                  {event.price}
                </p>
              </div>
              <button
                type="button"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full bg-neutral-950 px-10 hover:bg-neutral-800"
                )}
              >
                Book Now
              </button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
