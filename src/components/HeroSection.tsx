import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./motionConfig";

const HeroSection: React.FC = () => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      className="@container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCg2B1deeCDb-b9yx7XHz_XznDMz5QGZk9g20MDqa-pewWycf2rKq3NOlegPZXRixb79GSfBpn44bJW9xf4c46EgOi9gDjwHrQjD-biFolFet10ioX1zcBruqakSj1gFX1pWJFNGtqjyrk_oBDDhE6SdNMh5acITodk3mCoh5cgHJof1HQ721cvpWXVDXqRHo86-tfnby2_9lPBXPhrLSZ3Wj_-7slMWP1eA-Hp-QcKj2JnL5HP6yydPcI4wvy9gLgR_vbYiDMqVHk')",
          }}
        >
          <motion.div
            className="flex flex-col gap-2 text-left"
            variants={itemVariants}
          >
            <motion.h1
              className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
              variants={itemVariants}
            >
              Oleh Bilenkyi
            </motion.h1>
            <motion.h2
              className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
              variants={itemVariants}
            >
              Frontend Developer | Crafting immersive web experiences with
              cutting-edge technologies.
            </motion.h2>
          </motion.div>
          <motion.button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#5ffac9] text-[#10231d] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <a href="/path/to/your/resume.pdf" download className="truncate">
              Download Resume
            </a>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
