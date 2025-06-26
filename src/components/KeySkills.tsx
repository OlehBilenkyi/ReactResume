import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./motionConfig";

const skills = [
  { name: "React", level: 90 },
  { name: "Vue.js", level: 80 },
  { name: "JavaScript", level: 95 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "Next.js", level: 80 },
];

const KeySkills: React.FC = () => {
  return (
    <section id="skills" className="px-4 py-6">
      <motion.h2
        className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5"
        variants={itemVariants}
      >
        Key Skills
      </motion.h2>
      <motion.div
        className="flex flex-wrap gap-4"
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
          <p className="text-white text-[32px] font-bold leading-tight truncate">
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
                />
                <p className="text-[#8eccb9] text-[13px] font-bold leading-normal tracking-[0.015em]">
                  {skill.name}
                </p>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <p className="text-white text-sm">{skill.name}</p>
            <div className="w-10 h-32 bg-[#2f6a57] rounded-full overflow-hidden">
              <div
                className="w-full bg-[#00F0FF]"
                style={{ height: `${skill.level}%` }}
              />
            </div>
            <p className="text-[#8eccb9] text-xs">{skill.level}%</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default KeySkills;
