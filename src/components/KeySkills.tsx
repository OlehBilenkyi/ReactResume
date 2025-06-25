import React from "react";
import { motion } from "framer-motion";

const KeySkills = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "Vue.js", level: 80 },
    { name: "JavaScript", level: 95 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "Next.js", level: 80 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.h2
        className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
        variants={itemVariants}
      >
        Key Skills
      </motion.h2>
      <motion.div
        className="flex flex-wrap gap-4 px-4 py-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#2f6a57] bg-[#18352c] p-6"
          variants={itemVariants}
        >
          <p className="text-white text-base font-medium leading-normal">
            Frontend Development Skills
          </p>
          <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate">
            90%
          </p>
          <div className="flex gap-1">
            <p className="text-[#8eccb9] text-base font-normal leading-normal">
              Overall
            </p>
            <p className="text-[#00F0FF] text-base font-medium leading-normal">
              +5%
            </p>
          </div>
          <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
            {skills.map((skill, index) => (
              <React.Fragment key={index}>
                <motion.div
                  className="border-[#2f6a57] bg-[#18352c] border-t-2 w-full"
                  style={{ height: `${skill.level}%` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                ></motion.div>
                <p className="text-[#8eccb9] text-[13px] font-bold leading-normal tracking-[0.015em]">
                  {skill.name}
                </p>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default KeySkills;
