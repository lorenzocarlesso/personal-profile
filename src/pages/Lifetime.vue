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
        <BaseTimelineHeader :content="twoThousand" />
        <BaseTimelineItem :content="allStamp" />
        <BaseTimelineItem :content="highSchool" />
        <BaseTimelineItem :content="playDrum" />
        <BaseTimelineItem :content="playFootball" />
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
        modal: {
          button: "Myself",
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
        modal: {
          button: "Xeffe",
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
        modal: {
          button: "Synthesis",
          content: {
            title: "Synthesis (Turin)",
            subtitle: "Java Senior Developer",
            messages: ["TBD"]
          }
        }
      },
      datasoftRe: {
        head: "January 2004",
        icon: ["fa", "building"],
        modal: {
          button: "Datasoft R.E.",
          content: {
            title: "Datasoft R.E. (Turin)",
            subtitle: "Java Junior Developer",
            messages: ["TBD"]
          }
        }
      },
      datasoftRe: {
        head: "2001",
        icon: ["fa", "school"],
        modal: {
          button: "Dynamic sites",
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
        modal: {
          button: "All Stamp",
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
        text: "My second daughter is born"
      },
      firstDaughter: {
        head: "2007",
        icon: ["fa", "baby"],
        text: "My first daughter is born"
      },
      meetAlice: {
        head: "May 2005",
        icon: ["fa", "heart"],
        text: "I met my wife Alice"
      },
      highSchool: {
        head: "June 1997",
        icon: ["fa", "school"],
        modal: {
          button: "High School",
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
        text: "I started to play drum"
      },
      playFootball: {
        head: "1986",
        icon: ["fa", "futbol"],
        text: "I started to play football"
      },
      born: {
        head: "1977",
        icon: ["fa", "baby"],
        text: "When I was born"
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