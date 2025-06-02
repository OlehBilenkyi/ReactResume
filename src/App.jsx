import { motion } from "framer-motion";

import MainContent from "./components/MainContent/MainContent";
import Avatar from "./components/Sidebar/Avatar/Avatar";
import MySidebar from "./components/Sidebar/Sidebar";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const RedStripe = styled.div`
  height: 2px;
  background: linear-gradient(90deg, transparent, #e74c3c, transparent);
`;
// const SakuraPetal = () => (
//   <motion.div
//     style={{
//       position: "absolute",
//       background: "url('sakura-petal.png')", // Прозрачный PNG лепестка
//       width: "24px",
//       height: "24px",
//     }}
//     animate={{
//       y: [0, 500],
//       x: [0, 50],
//       rotate: 360,
//       opacity: [1, 0],
//     }}
//     transition={{
//       duration: 10,
//       repeat: Infinity,
//       ease: "linear",
//     }}
//   />
// );
function App() {
  const contentProps = {
    profession: "FRONT-END DEVELOPER (REACT, JAVASCRIPT)",
    name: "OLEH BILENKYI",
    description: "Junior Front-End Developer with hands-on experience...",
  };

  return (
    <Wrapper>
      <Avatar avatar="/avatar.jpg" />
      <MySidebar />

      <RedStripe />
      <MainContent {...contentProps} />
    </Wrapper>
  );
}

export default App;
