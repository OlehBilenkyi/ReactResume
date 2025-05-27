import MainContent from "./components/MainContent/MainContent";
import MySidebar from "./components/Sidebar/Sidebar";
import { Wrapper } from "./App.styled";

function App() {
  return (
    <>
      <Wrapper>
        <MainContent
          profession="Front-end Developer"
          name="Oleh Bilenkyi"
          description="Motivated and self-taught Junior JavaScript Developer"
        />
        <MySidebar avatar="/avatar.jpg" />
      </Wrapper>
    </>
  );
}

export default App;
