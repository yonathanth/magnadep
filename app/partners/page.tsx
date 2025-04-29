"use client";

import Image from "next/image";
import Header from "../components/Header";
import Action from "../components/action";
import Footer from "../components/Footer";
import { partners } from "./partners";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PreviousWork() {
  const actionRef = useRef(null);
  const gridRef = useRef(null);
  const isActionInView = useInView(actionRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });
  const isGridInView = useInView(gridRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });

  return (
    <div>
      <Header />
      <section className="py-8 lg:py-12 px-2">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl text-nowrap sm:text-5xl lg:text-6xl"
          >
            Our Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mb-5 max-w-[340px] mt-5 lg:mt-8 text-sm sm:text-sm lg:text-base text-center text-black  sm:max-w-xl lg:max-w-5xl mx-auto"
          >
            we collaborate with esteemed partners to ensure our clients receive
            the most comprehensive services in our niche. Through these
            partnerships, we bridge the gaps in our offerings, providing access
            to expert solutions beyond our own capabilities. This way, our
            clients enjoy a seamless, top-tier experience with the best in the
            industry.
          </motion.p>

          {/* Animated Cards Grid */}
          <motion.div
            ref={gridRef}
            initial={{ opacity: 0, y: 20 }}
            animate={
              isGridInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.4,
                    },
                  }
                : {}
            }
            className="mt-5 lg:mt-10 mb-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="p-6 bg-[#FCFBF4] rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-1"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={partner.image}
                    alt={partner.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg scale-75 sm:scale-100"
                    priority={index < 4}
                  />
                </div>
                <h3 className="font-bold mt-4 mb-4">{partner.title}</h3>
                <p className="text-black leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Animated Action Component */}
          <motion.div
            className="my-10"
            ref={actionRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isActionInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.16, 0.77, 0.47, 0.97],
                    },
                  }
                : {}
            }
          >
            <Action />
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
