"use client";

import { Sparkles, Users, Ticket } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  transition,
  viewport,
} from "@/lib/motion/animations";

const features = [
  {
    icon: Sparkles,
    title: "Curated",
    description:
      "Every experience is handpicked. No spam listings, no filler events — only things worth leaving the house for.",
  },
  {
    icon: Users,
    title: "Communities",
    description:
      "Join underground groups around anime, startups, running, and more. Real people, real connections.",
  },
  {
    icon: Ticket,
    title: "Simple Booking",
    description:
      "Book in seconds. No confusing checkout flows. Just pick an experience and show up.",
  },
];

export default function WhyBunkGo() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
        className="mb-20 lg:mb-28"
      >
        <motion.p
          variants={fadeUp}
          transition={transition}
          className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400"
        >
          Why BunkGo
        </motion.p>
        <motion.h2
          variants={fadeUp}
          transition={transition}
          className="max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-neutral-950"
        >
          Built for people who actually show up.
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
        className="grid gap-6 lg:grid-cols-3 lg:gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={fadeUp}
            transition={{ ...transition, delay: index * 0.08 }}
            className="rounded-[36px] border border-[#E8E8E8] bg-white p-8 lg:p-10"
          >
            <div className="mb-8 flex size-12 items-center justify-center rounded-2xl border border-[#E8E8E8]">
              <feature.icon className="size-5 text-neutral-950" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-neutral-950">
              {feature.title}
            </h3>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-neutral-500">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
