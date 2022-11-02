import { ReactComponent as PhoneIcon } from "./assets/images/phone.svg";
import { ReactComponent as MailIcon } from "./assets/images/mail.svg";
import { ReactComponent as LocationIcon } from "./assets/images/location.svg";
import { ReactComponent as MobileIcon } from "./assets/images/mobile.svg";
const MapElement = (
  <a
    href="https://www.google.com/maps/place/acqua%26Semola,+Via+Pescara,+10,+00041+Albano+laziale+RM/data=!4m2!3m1!1s0x13258fe2fdf98883:0x98cabc8d41edc767?utm_source=mstt_1&entry=gps&g_ep=CAESCTExLjUwLjcwNBgAIP___________wEqAA%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div
      class="mapouter"
      style={{
        position: "relative",
        textAlign: "right",
        height: "500px",
        width: "600px",
      }}
    >
      <div
        class="gmap_canvas"
        style={{
          overflow: "hidden",
          background: "none!important",
          height: "500px",
          width: "600px",
        }}
      >
        <iframe
          title="googleMapsMap"
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Via%20Pescara,%2010,%20%20RM,%20Italy%20Albano%20laziale+(acqua&amp;Semola)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
  </a>
);

const contactData = [
  {
    title: "Tel:",
    value: "+39 065 526 7908",
    Icon: PhoneIcon,
    SpecialElement: <a href="tel:+39 065 526 7908">+39 065 526 7908</a>,
  },
  {
    title: "Cel:",
    value: "+39 331 424 8260",
    Icon: MobileIcon,
    SpecialElement: <a href="tel:+39 331 424 8260">+39 331 424 8260</a>,
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
    SpecialElement: MapElement,
  },
];

export default contactData;
