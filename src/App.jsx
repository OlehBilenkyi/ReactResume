import { useRef, useEffect, useState } from "react";
import MainContent from "./components/MainContent/MainContent";
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
  position: absolute;
  height: 120px; // Изменили с 120px на 2px (толщина линии)
  background-color: #c00;
  z-index: 2; // Линия между фоном (1) и аватаром (3)
  left: 0;
  right: 0;
`;

function App() {
  const myInfoRef = useRef(null);
  const sidebarRef = useRef(null);
  const [stripeTop, setStripeTop] = useState(0);

  const contentProps = {
    profession: "Front-End Developer (React, JavaScript)",
    name: "Oleh Bilenkyi",
    description: "Junior Front-End Developer with hands-on experience...",
  };

  useEffect(() => {
    if (myInfoRef.current && sidebarRef.current) {
      const myInfoTop = myInfoRef.current.offsetTop;
      const avatarTop = sidebarRef.current.querySelector("img").offsetTop;
      setStripeTop(Math.max(myInfoTop, avatarTop) + 10);
    }
  }, []);

  return (
    <Wrapper>
      <RedStripe style={{ top: `${stripeTop}px` }} />
      <MainContent ref={myInfoRef} {...contentProps} />
      <MySidebar ref={sidebarRef} avatar="/avatar.jpg" />{" "}
      {/* Путь к аватарке передается корректно */}
    </Wrapper>
  );
}

export default App;
