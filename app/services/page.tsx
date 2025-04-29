"use client";
import Action from "../components/action";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const actionRef = useRef(null);

  // Animation variants for service items
  const serviceItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div>
      <div className="absolute top-0 w-full bg-transparent lg:bg-white z-10">
        <Header />
      </div>
      <div className="flex flex-col lg:flex-row w-full min-h-screen mb-8 md:mb-14">
        {/* Left Section - Introduction with animations */}
        <div className="pt-32 lg:pt-0 w-full lg:w-1/3 bg-gray-100 flex flex-col items-center justify-center p-10">
          <div className="lg:ml-5">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-6xl lg:text-[88px] text-left mb-4 lg:mb-0"
            >
              Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-sm mb-8 lg:mb-0 lg:text-base max-w-lg leading-tight text-left text-gray-700"
            >
              At Magna Events and Marketing, we provide top-tier solutions in
              two core areas: Event & Marketing Services and Medical Solutions.
              Our expertise ensures that every project is executed with
              precision, creativity, and professionalism.
            </motion.p>
          </div>
        </div>

        {/* Middle Section - Event & Marketing Services */}
        <div className="w-full lg:w-1/3 lg:min-h-screen relative group">
          <h2 className="lg:absolute lg:top-24 w-full text-center py-2 lg:py-0 lg:-z-30 left-1/2 lg:-translate-x-1/2 text-2xl font-bold text-gray-600 transition-all duration-500">
            Event & Marketing Services
          </h2>
          <div className="w-full h-full bg-[#FCFBF4] flex -z-10 flex-col gap-2 lg:gap-8 justify-center  p-10  relative transition-all duration-500 lg:group-hover:translate-y-36">
            <div className="flex flex-col gap-6">
              {[
                "Event Planning and Management",
                "Marketing Strategies",
                "Communication and advertising",
                "Web and application design ",
                "Tour and travel",
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  variants={serviceItemVariants}
                  className="mb-4"
                >
                  <h2 className="text-gray-400 text-lg lg:text-xl font-semibold">{`0${
                    index + 1
                  }`}</h2>
                  <p className="text-black text-lg">{service}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Medical Solutions */}
        <div className="w-full lg:w-1/3 lg:min-h-screen relative group">
          <h2 className="lg:absolute lg:top-24 w-full text-center py-2 lg:py-0 lg:-z-30 left-1/2 lg:-translate-x-1/2 text-2xl font-bold text-gray-600 transition-all duration-500">
            Medical Solutions
          </h2>
          <div className="w-full h-full bg-primary text-white flex flex-col gap-2 lg:gap-8  -z-10 justify-center p-10 relative transition-all duration-500 lg:group-hover:translate-y-36">
            <div className="flex flex-col gap-6 ">
              {[
                " Medical Events & Exhibitions",
                "Medical Marketing",

                "Health Education & Community Trainings",
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  variants={serviceItemVariants}
                  className="mb-4"
                >
                  <h2 className="text-orange-300 text-lg lg:text-xl font-semibold">{`0${
                    index + 1
                  }`}</h2>
                  <p className="text-lg">{service}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Component with animation */}
      <div ref={actionRef} className="mb-8 md:mb-14 lg:pt-7 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="my-20"
        >
          <Action />
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
