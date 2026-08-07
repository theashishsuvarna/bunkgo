import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { siteConfig } from "@/lib/config/site";

const footerLinks = {
  product: [
    { name: "Discover", href: siteConfig.links.discover },
    { name: "Communities", href: siteConfig.links.communities },
    { name: "Host an Event", href: siteConfig.links.host },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#E8E8E8] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
              Discover local experiences, underground communities and events
              across Navi Mumbai and Thane.
            </p>
            <div className="mt-6 flex gap-4">
              {Object.entries(siteConfig.social).map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm capitalize text-neutral-400 transition-colors hover:text-neutral-950"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium text-neutral-950">Product</p>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 transition-colors hover:text-neutral-950"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium text-neutral-950">Company</p>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 transition-colors hover:text-neutral-950"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium text-neutral-950">Legal</p>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 transition-colors hover:text-neutral-950"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[#E8E8E8] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-400">
            &copy; {new Date().getFullYear()} BunkGo. All rights reserved.
          </p>
          <p className="text-sm text-neutral-400">
            Made with care in Navi Mumbai.
          </p>
        </div>
      </div>
    </footer>
  );
}
