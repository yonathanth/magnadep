"use client";

import Image from "next/image";
import Header from "../components/Header";
import Action from "../components/action";
import Footer from "../components/Footer";
import Link from "next/link";
import { events } from "./Events";
import { motion } from "framer-motion";
import { useState } from "react";

// Categorize events
const medicalSolutionsEvents = events.filter(
  (event) => event.id === 1 || event.id === 5 // BOSAD Advocacy and Medical Fundraising
);
const eventsMarketingEvents = events.filter(
  (event) => event.id !== 1 && event.id !== 5 // All other events
);

export default function PreviousWork() {
  const [activeTab, setActiveTab] = useState("events");

  return (
    <div>
      <Header />
      <section className="py-8 lg:py-12 px-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-4xl text-nowrap sm:text-5xl lg:text-6xl">
            Previous Work
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mb-8 mt-5 lg:mt-8 text-sm sm:text-sm lg:text-base text-center text-black max-w-[340px] sm:max-w-xl lg:max-w-5xl mx-auto"
          >
            At Magna Events and Marketing, we take pride in delivering
            exceptional results across various industries. Our portfolio
            showcases a diverse range of successful projects, from large-scale
            corporate events to essential medical service solutions.
          </motion.p>
        </motion.div>

        {/* Enhanced Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex justify-center mb-12 mt-6 "
        >
          <div className="relative flex h-12 items-center bg-gra border border-primary rounded-full  p-1 ">
            <button
              onClick={() => setActiveTab("events")}
              className={`relative flex h-10 text-nowrap items-center justify-center rounded-full px-6 text-sm font-medium transition-all duration-300 ${
                activeTab === "events"
                  ? "bg-[#FCFBF4] text-black shadow-md"
                  : "text-gray-700"
              }`}
              style={{
                width: "160px",
                zIndex: 2,
              }}
            >
              Events & Marketing
            </button>
            <button
              onClick={() => setActiveTab("medical")}
              className={`relative flex h-10 text-nowrap items-center justify-center rounded-full px-6 text-sm font-medium transition-all duration-300 ${
                activeTab === "medical"
                  ? "bg-white text-black shadow-md"
                  : "text-gray-700"
              }`}
              style={{
                width: "140px",
                zIndex: 2,
              }}
            >
              Medical Solutions
            </button>
            <div
              className={`absolute top-1 bottom-1 left-1 right-1 flex transition-all duration-300 ${
                activeTab === "medical"
                  ? "translate-x-[160px]"
                  : "translate-x-0"
              }`}
              style={{
                width: activeTab === "events" ? "160px" : "140px",
              }}
            >
              <div className="h-full w-full rounded-full bg-white shadow-md"></div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-5 lg:mt-10 mb-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {(activeTab === "events"
            ? eventsMarketingEvents
            : medicalSolutionsEvents
          ).map((work, index) => (
            <div
              key={index}
              className="p-6 bg-[#FCFBF4] rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-1"
            >
              <Link
                href={{ pathname: "/portfolio/event", query: { id: work.id } }}
              >
                <div className="relative w-full h-56">
                  <Image
                    src={work.image}
                    alt={work.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="font-bold mt-4 mb-4">{work.title}</h3>
                <p className="text-black leading-relaxed">{work.description}</p>
              </Link>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="my-10"
        >
          <Action />
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
