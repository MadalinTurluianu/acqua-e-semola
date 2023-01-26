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
import christmasIcon from "./assets/images/christmas.png";
import gnocchiNeroDiSeppiaIcon from "./assets/images/gnocchi-nero-di-seppia_icon.jpg";
import gnocchiZuccaIcon from "./assets/images/gnocchi-zucca_icon.jpg";
import fettuccineZuccaIcon from "./assets/images/fettuccine_zucca.jpg";
import ravioliNeriOrataIcon from "./assets/images/ravioli-al-nero-di-seppia-pesce.jpg";
import lasagnaZuccaSalsicciaIcon from "./assets/images/lasagnazuccasalsiccia.jpg";
import pappardelleXXLIcon from "./assets/images/pappardelle-xxl.jpg";
import sugoRossoIcon from "./assets/images/sugo-semplice.jpg";
import raguRossoIcon from "./assets/images/sugo-al-ragu.jpg";
import raguZucchineSpeckIcon from "./assets/images/sugo-zucchine-speck.jpg";
import fettuccineCastagneIcon from "./assets/images/fettuccine-castagne.jpg";
import crespellePerIlBrodoIcon from "./assets/images/Crespelle per il brodo.jpg";
import dolceStellaIcon from "./assets/images/dolce-stella.jpg";
import lasagnaBroccoliIcon from "./assets/images/lasagna-broccoli_icon.jpg";

const MONOPORZIONE_DPV = "Monoporzione da portar via 6€.";

const MultilineVariety = (
  <>
    Disponibile anche con impasto vegano (con acqua e farina) 8€ al kg.
    <br />
    Varietà: al nero di seppia, allo zafferano, al pomodoro, alla rapa rossa,
    agli spinaci, al basilico. Con varietà 10€ al kg.
  </>
);

const MultilineTMVariety = (
  <>
    Disponibile anche con impasto vegano (con acqua e farina) 9€ al kg.
    <br />
    Varietà: al nero di seppia, allo zafferano, al pomodoro, alla rapa rossa,
    agli spinaci, al basilico. Con varietà 10€ al kg.
  </>
);

const multilineLasagna = (
  <>
    Disponibile anche pronta a cuocere.
    <br />
    {MONOPORZIONE_DPV}
  </>
);

export const menuData = {
  /* 
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
      },
      {
        title: "Lasagna con zucca e polpettine di salsiccia",
        price: "13€ al kg",
        description: multilineLasagna,
        icons: [lasagnaZuccaSalsicciaIcon],
      },
    ],
    icon: halloweenIcon,
    colors: ["orange", "purple"],
    message: "I prodotti saranno disponibili fino al 13 Novembre",
  },

  natale_special: {
    products: [
      {
        title: "Fettuccine con farina di castagne",
        price: "10€ al kg",
        icons: [fettuccineCastagneIcon],
      },
      {
        title: "Lasagna con zucca, provola e speck",
        price: "13€ al kg",
        icons: [imageUnavailableIcon],
      },
      {
        title: "Lasagna con ragù di pesce fresco in salsa rosa",
        price: "22€ al kg",
        icons: [imageUnavailableIcon],
      },
      {
        title: "Lasagna con carciofi, crema di taleggio e salsiccia",
        price: "18€ al kg",
        icons: [imageUnavailableIcon],
      },
      {
        title: "Ravioli rossi con ripieno di radicchio, gorgonzola e noci",
        price: "15€ al kg",
        icons: [imageUnavailableIcon],
      },
      {
        title: "Crespelle per il brodo",
        price: "10€ al kg",
        icons: [crespellePerIlBrodoIcon],
      },
      {
        title:
          "Ravioli al nero di seppia con ripieno di pesce fresco e pane profumato",
        price: "20€ al kg",
        icons: [imageUnavailableIcon],
      },
      {
        title: "Quadrotti da brodo con aggiunta carne di gallina",
        price: "21€ al kg",
        icons: [imageUnavailableIcon],
      },
      {
        title: "Quadrotti da brodo con crema di parmigiano",
        price: "18€ al kg",
        icons: [imageUnavailableIcon],
      },
      {
        title: "Cannelloni verdi o rossi (sfoglia) ripieni di carne",
        price: "18€ al kg",
        icons: [imageUnavailableIcon],
      },
      {
        title:
          "Cannelloni verdi o rossi (sfoglia) ripieni di ricotta e spinaci",
        price: "18€ al kg",
        icons: [imageUnavailableIcon],
      },
      {
        title:
          "Cannelloni verdi o rossi (sfoglia) ripieni con crema di ricotta e parmigiano",
        price: "18€ al kg",
        icons: [imageUnavailableIcon],
      },
      {
        title: "Dolce stella",
        price: "14€ al kg",
        icons: [dolceStellaIcon],
      },
    ],
    icon: christmasIcon,
    colors: ["#b00d05", "#27780a"],
    message: "",
  },
  */
  "pasta fresca": [
    {
      title: "Fettuccine",
      description: MultilineVariety,
      price: "8.50€ al kg",
      icons: [
        fettuccineIcon,
        fettuccineRapaRossaIcon,
        fettuccineSpinaciIcon,
        fettuccineZafferanoIcon,
      ],
    },
    {
      title: "Fettuccine alla zucca",
      price: "10€ al kg",
      icons: [fettuccineZuccaIcon],
    },
    {
      title: "Spaghetti chitarra",
      description: MultilineVariety,
      price: "8.50€ al kg",
      icons: [spaghettiChitarraIcon],
    },
    {
      title: "Trenette",
      description: MultilineVariety,
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
      title: "Reginette",
      description: MultilineVariety,
      price: "8.50€ al kg",
      icons: [reginetteIcon],
    },
    {
      title: "Pappardelle XXL",
      description: MultilineVariety,
      price: "8.50€ al kg",
      icons: [pappardelleXXLIcon],
    },
    {
      title: "Fettuccine tagliate a mano",
      description: MultilineTMVariety,
      price: "10€ al kg",
      icons: [fettuccineTMIcon],
    },
    {
      title: "Pappardelle tagliate a mano",
      description: MultilineTMVariety,
      price: "10€ al kg",
      icons: [pappardelleTMIcon],
    },
    {
      title: "Gnocchi di patate",
      price: "9€ al kg",
      icons: [gnocchiIcon],
    },
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
      title: "Agnolotti",
      price: "18€ al kg",
      icons: [agnolottiIcon],
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
      title: "Ravioli al nero di seppia ripieni di pesce",
      description: "Con orata o spigola.",
      price: "22€ al kg",
      icons: [ravioliNeriOrataIcon],
    },
    {
      title: "Cannelloni di Carne",
      description: "Impasto semplice o agli spinaci.",
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
      title: "Quadrotti da brodo con aggiunta carne di gallina",
      price: "21€ al kg",
      icons: [imageUnavailableIcon],
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
      description: MONOPORZIONE_DPV,
      icons: [imageUnavailableIcon],
    },

    {
      title: "Lasagna verde al ragù rosso pronta a cuocere",
      price: "13€ al kg",
      description: MONOPORZIONE_DPV,
      icons: [lasagnaVerdeIcon],
    },
    {
      title: "Lasagna zucchine e speck",
      price: "13€ al kg",
      description: MONOPORZIONE_DPV,
      icons: [imageUnavailableIcon],
    },
    {
      title: "Lasagna con zucca e polpettine di salsiccia",
      price: "13€ al kg",
      description: multilineLasagna,
      icons: [lasagnaZuccaSalsicciaIcon],
    },
    {
      title: "Lasagnetta con broccoli siciliani provola e salsiccia",
      price: "13€ al kg",
      description: MONOPORZIONE_DPV,
      icons: [lasagnaBroccoliIcon],
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
      icons: [raguRossoIcon],
    },
    {
      title: "Ragù zucchine e speck",
      price: "14€ al kg",
      icons: [raguZucchineSpeckIcon],
    },
    {
      title: "Sugo rosso al profumo di basilico",
      price: "8€ al kg",
      icons: [sugoRossoIcon],
    },
  ],
};
