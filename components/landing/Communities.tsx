"use client";

import Link from "next/link";
import { ArrowUpRight, Users } from "lucide-react";
import { motion } from "framer-motion";
import { communities } from "@/data/events";
import { siteConfig } from "@/lib/config/site";
import {
  fadeUp,
  hoverLift,
  staggerContainer,
  transition,
  viewport,
} from "@/lib/motion/animations";

export default function Communities() {
  return (
    <section
      id="communities"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
        className="mb-16 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between lg:mb-20"
      >
        <motion.div variants={fadeUp} transition={transition}>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
            Communities
          </p>
          <h2 className="max-w-xl text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-neutral-950">
            Find your people.
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} transition={transition}>
          <Link
            href={siteConfig.links.communities}
            className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-950"
          >
            Browse all communities
            <ArrowUpRight className="size-4" />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
        className="grid gap-4 sm:grid-cols-2 lg:gap-5"
      >
        {communities.map((community, index) => (
          <motion.article
            key={community.id}
            variants={fadeUp}
            transition={{ ...transition, delay: index * 0.06 }}
            whileHover={hoverLift}
          >
            <Link
              href={`${siteConfig.links.communities}/${community.id}`}
              className="group flex h-full flex-col justify-between rounded-[36px] border border-[#E8E8E8] bg-white p-7 transition-shadow duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] lg:p-8"
            >
              <div>
                <div className="mb-6 flex size-11 items-center justify-center rounded-xl border border-[#E8E8E8]">
                  <Users className="size-5 text-neutral-950" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-neutral-950 lg:text-2xl">
                  {community.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  {community.description}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-[#E8E8E8] pt-6">
                <div className="flex gap-6 text-sm text-neutral-500">
                  <span>
                    <strong className="font-medium text-neutral-950">
                      {community.members.toLocaleString()}
                    </strong>{" "}
                    members
                  </span>
                  <span>
                    <strong className="font-medium text-neutral-950">
                      {community.events}
                    </strong>{" "}
                    events
                  </span>
                </div>
                <span className="flex size-9 items-center justify-center rounded-full border border-[#E8E8E8] transition-all duration-300 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
