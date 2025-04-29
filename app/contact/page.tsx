"use client";

import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"; // Replaced Lucide icons
import Header from "../components/Header";
import Footer from "../components/Footer";
import Action from "../components/action";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactUs = () => {
  const actionRef = useRef(null);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  const isActionInView = useInView(actionRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });
  const isLeftInView = useInView(leftSectionRef, { once: true });
  const isRightInView = useInView(rightSectionRef, { once: true });

  return (
    <div className="">
      <div className="absolute top-0 w-full bg-transparent lg:bg-white">
        <Header />
      </div>
      <div className="flex min-h-screen flex-col w-full mb-20">
        {/* Contact Section */}
        <div className="flex flex-col lg:flex-row w-full mb-16 md:mb-24">
          {/* Left Section */}
          <div className="w-full h-[50vh] lg:h-[100vh] lg:w-1/2 pt-28 lg:pt-0 bg-[#FCFBF4] flex flex-col justify-center items-center p-10 border-r-2 text-center">
            <div ref={leftSectionRef}>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLeftInView
                    ? {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, ease: "easeOut" },
                      }
                    : {}
                }
                className="text-6xl lg:text-[88px] text-nowrap text-left mb-4 lg:mb-0"
              >
                Contact Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLeftInView
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
                className="text-sm mb-8 lg:mb-0 lg:text-base max-w-lg leading-tight text-left text-gray-700"
              >
                We&apos;re here to help bring your vision to life! Whether
                you&apos;re planning an event, need expert marketing solutions,
                or require reliable medical services, our team is ready to
                assist.
              </motion.p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full h-[50vh] lg:h-[100vh] lg:w-1/2 bg-primary text-white text-sm lg:text-base flex flex-col gap-8 justify-center sm:items-center lg:items-start p-8 lg:p-24">
            <motion.div
              ref={rightSectionRef}
              initial="hidden"
              animate={isRightInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2,
                  },
                },
              }}
              className="flex flex-col gap-8 max-w-lg"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex items-center mb-4"
              >
                <FaMapMarkerAlt className="mr-2 w-5 h-5" />
                <p className="text-base md:text-xl">
                  Central Mall, 1st floor, Hawassa, sidama Region, Ethiopia
                </p>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex items-center mb-4"
              >
                <FaPhone className="mr-2 w-5 h-5" />
                <p className="text-base md:text-xl">+251936657665</p>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex items-center"
              >
                <FaEnvelope className="mr-2 w-5 h-5" />
                <p className="text-base md:text-xl">
                  magnaeventsandmarketing@gmail.com
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full">
          <iframe
            className="w-full h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d931.8177617622563!2d38.48668093414983!3d7.049017912217382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b14f8ccde9bdf5%3A0xe0283528c2cce29!2sCentral%20Grand%20Mall!5e0!3m2!1sen!2set!4v1741440596683!5m2!1sen!2set"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Action Component */}
      <motion.div
        ref={actionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={
          isActionInView
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              }
            : {}
        }
        className="my-20"
      >
        <Action />
      </motion.div>

      <Footer />
    </div>
  );
};

export default ContactUs;
