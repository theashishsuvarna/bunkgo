import { NextResponse } from "next/server";
import { events } from "@/data/events";

type TicketmasterEvent = {
  id: string;
  name: string;
  url: string;
  dates?: { start?: { localDate?: string; localTime?: string } };
  _embedded?: { venues?: Array<{ name?: string; city?: { name?: string } }> };
};

/**
 * Live-event adapter. Add TICKETMASTER_API_KEY to .env.local to enable it;
 * the curated BunkGo events remain available as a dependable demo fallback.
 */
export async function GET() {
  const apiKey = process.env.TICKETMASTER_API_KEY;
  if (!apiKey) return NextResponse.json({ source: "curated", events });
  try {
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&city=Mumbai&size=20`, { next: { revalidate: 300 } });
    if (!response.ok) throw new Error("Live provider unavailable");
    const payload = await response.json() as { _embedded?: { events?: TicketmasterEvent[] } };
    const liveEvents = (payload._embedded?.events ?? []).map((event) => ({
      id: event.id, title: event.name, date: event.dates?.start?.localDate ?? "Date TBA", time: event.dates?.start?.localTime ?? "Time TBA", url: event.url,
      location: event._embedded?.venues?.[0]?.name ?? "Mumbai", city: event._embedded?.venues?.[0]?.city?.name ?? "Mumbai",
    }));
    return NextResponse.json({ source: "ticketmaster", events: liveEvents });
  } catch {
    return NextResponse.json({ source: "curated", events });
  }
}
