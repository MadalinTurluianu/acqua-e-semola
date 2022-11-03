import { ReactComponent as PhoneIcon } from "./assets/images/phone.svg";
import { ReactComponent as MailIcon } from "./assets/images/mail.svg";
import { ReactComponent as LocationIcon } from "./assets/images/location.svg";
import { ReactComponent as MobileIcon } from "./assets/images/mobile.svg";
import { ReactComponent as InstagramIcon } from "./assets/images/instagram.svg";

const contactData = [
  {
    title: "Tel:",
    value: "+39 065 526 7908",
    Icon: PhoneIcon,
    SpecialElement: (
      <a href="tel:+39 065 526 7908" target="_blank" rel="noopener noreferrer">
        +39 065 526 7908
      </a>
    ),
  },
  {
    title: "Cel:",
    value: "+39 331 424 8260",
    Icon: MobileIcon,
    SpecialElement: (
      <a href="tel:+39 331 424 8260" target="_blank" rel="noopener noreferrer">
        +39 331 424 8260
      </a>
    ),
  },
  {
    title: "Email:",
    value: "acqua.semola@gmail.com",
    Icon: MailIcon,
    SpecialElement: (
      <a
        href="mailto:acqua.semola@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        acqua.semola@gmail.com
      </a>
    ),
  },
  {
    title: "Indirizzo:",
    value: "Via Pescara 10 - Pavona",
    Icon: LocationIcon,
    SpecialElement: (
      <a
        href="https://goo.gl/maps/fAi6c29Mj1Etej3m9"
        target="_blank"
        rel="noopener noreferrer"
      >
        Via Pescara 10 - Pavona
      </a>
    ),
    ExtraElement: (
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.821132853439!2d12.6089316!3d41.7243784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258fe2fdf98883%3A0x98cabc8d41edc767!2sacqua%26Semola!5e0!3m2!1sen!2sro!4v1667490778577!5m2!1sen!2sro"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "5px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
  {
    title: "",
    value: "Vieni a trovarci anche sui nostri social:",
    Icon: null,
    ExtraElement: (
      <a
        href="https://www.instagram.com/invites/contact/?i=1wxgg9s3qfhcp&utm_content=pnlvsu3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div style={{width: "2rem"}}>
          <InstagramIcon />
        </div>
      </a>
    ),
  },
];

export default contactData;
