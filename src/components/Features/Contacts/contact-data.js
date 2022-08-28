import { ReactComponent as PhoneIcon } from "./assets/images/phone.svg";
import { ReactComponent as MailIcon } from "./assets/images/mail.svg";
import { ReactComponent as LocationIcon } from "./assets/images/location.svg";

const contactData = [
  {
    title: "Tel:",
    value: "+39 331 424 8260",
    Icon: PhoneIcon,
    SpecialElement: <a href="tel:+39 331 424 8260">+39 331 424 8260</a>,
  },
  {
    title: "Email:",
    value: "acqua&semola@gmail.com",
    Icon: MailIcon,
    SpecialElement: (
      <a
        href="mailto:acqua&semola@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        acqua&semola@gmail.com
      </a>
    ),
  },
  {
    title: "Indirizzo:",
    value: "Via Pescara 10 - Pavona",
    Icon: LocationIcon,
    SpecialElement: (
        <a
          href="https://www.google.com/maps/place/Via+Pescara,+10,+00041+Albano+Laziale+RM,+Italy/@41.7243824,12.6067429,17z/data=!3m1!4b1!4m5!3m4!1s0x13258f91c6fc84d7:0x80b36eed65613b8!8m2!3d41.7243784!4d12.6089316"
          target="_blank"
          rel="noopener noreferrer"
        >
          Via Pescara 10 - Pavona
        </a>
      ),
  },
];

export default contactData;
