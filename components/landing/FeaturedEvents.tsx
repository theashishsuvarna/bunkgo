"use client";

import Link from "next/link";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import EventImage from "@/components/landing/EventImage";
import { featuredEvents } from "@/data/events";
import { siteConfig } from "@/lib/config/site";
import {
  fadeUp,
  hoverLift,
  staggerContainer,
  transition,
  viewport,
} from "@/lib/motion/animations";

export default function FeaturedEvents() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
        className="mb-16 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between lg:mb-20"
      >
        <motion.div variants={fadeUp} transition={transition}>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
            Featured
          </p>
          <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-neutral-950">
            Experiences
            <br />
            worth your
            <br />
            Saturday night.
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} transition={transition}>
          <Link
            href={siteConfig.links.discover}
            className="inline-flex items-center gap-2 rounded-full border border-[#E8E8E8] px-6 py-3 text-sm text-neutral-600 transition-colors duration-200 hover:border-neutral-950 hover:text-neutral-950"
          >
            View all
            <ArrowUpRight className="size-4" />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
        className="grid gap-6 lg:grid-cols-3 lg:gap-8"
      >
        {featuredEvents.map((event, index) => (
          <motion.article
            key={event.id}
            variants={fadeUp}
            transition={{ ...transition, delay: index * 0.08 }}
            whileHover={hoverLift}
            className="group"
          >
            <Link
              href={`/event/${event.id}`}
              className="block overflow-hidden rounded-[36px] border border-[#E8E8E8] bg-white transition-shadow duration-300 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.1)]"
            >
              <div className="relative">
                <EventImage
                  label={event.title}
                  src={event.image}
                  className="h-72 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-neutral-950">
                  {event.tag}
                </span>
              </div>

              <div className="p-7 lg:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-neutral-950 lg:text-[1.65rem]">
                  {event.title}
                </h3>

                <div className="mt-6 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-neutral-500">
                    <MapPin className="size-4 shrink-0" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-neutral-500">
                    <Calendar className="size-4 shrink-0" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <p className="text-2xl font-semibold tracking-tight text-neutral-950">
                    {event.price}
                  </p>
                  <span className="flex size-11 items-center justify-center rounded-full border border-[#E8E8E8] text-neutral-950 transition-all duration-300 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
