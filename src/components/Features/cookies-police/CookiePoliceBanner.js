import styles from "./CookiePoliceBanner.module.css";

export default function CookiePoliceBanner(props) {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3>Attenzione</h3>
        <p>
          Il nostro sito web utilizza i cookie per migliorare la tua esperienza
          di navigazione e per fornirti contenuti e annunci più pertinenti. I
          cookie sono piccoli file di testo che vengono memorizzati sul tuo
          dispositivo da un sito web. Aiutano il sito web a ricordare le tue
          preferenze e a capire come interagisci con il sito web. Utilizziamo
          Google Maps incorporato sul nostro sito web, che utilizza anche i
          cookie per fornirti questo servizio. Cliccando il tasto "Accetta",
          accetti l'utilizzo dei cookie di Google Maps. Per ulteriori
          informazioni sui cookie di Google Maps e su come gestirli, puoi
          consultare la Informativa sulla privacy di Google accedendo a{" "}
          <a
            href="https://policies.google.com/privacy?hl=it#maps"
            target="_blank"
            rel="noopener noreferrer"
          >
            questo link
          </a>
          . Puoi disattivare i cookie nelle impostazioni del tuo browser in
          qualsiasi momento, ma tieni presente che ciò potrebbe influire sulla
          funzionalità del nostro sito web.
        </p>
      </div>
      <div className={styles.buttonsContainer}>
        <button type="button" onClick={props.onAccept}>
          Accetta
        </button>
        <button type="button" onClick={props.onReject}>
          Rifiuta
        </button>
      </div>
    </div>
  );
}
