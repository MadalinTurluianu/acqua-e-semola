import styles from "./CookiePoliceBanner.module.css";

export default function CookiePoliceBanner(props) {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3>Notice</h3>
        <p>
          We and selected third parties collect personal information and use
          cookies or similar technologies for technical purposes and, with your
          consent, for “basic interactions & functionalities”, “experience
          enhancement”, “measurement” and “targeting & advertising”. Denying
          consent may make related features unavailable. With respect to
          advertising, we and selected third parties, may use precise
          geolocation data, and identification through device scanning in order
          to store and/or access information on a device and process personal
          data like your usage data for the following advertising purposes:
          personalized ads and content, ad and content measurement, audience
          insights and product development. You can freely give, deny, or
          withdraw your consent at any time by accessing the preferences panel.
          Use the “Accept” button to consent. Use the “Reject” button to
          continue without accepting.
        </p>
      </div>
      <div className={styles.buttonsContainer}>
        <button type="button" onClick={props.onAccept}>
          Accept
        </button>
        <button type="button" onClick={props.onReject}>
          Reject
        </button>
      </div>
    </div>
  );
}
