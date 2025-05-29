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
  position: absolute;
  height: 150px;
  background-color: #c00;
  z-index: 2;
  left: 0;
  right: 0;
  top: 34px; /* Фиксированная позиция под заголовком */
`;

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
