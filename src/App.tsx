import MainContent from "./components/MainContent/MainContent";
import MySidebar from "./components/Sidebar/Sidebar";
import NameSection from "./components/MainContent/NameSection/NameSection";

function App() {
  return (
    <>
      <MySidebar />
      <NameSection name="Oleh Bilenkyi" title="Frontend Developer" />
      <MainContent description="I'm a self-taught Front-End Developer with strong motivation to grow and contribute as part of a real team. I'm excited about the opportunity to gain professional experience as a Junior React Developer. I have already built several full-featured applications using React, REST API, Firebase, and modern UI libraries." />
    </>
  );
}

export default App;
