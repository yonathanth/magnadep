"use client";

import React, { useEffect, useState } from "react";
import WaveComponenets from "./WaveComponenets";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useRef } from "react";

const AboutUs = () => {
  const [description, setDescription] = useState("");
  const aboutRef = useRef(null);
  const statsRef = useRef(null);

  const isInView = useInView(aboutRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });

  const isStatsInView = useInView(statsRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });

  // Animation values for Events Organized (74)
  const eventsCount = useMotionValue(0);
  const eventsRounded = useTransform(eventsCount, Math.round);

  // Animation values for Clients Served (50)
  const clientsCount = useMotionValue(0);
  const clientsRounded = useTransform(clientsCount, Math.round);

  // Animation values for Attendees Reached (1000)
  const attendeesCount = useMotionValue(0);
  const attendeesRounded = useTransform(attendeesCount, Math.round);

  useEffect(() => {
    if (isStatsInView) {
      // Animate Events Organized to 74
      animate(eventsCount, 74, {
        duration: 3,
        ease: "easeOut",
      });

      // Animate Clients Served to 50
      animate(clientsCount, 50, {
        duration: 3,
        ease: "easeOut",
      });

      // Animate Attendees Reached to 1000
      animate(attendeesCount, 1000, {
        duration: 3,
        ease: "easeOut",
      });
    }
  }, [isStatsInView, eventsCount, clientsCount, attendeesCount]);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setDescription(
        "ማኛ (noun): A type of bread (እንጀራ / Injera), considered the best compared to available options in Ethiopia. ማኛ (adjective) - Slang: Of the most excellent or desirable type or quality. At the heart of the Ethiopian community lies Teff, a vital grain renowned for its role in producing Injera, the staple food that forms the backbone of local cuisine—with ማኛ (Magna) being the finest choice available. Inspired by this tradition of excellence, ማኛ Events and Marketing launched in July 2023, founded by Hawassa University alumni with 3 years of experience in events and marketing. Based in Hawassa, Sidama, the company began with social events and expanded into corporate events, marketing, advertising, web & app design, and tours & travel. Now, ማኛ is growing by recruiting creative talent and forming strategic partnerships to deliver top-tier services."
      );
    } else if (window.innerWidth <= 768) {
      setDescription(
        "ማኛ (noun): A type of bread (እንጀራ / Injera), considered the best among Ethiopian options. ማኛ (adjective) - Slang: Of the finest quality. At the heart of the Ethiopian community lies Teff, the grain behind Injera, the nation’s staple—with ማኛ (Magna) standing as the top choice. Drawing from this legacy of excellence, ማኛ Events and Marketing was founded in 2023 by Hawassa University alumni with event and marketing expertise. Based in Hawassa, the company started with social events and grew into corporate services, marketing, digital solutions, and travel. Now, ማኛ is expanding through creative talent and partnerships to deliver unmatched quality."
      );
    }
  }, []);

  return (
    <div className="mb-20" ref={aboutRef}>
      <div className="mx-2 md:mx-6 rounded-xl">
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
          <WaveComponenets
            title="About Us"
            description={description}
            strong="Who We Are?"
            isForServices={false}
          />
        </motion.div>

        <div
          ref={statsRef}
          className="flex flex-wrap justify-center gap-6 mt-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isStatsInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
                  }
                : {}
            }
            className="text-center"
          >
            <motion.strong className="font-extrabold text-3xl xs:text-3xl sm:text-4xl md:text-4xl">
              {eventsRounded}
            </motion.strong>{" "}
            +
            <span className="block text-base xs:text-lg sm:text-xl md:text-2xl">
              {" "}
              Events Organized
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isStatsInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
                  }
                : {}
            }
            className="text-center"
          >
            <motion.strong className="font-extrabold text-3xl xs:text-3xl sm:text-4xl md:text-4xl">
              {clientsRounded}
            </motion.strong>{" "}
            +
            <span className="block text-base xs:text-lg sm:text-xl md:text-2xl">
              {" "}
              Clients Served
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isStatsInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
                  }
                : {}
            }
            className="text-center"
          >
            <motion.strong className="font-extrabold text-3xl xs:text-3xl sm:text-4xl md:text-4xl">
              {attendeesRounded}
            </motion.strong>{" "}
            +
            <span className="block text-base xs:text-lg sm:text-xl md:text-2xl">
              {" "}
              Attendees Reached
            </span>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
