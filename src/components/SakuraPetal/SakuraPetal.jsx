// components/SakuraPetal.jsx
import { motion } from "framer-motion";
const SakuraPetal = () => (
  <motion.div
    animate={{ y: [0, 100], opacity: [1, 0] }}
    transition={{ duration: 5, repeat: Infinity }}
    style={{ position: "absolute", color: "#f8bbd0" }}
  >
    ❀
  </motion.div>
);
