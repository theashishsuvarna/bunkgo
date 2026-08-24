"use client";

import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import EventImage from "@/components/landing/EventImage";
import { buttonVariants } from "@/components/ui/button";
import { heroCategories, heroEvent } from "@/data/events";
import { siteConfig } from "@/lib/config/site";
import {
  fadeUp,
  staggerContainer,
  transition,
  scaleIn,
} from "@/lib/motion/animations";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-32">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-xl lg:max-w-none"
        >
          <motion.h1
            variants={fadeUp}
            transition={transition}
            className="text-[clamp(3rem,8vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-neutral-950"
          >
            Find
            <br />
            Experiences
            <br />
            Worth
            <br />
            Showing Up
            <br />
            For.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ ...transition, delay: 0.1 }}
            className="mt-8 max-w-md text-lg leading-relaxed text-neutral-500"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ ...transition, delay: 0.15 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              href={siteConfig.links.discover}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 rounded-full bg-neutral-950 px-8 text-[0.9375rem] hover:bg-neutral-800"
              )}
            >
              Explore
              <ArrowRight className="ml-1 size-4" />
            </Link>
            <Link
              href={siteConfig.links.host}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 rounded-full border-[#E8E8E8] px-8 text-[0.9375rem] hover:bg-neutral-50"
              )}
            >
              Become Host
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ ...transition, delay: 0.2 }}
            className="mt-14 flex flex-wrap gap-2.5"
          >
            {heroCategories.map((category) => (
              <Link
                key={category}
                href={`${siteConfig.links.discover}?category=${category.toLowerCase()}`}
                className="rounded-full border border-[#E8E8E8] bg-white px-5 py-2.5 text-sm text-neutral-600 transition-colors duration-200 hover:border-neutral-300 hover:text-neutral-950"
              >
                {category}
              </Link>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ ...transition, delay: 0.25 }}
          className="relative lg:pl-4"
        >
          <div className="overflow-hidden rounded-[40px] border border-[#E8E8E8] bg-white p-6 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] sm:p-8">
            <EventImage
              label={heroEvent.title}
              src={heroEvent.image}
              className="mb-8 h-64 rounded-[28px] sm:h-80"
            />

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
              {heroEvent.tag}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-neutral-950 sm:text-4xl">
              {heroEvent.title}
            </h2>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2.5 text-neutral-500">
                <MapPin className="size-4 shrink-0" />
                <span className="text-[0.9375rem]">{heroEvent.location}</span>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-500">
                <Calendar className="size-4 shrink-0" />
                <span className="text-[0.9375rem]">{heroEvent.date}</span>
              </div>
            </div>

            <div className="mt-8 flex items-end justify-between gap-4 border-t border-[#E8E8E8] pt-8">
              <div>
                <p className="text-sm text-neutral-400">From</p>
                <p className="text-3xl font-semibold tracking-tight text-neutral-950">
                  {heroEvent.price}
                </p>
              </div>
              <Link
                href={`/event/${heroEvent.id}`}
                className={cn(
                  buttonVariants(),
                  "rounded-full bg-neutral-950 px-7 hover:bg-neutral-800"
                )}
              >
                Book Now
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
