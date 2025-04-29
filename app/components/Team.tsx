"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const teamMembers = [
  {
    name: "Dr. Motti Kassaye",
    role: "Cheif Executive Officer",
    image: "/moti.png",
  },
  {
    name: "Dr. Musse Demissie ",
    role: "Managing Director ",
    image: "/mussie1.png",
  },
  {
    name: "Dr. Yednekachew Hailu ",
    role: "Creative Director ",
    image: "/ydne1.png",
  },
  {
    name: "Dr. Yoseph Tenaye",
    role: "Deputy Executive Director",
    image: "/yoseph.png",
  },
];

export default function TeamSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });

  return (
    <section className="py-8 mb-14 mt-14 md:mt-32" ref={sectionRef}>
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
        className="text-center text-xl lg:text-3xl font-semibold mb-4 lg:mb-16"
      >
        The Team
      </motion.h2>

      <div className="max-w-7xl flex flex-col space-y-8 mx-auto px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-12"
          initial={{ opacity: 0 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  transition: { duration: 0.6, delay: 0.2 },
                }
              : {}
          }
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.3 + index * 0.1,
                      },
                    }
                  : {}
              }
              className="flex flex-col items-center text-center"
            >
              <motion.div
                className="flex justify-center items-center relative w-40 md:w-60 h-40 md:h-60"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </motion.div>
              <h3 className="font-bold mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.7,
                  },
                }
              : {}
          }
          className="flex justify-center text-center"
        >
          <div className="text-center">
            <motion.div
              className="text-center relative w-40 md:w-60 h-40 md:h-60"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/lelagnaw1.png"
                alt="Selam Abebe"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </motion.div>

            <h3 className="font-bold mt-4">Dr. Melaku Andamlak</h3>
            <p className="text-gray-600">Finance Head </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
