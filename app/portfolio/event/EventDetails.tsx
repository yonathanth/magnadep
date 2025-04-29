"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { events } from "../Events";

function EventContent() {
  const [isExpanded, setIsExpanded] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const event = events.find((event) => event.id === Number(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="bg-gradient-to-r from-secondary to-primary text-left items-left justify-center backdrop-blur-lg text-white p-4 lg:p-8 rounded-xl mx-3 lg:mx-6 shadow-lg mt-10 lg:mt-20">
      <p className="text-sm md:text-lg font-light text-center">
        {isExpanded ? event.fullText : event.fullText.slice(0, 500) + "..."}
      </p>
      <div className="flex justify-end">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-sm lg:text-base text-black px-6 py-1 bg-white rounded-lg shadow hover:bg-gray-50 transition"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export function EventDetails() {
  return (
    <Suspense fallback={<div>Loading event details...</div>}>
      <EventContent />
    </Suspense>
  );
}
