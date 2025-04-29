"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Team = () => {
  const [isJumping, setIsJumping] = useState(true);
  const nextSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isJumping) {
      timeoutId = setTimeout(() => setIsJumping(false), 1200);
    } else {
      timeoutId = setTimeout(() => setIsJumping(true), 3000);
    }
    return () => clearTimeout(timeoutId);
  }, [isJumping]);

  const teamMembers = [
    {
      name: "Dr Moti Kassaye - CEO",
      description:
        "Dr Motti Kassaye is the dynamic CEO of Magna Event and Marketing, bringing over three years of extensive experience in event planning and management to the organization. He possesses a keen attention to detail and an innate ability to understand client needs, ensuring that every event is tailored to exceed expectations.",
      image: "/moti.png",
    },
    {
      name: "Dr Musse Demissie - Managing Director",
      description:
        "Dr Musse Demissie is the Managing Director of Magna Event and Marketing, bringing over 5 years of leadership experience to the organization. Throughout his career, he has demonstrated an exceptional ability to lead diverse teams, cultivate a positive work environment, and implement innovative solutions.",
      image: "/mussie1.png",
    },

    {
      name: "Dr Yednekachew Hailu - Creative Director & General Secretary",
      description:
        "Dr Yednekachew Hailu serves as the Creative Director and General Secretary, combining a unique blend of creativity and organizational expertise. In his dual role, he oversees the creative direction of events while ensuring all operational aspects run smoothly and coordinates communication among stakeholders.",
      image: "/ydne1.png",
    },
    {
      name: "Dr Yoseph Tenaye - Deputy Executive Director",
      description:
        "Dr Yoseph Tenaye serves as the Deputy Executive Director of Magna Event and Marketing. With a career spanning several years, he has developed a robust skill set that encompasses all facets of event execution, from conception to completion.",
      image: "/yoseph.png",
    },
    {
      name: "Dr. Melaku Andamlak - Finance Head",
      description:
        "Dr. Melaku Andamlak, our Finance Head, has been an integral part of our team for three years, expertly managing financial planning and budgeting. With a strategic mindset, he has optimized costs and enhanced profitability, driving the financial success of our initiatives.",
      image: "/lelagnaw1.png",
    },
  ];

  return (
    <div className="flex flex-col max-w-6xl items-center justify-center">
      <h2 className="text-center text-2xl lg:text-4xl font-semibold mt-20">
        The Team{" "}
      </h2>{" "}
      <div className="text-black scroll-container relative">
        {teamMembers.map((member, index) => (
          <section
            key={index}
            className={`scroll-section sm:px-[5rem] md:px-[rem] sm:pt-2 lg:pt-20`}
            ref={index === 0 ? nextSectionRef : null}
          >
            <div
              className={`bg-gradient-to-t from-[#FEF7F4]/80 to-white flex flex-col-reverse  lg:flex-row items-center pt-4 lg:pt-12 gap-6 lg:gap-20 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2 px-6 lg:text-left">
                <motion.h2
                  className="text-2xl font-semibold mb-6 text-customBlue"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {member.name}
                </motion.h2>
                <motion.p
                  className="text-base text-left leading-relaxed text-black"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {member.description}
                </motion.p>
              </div>
              <motion.div
                className="w-full  lg:w-1/3 relative h-60 md:h-60 lg:h-60"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex justify-center items-end">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="rounded-lg"
                    width={300}
                    height={300}
                    objectFit="cover"
                  />
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Team;
