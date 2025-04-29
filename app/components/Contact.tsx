"use client";
import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });

  return (
    <div
      className="relative py-4 lg:py-8 px-6 lg:px-12 h-[250px] max-w-full my-10 lg:mt-18 lg:mb-24 mx-3 lg:mr-5 lg:ml-10 flex justify-start text-white"
      ref={sectionRef}
    >
      <div
        className="absolute inset-0 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: 'url("/about us bg.svg")' }}
      />

      <div className="relative w-full z-10 text-left">
        <motion.div
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
        >
          <h2 className="text-xl lg:text-2xl font-bold mb-2 md:mb-4">
            We&apos;d Love to Hear from You!
          </h2>
          <motion.p
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
            className="text-sm md:text-lg lg:mb-6 font-light"
          >
            Reach out for inquiries, bookings, or more information.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
                }
              : {}
          }
          className="flex flex-col md:flex-row md:items-center max-w-full justify-between gap-2 md:gap-6 text-white text-sm sm:text-lg lg:text-xl  mt-8  sm:mt-14 lg:mt:14"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: "easeOut", delay: 0.5 },
                  }
                : {}
            }
            className="flex items-center gap-2"
          >
            <FaMapMarkerAlt className="w-5 h-5" />{" "}
            <span>
              Central Mall, 1st floor, Hawassa, sidama Region, Ethiopia
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: "easeOut", delay: 0.5 },
                  }
                : {}
            }
            className="flex items-center gap-2"
          >
            <FaPhone className="w-5 h-5" /> <span>+251936657665</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: "easeOut", delay: 0.5 },
                  }
                : {}
            }
            className="flex items-center gap-2"
          >
            <FaEnvelope className="w-5 h-5" />{" "}
            <span className="text-wrap">magnaeventsandmarketing@gmail.com</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
