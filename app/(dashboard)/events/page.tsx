import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  MapPin,
  Users,
} from "lucide-react";

const events = [
  {
    id: "midnight-rooftop",
    title: "Midnight Rooftop Session",
    category: "Music",
    location: "Belapur, Navi Mumbai",
    date: "Saturday, August 15",
    time: "8:00 PM – 11:30 PM",
    price: "₹299",
    seats: "24 seats left",
    host: "BunkGo Sessions",
    description:
      "An intimate rooftop night with live music, city lights and a crowd that actually wants to be there. Come for the music, stay for the people.",
    accent: "from-neutral-200 via-white to-neutral-300",
  },
  {
    id: "anime-cafe",
    title: "Anime Café Meetup",
    category: "Anime",
    location: "Nerul, Navi Mumbai",
    date: "Saturday, August 16",
    time: "5:00 PM – 8:00 PM",
    price: "Free",
    seats: "48 seats left",
    host: "Nerul Anime Club",
    description:
      "A relaxed evening for anime fans, manga lovers and people looking to meet their kind of crowd.",
    accent: "from-neutral-100 via-white to-neutral-200",
  },
  {
    id: "open-mic",
    title: "Sunday Open Mic",
    category: "Comedy",
    location: "Thane West",
    date: "Sunday, August 17",
    time: "7:30 PM – 10:00 PM",
    price: "₹199",
    seats: "12 seats left",
    host: "The Local Stage",
    description:
      "Stand-up, stories and completely unfiltered Sunday energy from local performers.",
    accent: "from-neutral-200 via-white to-neutral-300",
  },
  {
    id: "sunset-run",
    title: "Sunset Run Club",
    category: "Fitness",
    location: "Kharghar, Navi Mumbai",
    date: "Sunday, August 17",
    time: "6:30 AM – 8:00 AM",
    price: "₹99",
    seats: "31 seats left",
    host: "Run NM",
    description:
      "A friendly community run for beginners and regular runners. No pace pressure, just good energy.",
    accent: "from-neutral-100 via-white to-neutral-200",
  },
  {
    id: "startup-social",
    title: "Founders & Builders Social",
    category: "Startup",
    location: "Vashi, Navi Mumbai",
    date: "Friday, August 15",
    time: "6:30 PM – 9:30 PM",
    price: "₹399",
    seats: "18 seats left",
    host: "Builders Club",
    description:
      "Meet founders, designers, developers and ambitious people building interesting things around Mumbai.",
    accent: "from-neutral-200 via-white to-neutral-300",
  },
  {
    id: "coffee-walk",
    title: "Sunday Coffee Walk",
    category: "Coffee",
    location: "Ghodbunder, Thane",
    date: "Sunday, August 17",
    time: "9:00 AM – 11:00 AM",
    price: "₹149",
    seats: "20 seats left",
    host: "Slow Sunday",
    description:
      "Coffee, conversations and a slow Sunday morning with people from around Thane.",
    accent: "from-neutral-100 via-white to-neutral-200",
  },
];

type EventPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EventPage({ params }: EventPageProps) {
  const { id } = await params;

  const event = events.find((item) => item.id === id);

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-950">

      {/* HEADER */}

      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">

          <Link
            href="/discover"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition hover:text-black"
          >
            <ArrowLeft size={17} />
            Back to Discover
          </Link>

          <Link
            href="/"
            className="text-xl font-black tracking-tight"
          >
            BunkGo
          </Link>

          <div className="hidden text-sm text-neutral-400 md:block">
            Navi Mumbai · Thane
          </div>

        </div>
      </header>

      {/* EVENT */}

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-16">

        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr]">

          {/* POSTER */}

          <div
            className={`relative min-h-[520px] overflow-hidden rounded-[40px] bg-gradient-to-br ${event.accent} border border-neutral-200`}
          >

            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] [background-size:32px_32px]" />

            <div className="absolute left-8 top-8 rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] shadow-sm">
              {event.category}
            </div>

            <div className="absolute bottom-8 left-8 right-8">

              <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
                BunkGo Experience
              </p>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-7xl">
                {event.title}
              </h1>

            </div>

          </div>

          {/* DETAILS */}

          <div className="flex flex-col justify-center">

            <div className="mb-8">
              <span className="rounded-full bg-black px-4 py-2 text-xs font-medium text-white">
                {event.seats}
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              {event.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-500">
              {event.description}
            </p>

            {/* INFO */}

            <div className="mt-10 space-y-5 border-y border-neutral-200 py-8">

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-neutral-100 p-3">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                    Location
                  </p>
                  <p className="mt-1 font-medium">
                    {event.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-neutral-100 p-3">
                  <CalendarDays size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                    Date
                  </p>
                  <p className="mt-1 font-medium">
                    {event.date}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-neutral-100 p-3">
                  <Clock3 size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                    Time
                  </p>
                  <p className="mt-1 font-medium">
                    {event.time}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-neutral-100 p-3">
                  <Users size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                    Hosted by
                  </p>
                  <p className="mt-1 font-medium">
                    {event.host}
                  </p>
                </div>
              </div>

            </div>

            {/* BOOKING */}

            <div className="mt-8 rounded-[28px] border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

              <div className="flex items-end justify-between gap-6">

                <div>
                  <p className="text-sm text-neutral-400">
                    Ticket price
                  </p>

                  <p className="mt-1 text-4xl font-black tracking-tight">
                    {event.price}
                  </p>
                </div>

                <Link
                  href={`/booking?event=${event.id}`}
                  className="flex h-14 flex-1 items-center justify-center rounded-full bg-black px-7 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-neutral-800"
                >
                  Book Now
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="border-t border-neutral-200 bg-white">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:px-8 lg:grid-cols-2">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              About this experience
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-black tracking-tight md:text-5xl">
              Go somewhere.
              <br />
              Meet someone.
              <br />
              Remember it.
            </h2>
          </div>

          <div className="max-w-xl text-lg leading-8 text-neutral-500">
            <p>
              BunkGo is built for experiences that are easy to miss but worth
              showing up for. Discover local events, meet new people and find
              communities around Navi Mumbai and Thane.
            </p>

            <p className="mt-6">
              Every experience on BunkGo is designed to make going out feel
              simpler, more intentional and more exciting.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}