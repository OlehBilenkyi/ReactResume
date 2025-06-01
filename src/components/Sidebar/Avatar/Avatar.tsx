import React from "react";
import { motion } from "framer-motion";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  avatar: string;
}

const Avatar: React.FC<AvatarProps> = ({ avatar }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      className={styles.avatarWrapper}
    >
      <img src={avatar} alt="Avatar" className={styles.avatarImage} />
    </motion.div>
  );
};

export default Avatar;
