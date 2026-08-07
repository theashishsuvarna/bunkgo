export const siteConfig = {
  name: "BunkGo",
  description:
    "Discover local experiences, underground communities and events across Navi Mumbai and Thane.",
  locations: ["Navi Mumbai", "Thane"] as const,
  links: {
    discover: "/discover",
    communities: "#communities",
    host: "/organizers",
    signIn: "/sign-in",
    signUp: "/sign-up",
  },
  social: {
    instagram: "https://instagram.com/bunkgo",
    twitter: "https://twitter.com/bunkgo",
    linkedin: "https://linkedin.com/company/bunkgo",
  },
} as const;
