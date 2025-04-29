"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });

  return (
    <div className="relative w-full mx-auto max-w-[96vw] p-1" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[80vh] rounded-2xl overflow-hidden"
      >
        <Image
          src="/aboutusphoto.png"
          alt="Office workspace"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6, delay: 0.4 },
                }
              : {}
          }
          className="absolute inset-0 flex items-center justify-center"
          style={{ top: "-25%" }}
        >
          <Image
            src="/grayscalelogo.svg"
            alt="Grayscale Logo"
            width={100}
            height={100}
            objectFit="contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.6 },
                }
              : {}
          }
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-2 py-8 leading-loose sm:p-8 text-white text-sm sm:text-lg"
        >
          <p className="text-center text-xs sm:text-sm lg:text-base">
            BRAND PHILOSOPHY ማኛ (noun) :- A type of Bread (እንጀራ / Injera), that
            is considered the best compared to the available options of bread in
            Ethiopia. ማኛ (adjective) - Slang :-of the most excellent or
            desirable type or quality. At the heart of the Ethiopian community
            lies Teff, a vital grain renowned for its role in producing Injera,
            the staple food that forms the backbone of the local cuisine; with
            ማኛ (Magna)  being the best option from the choices at hand. Drawing
            inspiration from this tradition of being the finest from available
            resources, ማኛ events and marketing started out in July 2023
            comprising of individuals with 3 years of experience in the event
            /marketing business and proud alumni of the reputed & prestigious
            Hawassa University. Located in the heart of Sidama; Hawassa, the
            company began its venture with social events and branched out into
            different sectors of the market including; corporate events,
            marketing, communication & advertising, web & App Design, tours, and
            travel. Currently it is expanding by recruiting creative individuals
            and forming alliances with other businesses to provide the best
            service possible for the public.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
