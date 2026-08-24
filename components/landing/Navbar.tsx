"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "@/components/shared/Logo";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/lib/config/site";
import { fadeIn, transition } from "@/lib/motion/animations";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Discover", href: siteConfig.links.discover },
  { name: "Communities", href: siteConfig.links.communities },
  { name: "About", href: "/about" },
  { name: "Host", href: siteConfig.links.host },
];

export default function Navbar() {
  const [location, setLocation] = useState<(typeof siteConfig.locations)[number]>(
    siteConfig.locations[0]
  );

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={transition}
      className="sticky top-0 z-50 border-b border-[#E8E8E8] bg-white"
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-10">
        <Logo />

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[0.9375rem] text-neutral-500 transition-colors duration-200 hover:text-neutral-950"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="hidden items-center gap-1.5 rounded-full border border-[#E8E8E8] px-4 py-2 text-sm text-neutral-600 transition-colors hover:border-neutral-300 hover:text-neutral-950 sm:inline-flex"
            >
              {location}
              <ChevronDown className="size-3.5 opacity-50" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[160px]">
              {siteConfig.locations.map((loc) => (
                <DropdownMenuItem
                  key={loc}
                  onClick={() => setLocation(loc)}
                  className={location === loc ? "font-medium" : undefined}
                >
                  {loc}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href={siteConfig.links.signIn}
            className={cn(
              buttonVariants(),
              "hidden rounded-full bg-neutral-950 px-6 hover:bg-neutral-800 sm:inline-flex"
            )}
          >
            Sign In
          </Link>

          <Sheet>
            <SheetTrigger
              className="inline-flex size-10 items-center justify-center rounded-full border border-[#E8E8E8] md:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Logo href="/" />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-10 flex flex-col gap-6" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-2xl font-medium tracking-tight text-neutral-950"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-10 space-y-4">
                <p className="text-sm text-neutral-500">Location</p>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.locations.map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => setLocation(loc)}
                      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                        location === loc
                          ? "border-neutral-950 bg-neutral-950 text-white"
                          : "border-[#E8E8E8] text-neutral-600"
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
                <Link
                  href={siteConfig.links.signIn}
                  className={cn(
                    buttonVariants(),
                    "mt-4 flex w-full rounded-full bg-neutral-950 hover:bg-neutral-800"
                  )}
                >
                  Sign In
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
