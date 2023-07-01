import styles from "./Program.module.css";

function Program() {
  return (
    <div className={styles.Program}>
      <p>Lunedì chiuso</p>
      <p>Martedì 09:00-14:00</p>
      <p>Mercoledì 09:00-17:00</p>
      <p>Giovedì 09:00-14:00</p>
      <p>Venerdì 09:00-17:00</p>
      <p>Sabato 09:00-18:30</p>
      <p>Domenica chiuso</p>
    </div>
  );
}

export default Program;
