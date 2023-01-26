import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";
import Header from "./components/Header/Header";

import styles from "./MainPage.module.css";

function MainPage({ cookiesAllowed }) {
  return (
    <div className={styles.mainPage}>
      <Header />
      <MainContent />
      <Footer cookiesAllowed={cookiesAllowed}/>
    </div>
  );
}

export default MainPage;
