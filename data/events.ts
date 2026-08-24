export type EventItem = {
  id: string;
  title: string;
  category: string;
  location: string;
  city: "Navi Mumbai" | "Thane";
  date: string;
  time: string;
  price: string;
  tag: string;
  image: string;
  seatsLeft: number;
  capacity: number;
  host: string;
  description: string;
  status: "Published" | "Draft";
};

export const heroEvent: EventItem = {
  id: "midnight-rooftop",
  title: "Midnight Rooftop Session",
  category: "Music",
  location: "Belapur",
  city: "Navi Mumbai",
  date: "Saturday, August 15",
  time: "8:00 PM",
  price: "₹299",
  tag: "Live Tonight",
  image: "/images/events/rooftop-live.png",
  seatsLeft: 24,
  capacity: 80,
  host: "BunkGo Sessions",
  description: "An intimate rooftop night with live music, city lights and a crowd that actually wants to be there.",
  status: "Published",
};

export const featuredEvents: EventItem[] = [
  {
    id: "indie-night",
    title: "Indie Night at the Warehouse",
    category: "Music",
    location: "Airoli",
    city: "Navi Mumbai",
    date: "Friday • 9:00 PM",
    time: "9:00 PM",
    price: "₹499",
    tag: "Music",
    image: "/images/events/indie-night.png",
    seatsLeft: 18,
    capacity: 70,
    host: "Warehouse Collective",
    description: "A high-energy local showcase with independent artists and late-night conversations.",
    status: "Published",
  },
  {
    id: "comedy-underground",
    title: "Underground Comedy Hour",
    category: "Comedy",
    location: "Vashi",
    city: "Navi Mumbai",
    date: "Saturday • 7:30 PM",
    time: "7:30 PM",
    price: "₹349",
    tag: "Comedy",
    image: "/images/events/comedy-night.png",
    seatsLeft: 12,
    capacity: 70,
    host: "The Local Stage",
    description: "Stand-up, stories and completely unfiltered Sunday energy from local performers.",
    status: "Published",
  },
  {
    id: "sunset-yoga",
    title: "Sunset Yoga on the Deck",
    category: "Wellness",
    location: "Kharghar",
    city: "Navi Mumbai",
    date: "Sunday • 6:00 AM",
    time: "6:00 AM",
    price: "₹199",
    tag: "Wellness",
    image: "/images/events/sunrise-yoga.png",
    seatsLeft: 31,
    capacity: 50,
    host: "Run NM",
    description: "A gentle morning reset on the deck, open to all levels.",
    status: "Draft",
  },
];

export const events = [heroEvent, ...featuredEvents];
export const eventCategories = ["All", "Music", "Comedy", "Wellness"] as const;

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
