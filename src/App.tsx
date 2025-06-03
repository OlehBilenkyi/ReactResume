import MainContent from "./components/MainContent/MainContent";
import MySidebar from "./components/Sidebar/Sidebar";
import NameSection from "./components/MainContent/NameSection/NameSection";

function App() {
  return (
    <>
      <MySidebar />
      <NameSection name="Oleh Bilenkyi" title="Frontend Developer" />
      <MainContent
        profession="Junior Web Developer"
        name="Oleh Bilenkyi"
        description="Motivated and self-taught Junior JavaScript Developer"
      />
    </>
  );
}

export default App;
