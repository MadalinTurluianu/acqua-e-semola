import Menu from "../../../features/Menu/Menu";

import styles from "./MainContent.module.css";

function MainContent() {
  return (
    <main className={styles.mainContent}>
      <p className={styles.presentation}>
        Con i nostri prodotti proviamo a trasmettervi quei
        profumi e quei sapori di un tempo, nella speranza di farvi ricordare la
        pasta di una volta.
      </p>
      <Menu />
    </main>
  );
}

export default MainContent;
