import { motion } from "framer-motion";
import styled from "styled-components";
import { useEffect, useState } from "react";
import MainContent from "./components/MainContent/MainContent";
import Avatar from "./components/Sidebar/Avatar/Avatar";
import Sidebar from "./components/Sidebar/Sidebar";

const Wrapper = styled(motion.div)`
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  background: var(--paper-white);
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  min-height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--primary-red),
      transparent
    );
  }

  &::after {
    content: "";
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--primary-red),
      transparent
    );
    z-index: 1;
  }
`;

interface SakuraPetalProps {
  left: string;
  top: string;
}

const SakuraPetal: React.FC<SakuraPetalProps> = ({ left, top }) => {
  const [windowSize, setWindowSize] = useState({ height: 0, width: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      style={{
        position: "absolute",
        fontSize: "24px",
        zIndex: 0,
        opacity: 0.7,
        color: "var(--sakura-pink)",
        pointerEvents: "none",
        left,
        top,
      }}
      animate={{
        y: [0, windowSize.height],
        x: [0, 50],
        rotate: 360,
        opacity: [0.7, 0],
      }}
      transition={{
        duration: 15 + Math.random() * 10,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      ❀
    </motion.div>
  );
};

interface ContentProps {
  profession: string;
  name: string;
  description: string;
}

const App: React.FC = () => {
  const contentProps: ContentProps = {
    profession: "FRONT-END DEVELOPER (REACT, JAVASCRIPT)",
    name: "OLEH BILENKYI",
    description: "Junior Front-End Developer with hands-on experience...",
  };

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Анимация сакуры */}
      <SakuraPetal left="10%" top="5%" />
      <SakuraPetal left="30%" top="15%" />
      <SakuraPetal left="70%" top="8%" />
      <SakuraPetal left="85%" top="20%" />

      <Avatar avatar="/avatar.jpg" />
      <Sidebar />
      <MainContent {...contentProps} />
    </Wrapper>
  );
};

export default App;
