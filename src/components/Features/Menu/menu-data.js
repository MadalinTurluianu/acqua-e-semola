import imageUnavailableIcon from "./assets/images/image-unavailable-icon.jpg";
import trenettePomodoroIcon from "./assets/images/trenette-al-pomodoro_icon.jpg";
import trenetteNeroDiSeppiaIcon from "./assets/images/trenette-al-nero-di-seppia_icon.jpg";
import trenetteSpinaciIcon from "./assets/images/trenette-agli-spinaci_icon.jpg";
import trenetteRapaRossaIcon from "./assets/images/trenette-alla-rapa-rossa_icon.jpg";
import trenetteZafferanoIcon from "./assets/images/trenette-allo-zafferano_icon.jpg";
import gnocchiIcon from "./assets/images/gnocchi-di-patate_icon.jpg";
import tortelliniIcon from "./assets/images/tortellini.jpg";
import ravioliSalmoneLimeIcon from "./assets/images/ravioli-ricotta-salmone-lime.jpg";
import reginetteIcon from "./assets/images/reginette.jpg";
import fettuccineIcon from "./assets/images/fettuccine_icon.jpg";
import fettuccineRapaRossaIcon from "./assets/images/fettuccine-rapa-rossa_icon.jpg";
import fettuccineSpinaciIcon from "./assets/images/fettuccine-spinaci_icon.jpg";
import fettuccineZafferanoIcon from "./assets/images/fettuccine-zafferano_icon.jpg";
import agnolottiIcon from "./assets/images/Agnolotti.jpg";
import ravioliRicottaSpinaciIcon from "./assets/images/ravioli-ricotta-spinaci.jpg";
import pappardelleTMIcon from "./assets/images/pappardelle-tagliate-a-mano.jpg";
import fettuccineTMIcon from "./assets/images/fettuccine-tagliate-a-mano.jpg";
import cannelloniCarneIcon from "./assets/images/cannelloni-carne.jpg";
import cannelloniVerdiCarneIcon from "./assets/images/cannelloni-verdi-di-carne.jpg";
import lasagnaVerdeIcon from "./assets/images/lasagna-verde-al-sugo.jpg";
import spaghettiChitarraIcon from "./assets/images/spaghetti-chitarra.jpg";
import halloweenIcon from "./assets/images/halloween.png";
import gnocchiNeroDiSeppiaIcon from "./assets/images/gnocchi-nero-di-seppia_icon.jpg";
import gnocchiZuccaIcon from "./assets/images/gnocchi-zucca_icon.jpg";
import fettuccineZuccaIcon from "./assets/images/fettuccine_zucca.jpg";

export const menuData = {
  halloween_special: {
    products: [
      {
        title: "Gnocchi al nero di seppia",
        price: "10€ al kg",
        icons: [gnocchiNeroDiSeppiaIcon],
      },
      {
        title: "Gnocchi con zucca",
        price: "10€ al kg",
        icons: [gnocchiZuccaIcon],
      },
      {
        title: "Fettuccine alla zucca",
        price: "10€ al kg",
        icons: [fettuccineZuccaIcon],
      }
    ],
    icon: halloweenIcon,
    colors: ["orange", "purple"],
    message: "I prodotti saranno disponibili fino al 13 Novembre"
  },
  "pasta fresca": [
    {
      title: "Fettuccine",
      description:
        "Varietà: al nero di seppia, allo zafferano, al pomodoro, alla rapa rossa, agli spinaci, al basilico. Con varietà 10€ al kg",
      price: "8.50€ al kg",
      icons: [
        fettuccineIcon,
        fettuccineRapaRossaIcon,
        fettuccineSpinaciIcon,
        fettuccineZafferanoIcon,
      ],
    },
    {
      title: "Spaghetti chitarra",
      description:
        "Varietà: al nero di seppia, allo zafferano, al pomodoro, alla rapa rossa, agli spinaci al basilico. Con varietà 10€ al kg",
      price: "8.50€ al kg",
      icons: [spaghettiChitarraIcon],
    },
    {
      title: "Trenette",
      description:
        "Varietà: al nero di seppia, allo zafferano, al pomodoro, alla rapa rossa, agli spinaci al basilico. Con varietà 10€ al kg",
      price: "8.50€ al kg",
      icons: [
        trenettePomodoroIcon,
        trenetteNeroDiSeppiaIcon,
        trenetteSpinaciIcon,
        trenetteRapaRossaIcon,
        trenetteZafferanoIcon,
      ],
    },
    {
      title: "Pappardelle",
      description:
        "Varietà: al nero di seppia, allo zafferano, al pomodoro, alla rapa rossa, agli spinaci al basilico. Con varietà 10€ al kg",
      price: "8.50€ al kg",
      icons: [imageUnavailableIcon],
    },
    {
      title: "Reginette",
      description:
        "Varietà: al nero di seppia, allo zafferano, al pomodoro, alla rapa rossa, agli spinaci al basilico. Con varietà 10€ al kg",
      price: "8.50€ al kg",
      icons: [reginetteIcon],
    },
    {
      title: "Fettuccine tagliate a mano",
      price: "10€ al kg",
      icons: [fettuccineTMIcon],
    },
    {
      title: "Pappardelle tagliate a mano",
      price: "10€ al kg",
      icons: [pappardelleTMIcon],
    },
    {
      title: "Gnocchi di patate",
      price: "9€ al kg",
      icons: [gnocchiIcon],
    },
    {
      title: "Ravioli alla ricotta",
      price: "16€ al kg",
      icons: [imageUnavailableIcon],
    },
    {
      title: "Ravioli alla ricotta e spinaci",
      price: "18€ al kg",
      icons: [ravioliRicottaSpinaciIcon],
    },
    {
      title: "Ravioli alla ricotta e prezzemolo",
      price: "17€ al kg",
      icons: [imageUnavailableIcon],
    },
    {
      title: "Ravioli alla ricotta e basilico",
      price: "17€ al kg",
      icons: [imageUnavailableIcon],
    },
    {
      title: "Ravioli alla ricotta con salmone e lime",
      price: "20€ al kg",
      icons: [ravioliSalmoneLimeIcon],
    },
    {
      title: "Ravioli con carne",
      price: "18€ al kg",
      icons: [imageUnavailableIcon],
    },
    {
      title: "Cannelloni di Carne",
      description: "Impasto semplice o agli spinaci",
      price: "18€ al kg",
      icons: [cannelloniCarneIcon, cannelloniVerdiCarneIcon],
    },
    {
      title: "Cannelloni alla ricotta",
      price: "16€ al kg",
      icons: [imageUnavailableIcon],
    },
    {
      title: "Cannelloni alla ricotta e spinaci",
      price: "17€ al kg",
      icons: [imageUnavailableIcon],
    },
    {
      title: "Tortellini di carne",
      price: "20€ al kg",
      icons: [tortelliniIcon],
    },
    {
      title: "Agnolotti",
      price: "18€ al kg",
      icons: [agnolottiIcon],
    },
  ],
  "piatti pronti": [
    {
      title: "Gnocchi di patate",
      price: "5€",
      icons: [imageUnavailableIcon],
    },
    {
      title: "Lasagna al ragù rosso pronta a cuocere",
      price: "13€ al kg",
      description:
        "Già cotta a 15€ al kg",
      icons: [imageUnavailableIcon],
    },

    {
      title: "Lasagna verde al ragù rosso pronta a cuocere",
      price: "13€ al kg",
      description:
        "Già cotta a 15€ al kg",
      icons: [lasagnaVerdeIcon],
    },
    {
      title: "Lasagna zucchine e speck",
      price: "13€ al kg",
      description:
        "Già cotta a 15€ al kg",
      icons: [imageUnavailableIcon],
    },
    {
      title: "Cannelloni di ricotta cotti",
      price: "18€ al kg",
      icons: [imageUnavailableIcon],
    },
    {
      title: "Cannelloni di carne",
      price: "20€ al kg",
      icons: [imageUnavailableIcon],
    },
    {
      title: "Cannelloni di ricotta e spinaci",
      price: "20€ al kg",
      icons: [imageUnavailableIcon],
    },
  ],
  sughi: [
    {
      title: "Ragù rosso",
      price: "15€ al kg",
      icons: [imageUnavailableIcon],
    },
    {
      title: "Ragù zucchine e speck",
      price: "14€ al kg",
      icons: [imageUnavailableIcon],
    },
    {
      title: "Sugo rosso al profumo di basilico",
      price: "8€ al kg",
      icons: [imageUnavailableIcon],
    },
  ],

};
