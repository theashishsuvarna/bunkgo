export type EventItem = {
  id: string;
  title: string;
  location: string;
  date: string;
  price: string;
  tag: string;
  image: string;
};

export const heroEvent: EventItem = {
  id: "midnight-rooftop",
  title: "Midnight Rooftop Session",
  location: "Belapur",
  date: "Saturday",
  price: "₹299",
  tag: "Live Tonight",
  image: "/images/events/rooftop.jpg",
};

export const featuredEvents: EventItem[] = [
  {
    id: "indie-night",
    title: "Indie Night at the Warehouse",
    location: "Airoli",
    date: "Friday • 9:00 PM",
    price: "₹499",
    tag: "Music",
    image: "/images/events/indie.jpg",
  },
  {
    id: "comedy-underground",
    title: "Underground Comedy Hour",
    location: "Vashi",
    date: "Saturday • 7:30 PM",
    price: "₹349",
    tag: "Comedy",
    image: "/images/events/comedy.jpg",
  },
  {
    id: "sunset-yoga",
    title: "Sunset Yoga on the Deck",
    location: "Kharghar",
    date: "Sunday • 6:00 AM",
    price: "₹199",
    tag: "Wellness",
    image: "/images/events/yoga.jpg",
  },
];

export const bentoItems = [
  {
    id: "live-tonight",
    title: "Live Tonight",
    subtitle: "12 events happening now",
    size: "large" as const,
    accent: "#1a1a1a",
  },
  {
    id: "coffee-walk",
    title: "Coffee Walk",
    subtitle: "Nerul • Every Saturday",
    size: "medium" as const,
    accent: "#6b6b6b",
  },
  {
    id: "anime-meetup",
    title: "Anime Meetup",
    subtitle: "Seawoods • 240 members",
    size: "medium" as const,
    accent: "#4a4a4a",
  },
  {
    id: "run-club",
    title: "Run Club",
    subtitle: "Kharghar • Sunday 6 AM",
    size: "small" as const,
    accent: "#2d2d2d",
  },
];

export const heroCategories = [
  "Music",
  "Comedy",
  "Startup",
  "Anime",
  "Coffee",
  "Nightlife",
] as const;

export const communities = [
  {
    id: "startup-thane",
    name: "Startup Thane",
    members: 842,
    events: 24,
    description: "Founders, builders, and dreamers meeting every week.",
  },
  {
    id: "anime-navimumbai",
    name: "Anime Navi Mumbai",
    members: 1240,
    events: 18,
    description: "Watch parties, cosplay meetups, and manga swaps.",
  },
  {
    id: "run-club-kharghar",
    name: "Kharghar Run Club",
    members: 560,
    events: 52,
    description: "Sunrise runs along the waterfront, every Sunday.",
  },
  {
    id: "coffee-crawl",
    name: "Coffee Crawl Crew",
    members: 318,
    events: 12,
    description: "Discover hidden cafés across Belapur and Nerul.",
  },
];
