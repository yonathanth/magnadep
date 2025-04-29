"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  { name: "Partner 1", logo: "/arada.png" },
  { name: "Partner 2", logo: "/hubhub1.png" },
];

export default function PartnersSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });

  return (
    <div
      className="relative bg-white text-black text-center md:pt-20"
      ref={sectionRef}
    >
      {/* Section Title & Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
              }
            : {}
        }
        className="max-w-4xl mx-auto py-12 mb-8 md:mb-12"
      >
        <h2 className="text-xl lg:text-3xl font-semibold">Our Partners</h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
                }
              : {}
          }
          className="mt-4 mx-6 text-sm lg:text-base"
        >
          At Magna, we collaborate with esteemed partners to ensure our clients
          receive the most comprehensive services in our niche. Through these
          partnerships, we bridge the gaps in our offerings, providing access to
          expert solutions beyond our own capabilities.
        </motion.p>
      </motion.div>

      {/* Static Black Angled Background */}
      <div className="relative w-full h-16 md:h-20 lg:h-24">
        <div className="absolute top-3 md:top-6 lg:top-10 left-0 w-full h-full bg-black -skew-y-3 origin-top-left" />

        {/* Partner Logos with Animation */}
        <div className="relative flex justify-center gap-8 md:gap-12 bg-primary py-4 md:py-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.4,
                        ease: "easeOut",
                        delay: 0.4 + index * 0.1,
                      },
                    }
                  : {}
              }
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={40}
                height={40}
                className="w-8 md:w-12 h-8 md:h-12 object-contain scale-125"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
