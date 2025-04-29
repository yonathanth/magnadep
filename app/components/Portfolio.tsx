"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { events } from "../portfolio/Events";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });

  return (
    <div className="max-w-6xl mx-auto items-center md:pt-20" ref={sectionRef}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              }
            : {}
        }
        className="text-center text-xl lg:text-3xl font-semibold mt-16"
      >
        Our Previous Works
      </motion.h2>

      <div className="overflow-x-auto no-scrollbar px-4">
        <div className="flex gap-6">
          {events.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                        delay: index * 0.15,
                      },
                    }
                  : {}
              }
              className="flex flex-col min-w-[300px] mt-12 mb-6 bg-[#FCFBF4] p-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                className="relative w-full h-56"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>

              <div className="text-left m-2">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.4,
                            delay: index * 0.15 + 0.2,
                          },
                        }
                      : {}
                  }
                  className="text-lg font-semibold mb-2"
                >
                  {work.title}
                </motion.h3>

                <motion.p
                  className="text-black mb-2 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.4,
                            delay: index * 0.15 + 0.3,
                          },
                        }
                      : {}
                  }
                >
                  {work.description}
                </motion.p>

                <motion.div whileHover={{ scale: 1.03 }}>
                  <Link
                    href={{
                      pathname: "/portfolio/event",
                      query: { id: work.id },
                    }}
                    className="text-left text-sm font-thing text-primary underline inline-block"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.6 },
              }
            : {}
        }
        className="flex justify-end"
      >
        <motion.div whileHover={{ scale: 1.03 }}>
          <Link
            href="/portfolio"
            className="text-left text-base font-thing text-black px-5 underline"
          >
            Explore More
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
