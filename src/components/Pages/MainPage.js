import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";
import Header from "./components/Header/Header";

import styles from "./MainPage.module.css";

function MainPage() {
  return (
    <div className={styles.mainPage}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default MainPage;
