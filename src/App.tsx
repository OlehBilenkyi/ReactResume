import { useState } from "react";
import MySidebar from "./components/Sidebar/Sidebar";
import NameSection from "./components/MainContent/NameSection/NameSection";
import MainContent from "./components/MainContent/MainContent";
import ContactSection from "./components/MainContent/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";





function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={styles.appContainer}>
      <button 
        className={styles.mobileMenuButton}
        onClick={toggleSidebar}
      >
        ☰
      </button>
      
      <MySidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      
      <div className={styles.mainContentArea}>
        <NameSection name="Oleh Bilenkyi" title="Frontend Developer" />
        <MainContent description="I'm a self-taught Front-End Developer with strong motivation to grow and contribute as part of a real team. I'm excited about the opportunity to gain professional experience as a Junior React Developer. I have already built several full-featured applications using React, REST API, Firebase, and modern UI libraries." />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;