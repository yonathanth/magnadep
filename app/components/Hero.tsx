"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "./Header";
import CustomButton from "./CustomButton";

const Hero = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });

  return (
    <div className="w-full">
      <div className="absolute w-full z-30">
        <Header />
      </div>

      <div className="bg-gradient-to-b flex flex-col justify-center from-primary/20 to-white relative min-h-screen mb-10 md:mb-20 overflow-hidden">
        <section
          ref={heroRef}
          className="relative flex flex-col items-center text-center py-20 px-4 md:py-32 md:px-6 max-w-6xl mx-auto"
        >
          {/* Background Semi-Circle */}
          <div className="absolute inset-0 flex items-center md:-ml-18 lg:-ml-12 -z-10">
            <Image
              src="/Vector (1).svg"
              alt="Background Semi-Circle"
              width={800}
              height={400}
              className="w-[90%] md:w-[70%] lg:w-[60%] max-w-[550px] z-10"
            />
          </div>

          {/* Hero Content */}
          <motion.h1
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
            className="text-2xl  sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-black relative z-10"
          >
            <motion.span
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
              className="block"
            >
              Creating Unforgettable Experiences
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.1,
                      },
                    }
                  : {}
              }
              className="block"
            >
              &
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.2,
                      },
                    }
                  : {}
              }
              className="block"
            >
              Providing Reliable Medical Solutions
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
                  }
                : {}
            }
            className="mt-4 text-sm max-w-56 md:max-w-full sm:text-base md:text-lg text-nowrap text-gray-600 relative z-10"
          >
            ማኛ : The best choice for your business{" "}
          </motion.p>

          {/* CTA Buttons */}
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
            className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-center space-x-0 md:space-x-4 z-20"
          >
            <CustomButton name="Book an Event" href="/event" />
            <CustomButton name="Contact Us" href="/contact" />
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
