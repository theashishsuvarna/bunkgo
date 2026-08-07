"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { bentoItems } from "@/data/events";
import { siteConfig } from "@/lib/config/site";
import {
  fadeUp,
  hoverLift,
  staggerContainer,
  transition,
  viewport,
} from "@/lib/motion/animations";
import { cn } from "@/lib/utils";

export default function BentoGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
        className="mb-16 lg:mb-20"
      >
        <motion.p
          variants={fadeUp}
          transition={transition}
          className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400"
        >
          Discover
        </motion.p>
        <motion.h2
          variants={fadeUp}
          transition={transition}
          className="max-w-2xl text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-neutral-950"
        >
          Find what&apos;s happening around you.
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
        className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[200px] lg:grid-cols-4 lg:auto-rows-[220px] lg:gap-5"
      >
        {bentoItems.map((item, index) => (
          <motion.div
            key={item.id}
            variants={fadeUp}
            transition={{ ...transition, delay: index * 0.06 }}
            whileHover={hoverLift}
            className={cn(
              "group",
              item.size === "large" && "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2",
              item.size === "medium" && "lg:col-span-1 lg:row-span-1",
              item.size === "small" && "sm:col-span-2 lg:col-span-1"
            )}
          >
            <Link
              href={siteConfig.links.discover}
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-[36px] border border-[#E8E8E8] bg-white p-7 transition-shadow duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] lg:p-8"
            >
              <div
                className="absolute -right-8 -top-8 size-32 rounded-full opacity-[0.06]"
                style={{ backgroundColor: item.accent }}
                aria-hidden
              />

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                  {item.size === "large" ? "Trending" : "Community"}
                </p>
                <h3
                  className={cn(
                    "mt-3 font-semibold tracking-[-0.02em] text-neutral-950",
                    item.size === "large"
                      ? "text-3xl sm:text-4xl lg:text-5xl"
                      : "text-2xl lg:text-3xl"
                  )}
                >
                  {item.title}
                </h3>
              </div>

              <div className="flex items-end justify-between gap-4">
                <p className="max-w-[200px] text-sm leading-relaxed text-neutral-500">
                  {item.subtitle}
                </p>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#E8E8E8] transition-all duration-300 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
