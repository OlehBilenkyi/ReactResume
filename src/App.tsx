import MainContent from "./components/MainContent/MainContent";
import MySidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <MainContent
        profession="Junior Web Developer"
        name="Oleh Bilenkyi"
        description="Motivated and self-taught Junior JavaScript Developer"
      />
      <MySidebar avatar="/avatar.jpg" />
    </>
  );
}

export default App;
