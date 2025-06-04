// App.tsx
import MainContent from "./components/MainContent/MainContent";
import MySidebar from "./components/Sidebar/Sidebar";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.appContainer}>
      <MySidebar />
      <main className={styles.mainContentArea}>
        <MainContent
          profession="Junior Web Developer"
          name="Oleh Bilenkyi"
          description="Motivated and self-taught Junior JavaScript Developer with passion for creating interactive web applications. Focused on React ecosystem and modern JavaScript practices."
        />
      </main>
    </div>
  );
}

export default App;
