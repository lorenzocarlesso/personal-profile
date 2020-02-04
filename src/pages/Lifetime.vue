<template>
  <section id="lifetime" class="section">
    <div class="container">
      <h1 class="title has-text-centered">My Lifetime in a Timeline</h1>
      <div class="timeline is-centered">
        <BaseTimelineHeader :content="headerEnd" />
        <BaseTimelineItem :content="pauseForMyself" />
        <BaseTimelineItem :content="xeffe" />
        <BaseTimelineItem :content="secondDaughter" />
        <BaseTimelineItem :content="synthesis" />
        <BaseTimelineItem :content="firstDaughter" />
        <BaseTimelineItem :content="meetAlice" />
        <BaseTimelineItem :content="datasoftRe" />
        <BaseTimelineItem :content="dynamicSitesCourse" />
        <BaseTimelineHeader :content="twoThousand" />
        <BaseTimelineItem :content="youth" />
        <BaseTimelineItem :content="allStamp" />
        <BaseTimelineItem :content="highSchool" />
        <BaseTimelineItem :content="playDrum" />
        <BaseTimelineItem :content="playFootball" />
        <BaseTimelineItem :content="commodore64" />
        <BaseTimelineItem :content="born" />
        <BaseTimelineHeader :content="headerStart" />
      </div>
    </div>
  </section>
</template>

<script>
import BaseTimelineHeader from "../components/BaseTimelineHeader.vue";
import BaseTimelineItem from "../components/BaseTimelineItem.vue";

export default {
  components: { BaseTimelineHeader, BaseTimelineItem },
  data() {
    return {
      pauseForMyself: {
        head: "September 2019",
        icon: ["fa", "pause-circle"],
        iconPrimaryColor: true,
        modal: {
          button: "Myself",
          primaryColor: true,
          content: {
            title: "Myself",
            subtitle: "Manager of Training for Myself",
            messages: ["TBD"]
          }
        }
      },
      xeffe: {
        head: "September 2013",
        icon: ["fa", "building"],
        iconSecondaryColor: true,
        modal: {
          button: "Xeffe",
          secondaryColor: true,
          content: {
            title: "Xeffe s.r.l. (Turin)",
            subtitle: "Java/Scala Senior Developer - Team Leader",
            messages: ["TBD"]
          }
        }
      },
      synthesis: {
        head: "April 2008",
        icon: ["fa", "building"],
        iconSecondaryColor: true,
        modal: {
          button: "Synthesis",
          secondaryColor: true,
          content: {
            title: "Synthesis (Turin)",
            subtitle: "Java Senior Developer",
            messages: [
              "Qui ho avuto la possibilità di crescere professionalmente sia come programmatore che come lavoratore.",
              "Ho avuto modo di mettermi alla prova seguendo progetti in maniera indipendente nell'intero ciclo di realizzazione del software.",
              "L'azienda mi ha dato possibilità d'interfacciarmi direttamente con il cliente."
            ]
          }
        }
      },
      datasoftRe: {
        head: "January 2004",
        icon: ["fa", "building"],
        iconSecondaryColor: true,
        modal: {
          button: "Datasoft R.E.",
          secondaryColor: true,
          content: {
            title: "Datasoft R.E. (Turin)",
            subtitle: "Java Junior Developer",
            messages: [
              "Nel 2002 tornai a lavorare in un'azienda informatica.",
              "Lo stack tecnologico iniziale era: Oracle, Java(Swing, EJB2), Struts, HTML, Javascript, CSS.",
              "Con il passare degli anni vidi altre tecnologie come Spring Framework ed Adobe Flex.",
              "Feci molta esperienza di programmazione, e divenni quello che sono ancora ora: un FullStack developer.",
              "Qui iniziai a fare anche le prime rasferte presso il cliente."
            ]
          }
        }
      },
      dynamicSitesCourse: {
        head: "2001",
        icon: ["fa", "school"],
        iconPrimaryColor: true,
        modal: {
          button: "Dynamic Sites Course",
          primaryColor: true,
          content: {
            title: "Course for building dynamic sites",
            subtitle: "ASP - PHP - JAVA - Microsoft Access",
            messages: [
              "Passati un po' di anni e con l'inizio della diffusione dei primi modem nelle case, iniziai a riscoprire interesse per la programmazione",
              "Iniziai a fare qualche pagina HTML (anche se non è programmare) così per diletto.",
              "Dopo poco lasciai il lavoro per fare un corso di un anno su ASP, PHP e Java. Agli inizi del 2000 si parlava di siti dinamici, non ancora di web application.",
              "Perciò ottenni la qualifica come programmatore di siti dinamici (i primi fullstack developer)."
            ]
          }
        }
      },
      allStamp: {
        head: "December 1997",
        icon: ["fa", "building"],
        iconSecondaryColor: true,
        modal: {
          button: "All Stamp",
          secondaryColor: true,
          content: {
            title: "All Stamp s.r.l. (Turin)",
            subtitle: "Technical Designer",
            messages: [
              "La programmazione mi aveva affascinato ma non convinto così tanto da continuare nello studio o nel lavoro.",
              "Così finita la scuola iniziai subito a lavorare come disegnatore tecnico meccanico."
            ]
          }
        }
      },
      secondDaughter: {
        head: "2010",
        icon: ["fa", "baby"],
        iconPrimaryColor: true,
        text: "My second daughter is born"
      },
      firstDaughter: {
        head: "2007",
        icon: ["fa", "baby"],
        iconPrimaryColor: true,
        text: "My first daughter is born"
      },
      meetAlice: {
        head: "May 2005",
        icon: ["fa", "heart"],
        iconPrimaryColor: true,
        text: "I met my wife Alice"
      },
      youth: {
        head: "1999",
        icon: ["fa", "heart"],
        iconPrimaryColor: true,
        modal: {
          button: "Youth",
          primaryColor: true,
          content: {
            title: "Youth",
            subtitle: "",
            messages: [
              "Erano anni molto spensierati e sereni, dove il computer non era centrale nella mia vita ma un giocattolo come gli altri anche se ha assorbito parecchie ore di gioco.",
              "Abitavo in periferia, con la possbilità di essere molto a contatto con la natura e passare tempo con gli amici.",
              "Così crebbi dando spazio alle mie passioni: calcio, musica, vacanze, avventure con gli amici."
            ]
          }
        }
      },

      highSchool: {
        head: "June 1997",
        icon: ["fa", "school"],
        iconPrimaryColor: true,
        modal: {
          button: "High School",
          primaryColor: true,
          content: {
            title: "Computer Expert Graduation",
            subtitle: "I.T.I.S. E. Majoarana - Grugliasco (Turin)",
            messages: [
              "Qui è dove ho scritto il mio primo codice con Turbo Pascal.",
              "In questa scuola ho imparato i veri rudimenti della programmazione.",
              "Fare un flowchart(con carta e penna, argh), i principali algoritmi di ordinamento, strutture dati(albero, vettori, mappe, matrici), il concetto di file e di database, etc."
            ]
          }
        }
      },
      playDrum: {
        head: "1992",
        icon: ["fa", "drum"],
        iconPrimaryColor: true,
        text: "I started to play drum"
      },
      playFootball: {
        head: "1986",
        icon: ["fa", "futbol"],
        iconPrimaryColor: true,
        text: "I started to play football"
      },
      born: {
        head: "1977",
        icon: ["fa", "baby"],
        iconPrimaryColor: true,
        text: "When I was born"
      },
      commodore64: {
        head: "1985",
        icon: ["fa", "gamepad"],
        iconPrimaryColor: true,
        modal: {
          button: "Commodore 64",
          primaryColor: true,
          content: {
            title: "Commodore 64",
            subtitle: "Natale 1985",
            messages: [
              "Io e i miei fratelli ricevemmo per Natale il Commodore 64. Fu li che scoprimmo il mondo della programmazione ...ehm no, no, quella è una storia di molti altri programmatori. Noi scoprimmo semplicemente il mondo delle console per giocare.",
              "Mentre i computer continuavano ad evolvere, io e i miei fratelli continuavamo ad evolvere le nostre abilità nei videogiochi. Oppure a stampare qualche banner, copertina di MC o DVD con la stampante ad aghi o ad usare i primi fogli eletttonici (Lotus 1-2-3).",
              "Dato che in quegli anni era normale usare la console di MS-DOS, imparai con naturalezza i primi comandi dei sistemi operativi: cd, dir, copy *.* , zip, unzip."
            ]
          }
        }
      },
      headerEnd: {
        text: "...",
        isMedium: true
      },
      twoThousand: {
        text: "2000"
      },
      headerStart: {
        text: "1970",
        isMedium: true
      }
    };
  }
};
</script>

<style>
</style>