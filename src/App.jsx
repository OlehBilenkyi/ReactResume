import MainContent from "./components/MainContent/MainContent";
import MySidebar from "./components/Sidebar/Sidebar";
import { Wrapper } from "./App.styled";

function App() {
  return (
    <>
      <Wrapper>
        <MainContent
          profession="Front-End Developer (React, JavaScript)"
          name="Oleh Bilenkyi"
          description="Junior Front-End Developer with hands-on experience in React, JavaScript, and responsive design. Built 5+ applications with Firebase, REST APIs, and modern UI libraries. Passionate about clean code and user-friendly interfaces. Seeking a role to grow in a collaborative team."
        />
        <MySidebar avatar="/avatar.jpg" />
      </Wrapper>
    </>
  );
}

export default App;
