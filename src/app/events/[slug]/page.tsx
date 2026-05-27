// src/app/events/[slug]/page.tsx

import { Calendar, MapPin, Clock, ArrowLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events } from "../page";

// ── static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

// ── helpers ───────────────────────────────────────────────────────────────────

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ── page ──────────────────────────────────────────────────────────────────────

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = events.find((e) => e.slug === params.slug);
  if (!event) notFound();

  const isPast = event.status === "past";

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Back link */}
      <Link
        href="/events"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Events
      </Link>

      {/* Hero image */}
      {event.image && (
        <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-8 bg-slate-100">
          <Image src={event.image} alt={event.title} fill className="object-cover" />
        </div>
      )}

      {/* Title + meta */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-800 mb-4">
          {event.title}
        </h1>

        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-slate-400" />
            {formatDate(event.date)}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-400" />
            {event.time}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-slate-400" />
            {event.location}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="prose prose-slate max-w-none mb-10">
        <p className="text-slate-600 leading-relaxed text-base">
          {event.fullDescription || event.description}
        </p>
      </div>

      {/* Register button — upcoming only */}
      {event.registrationLink && !isPast && (
        <div className="mb-12">
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors px-5 py-2.5 rounded-full"
          >
            Register Now
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      )}

      {/* Gallery — past events */}
      {isPast && event.gallery && event.gallery.length > 0 && (
        <section>
          <h2 className="text-xl font-serif font-semibold text-slate-800 mb-5">
            Event Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {event.gallery.map((src, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src={src}
                  alt={`${event.title} photo ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>
      )}

    </main>
  );
}
