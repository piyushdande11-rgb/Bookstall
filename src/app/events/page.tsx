// Add 'category' to your existing type definition
type EventStatus = "upcoming" | "ongoing" | "past";

type EventItem = {
  slug: string;
  title: string;
  category?: string;
  description: string;
  date?: string;
  time?: string;
  location?: string;
  image?: string;
  status: EventStatus;
  registrationLink?: string;
  gallery?: string[];
  fullDescription?: string;
};

export const events: EventItem[] = [
  {
    slug: "bookstall-military-school-2025",
    title: "Bookstall at Military School",
    category: "Literacy Drive", // New field
    description: "Bringing literature and educational resources to the students at the local Military School.",
    // ... rest of your fields
    status: "past" as EventStatus,
  },
];



import Image from "next/image";
import Link from "next/link";

export default function EventsPage() {
    function EventCard({ event }: { event: EventItem }) {
      return (
        <div className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="relative h-48 w-full overflow-hidden">
            <Image src={event.image || "/events/default.jpg"} alt={event.title} fill className="object-cover group-hover:scale-105 transition-transform" />
          </div>
          <div className="p-5">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{event.category}</span>
            <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">{event.title}</h3>
            <p className="text-slate-600 text-sm mb-4 line-clamp-2">{event.description}</p>
          
            <Link 
              href={`/events/${event.slug}`}
              className="inline-block w-full text-center py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition"
            >
              View Project
            </Link>
          </div>
        </div>
      );
    }
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold text-slate-900 mb-4">Our Initiatives</h1>
        <p className="text-slate-600 max-w-lg mx-auto">
          From educational workshops to community outreach, discover the projects 
          that define ABC Foundation's commitment to growth.
        </p>
      </div>

      {/* Grouping events by their category */}
      <section className="grid gap-12">
        {["Literacy Drive", "Workshops", "Community Outreach"].map((cat) => (
          <div key={cat}>
            <h2 className="text-2xl font-serif font-semibold text-slate-800 mb-6 border-b pb-2">
              {cat}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events
                .filter((e) => e.category === cat)
                .map((event) => (
                  <EventCard key={event.slug} event={event} />
                ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}