"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config/site";
import { fadeUp, transition, viewport } from "@/lib/motion/animations";
import { cn } from "@/lib/utils";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
        transition={transition}
        className="flex flex-col items-center rounded-[36px] border border-[#E8E8E8] bg-white px-8 py-20 text-center sm:px-16 sm:py-28 lg:py-32"
      >
        <h2 className="max-w-2xl text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-neutral-950">
          Ready to discover your next experience?
        </h2>
        <p className="mt-6 max-w-md text-[0.9375rem] leading-relaxed text-neutral-500">
          Join thousands of people exploring events and communities across Navi
          Mumbai and Thane.
        </p>
        <Link
          href={siteConfig.links.discover}
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-10 h-12 rounded-full bg-neutral-950 px-10 text-[0.9375rem] hover:bg-neutral-800"
          )}
        >
          Explore Events
          <ArrowRight className="ml-1 size-4" />
        </Link>
      </motion.div>
    </section>
  );
}
