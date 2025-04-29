"use client";
import { Briefcase, Stethoscope } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    category: "Events and Marketing ",
    icon: <Briefcase size={24} />,
    services: [
      "Event Planning and Management",
      "Marketing Strategies",
      "Communication and advertising",
      "Web and application design ",
      "Tour and travel",
    ],
  },
  {
    category: "Medical Solutions",
    icon: <Stethoscope size={24} />,
    services: [
      "Medical Events & Exhibitions",
      "Medical Marketing ",
      "Health education & Community Trainings",
    ],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });

  return (
    <div className="pt:0 md:pt-2" ref={sectionRef}>
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
        className="text-center text-xl lg:text-3xl font-semibold my-8 md:my-12"
      >
        Our Services
      </motion.h2>

      <div className="grid grid-cols-1 max-w-6xl mx-auto md:grid-cols-2 gap-6 p-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.1,
                    },
                  }
                : {}
            }
            className={`group py-8 px-12 rounded-xl shadow-lg transition-all duration-500 ease-in-out cursor-pointer bg-[#FCFBF4] hover:bg-gradient-to-bl hover:from-secondary hover:to-primary hover:text-white`}
          >
            <div className="flex md:items-start items-center justify-center md:justify-start mb-4 gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`p-3 rounded-full transition-all duration-500 ease-in-out ${
                  index === 0
                    ? "bg-primary text-white group-hover:bg-white group-hover:text-primary"
                    : "bg-primary text-white group-hover:bg-white group-hover:text-primary"
                }`}
              >
                {service.icon}
              </motion.div>
            </div>

            <motion.h3
              initial={{ opacity: 0 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      transition: {
                        duration: 0.6,
                        delay: index * 0.1 + 0.2,
                      },
                    }
                  : {}
              }
              className="text-xl text-center mb-3 md:text-left font-semibold"
            >
              {service.category}
            </motion.h3>

            <ul className="mt-2 text-center md:text-left font-extralight space-y-2">
              {service.services.map((subService, subIndex) => (
                <motion.li
                  key={subIndex}
                  className="text-sm"
                  initial={{ opacity: 0 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          transition: {
                            duration: 0.4,
                            delay: index * 0.1 + subIndex * 0.05 + 0.3,
                          },
                        }
                      : {}
                  }
                >
                  {subService}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
