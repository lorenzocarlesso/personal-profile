<template>
  <section id="skills" class="section">
    <h1 class="title has-text-centered">Skills</h1>

    <div class="container">
      <nav class="tabs is-centered">
        <ul>
          <li
            v-for="group in skillGroups"
            :id="`${group.title}-tab`"
            :key="`${group.title}-tab`"
            :class="[group.isActive ? ' is-active' : '', 'tab']"
          >
            <a @click="openTab(group.title)">{{ group.title }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="container section">
      <div
        v-for="group in skillGroups"
        :id="group.title"
        :key="group.title"
        :class="[group.isActive ? 'is-active' : 'is-hidden', 'content-tab']"
      >
        <div class="columns is-multiline">
          <div
            v-for="(skill, index) in group.skills"
            :key="`${group.title}_${index}`"
            class="column is-one-third"
          >
            <SkillTile :content="skill" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillTile from "../components/SkillTile.vue";

export default {
  components: {
    SkillTile
  },
  data() {
    return {
      skillGroups: [
        {
          title: "TECHNOLOGIES",
          isActive: true,
          skills: [
            {
              title: "Java",
              messages: [
                "I've used Java for 15 years. I started with J2EE 1.4.",
                "It's impossible know the whole java world because it became a universe."
              ]
            },
            {
              title: "Scala",
              messages: [
                "I've started to use Scala four years ago.",
                "I'm studying it to improve my confidence with it."
              ]
            },
            {
              title: "Javascript",
              messages: [
                "I've written Javascript code. I am not a Javascript ninja but I like use it.",
                "I am studying ES6 to upgrade my confidence and level."
              ]
            },
            {
              title: "HTML5 - CSS3",
              messages: [
                "Actually I'm not a web designer or a UX but I know how these technologies work.",
                "I've started to use SASS"
              ]
            },
            {
              title: "Web Frameworks",
              messages: [
                "I used Play Framework, Servlet with JSP/JSTL, Struts.",
                "I've started to study Vue.js."
              ]
            },
            {
              title: "Other",
              messages: [
                "I used many others frameworks, tool, libraries, IDE. I list someone that are more trendy today:",
                "Spring Framework, Maven, Git, IntelliJ, VSCode."
              ]
            }
          ]
        },
        {
          title: "SOFTWARE ENGINERING",
          skills: [
            {
              title: "Computer programming and coding",
              messages: [
                "Ho utilizzato linguaggi di vario tipo, partendo da PHP, ASP per arrivare a Javascript, Java e Scala.",
                "Non sono rimasto fermo ad un solo paradigma di programmazione, anche se quello ad oggetti è quello su cui ho lavorato di più.",
                "Di fronte alle problematiche d'implementazione cerco di sfruttare i design pattern ed applicare i design concepts di modularizzazione, astrazione e maintainability."
              ]
            },
            {
              title: "Software development process",
              messages: [
                "Ho iniziato a lavora con il tipico processo Waterfall.",
                "In seguito ho avuto modo di fare esperienze con la  metodologia di sviluppo Agile nelle forme di Kanban e Scrum."
              ]
            },
            {
              title: "Software design",
              messages: [
                "Ho utilizzato il modello MVC come principale modello di riferimento architetturale.",
                "Attualmente sto scoprendo le potenzialità dei sistemi reattivi legati ad architetture a microservizi.",
                "DDD, modules, etc..."
              ]
            }
          ]
        },
        {
          title: "SOFT SKILLS",
          skills: [
            {
              title: "Communication",
              messages: [
                "Provo piacere nel condividere e ascoltare le persone che collaborano con me.",
                "Cerco di essere sintetico ed esplicito nella comunicazione per non dare spazio a incomprensioni."
              ]
            },
            {
              title: "Teamwork",
              messages: [
                "Non sono fatto per lavorare da solo. Ho bisogno di condividere il bene ed il male del lavoro assumendo un atteggiamento propositivo, finalizzato al successo delle attività.",
                "Ho lavorato quasi sempre con team di poche persone."
              ]
            },
            {
              title: "Adaptability",
              messages: [
                "Le mie esperienze lavorative erano spesso disorganizzate e di conseguenza era importante gestire le attività ed il tempo a disposizione",
                "Lavorando in aziende medio piccole era quasi la normalità dover assumere ruoli non sempre di solo sviluppatore."
              ]
            },
            {
              title: "Problem-Solving",
              messages: [
                "Credo che la soluzione migliore per affrontare e risolvere un problema sia la condivisione. Qeusto offre l'opportunità di avere più spunti per trovare la soluzione efficace.",
                "Cerco di adottare un metodo universale per aumentare la propria indipendenza di fronte ai problemi: continuare a studiare. Qeusto aiuta a contenere il lato oscuro di ognuno di noi: l'ignoranza. "
              ]
            },
            {
              title: "Creativity",
              messages: [
                "Non sono particolarmente creativo a livello artistico ma cerco di esserlo nel ragionamento e nell'osservazione per trovare sempre uno schema logico alle situazioni che devo elaborare.",
                "Faccio uso di droghe per avere spunti creativi da altre dimensioni. Scherzo. Questo succedeva per alcuni musicisti negli anni sessanta...a no, succede ancora oggi."
              ]
            },
            {
              title: "Work Ethic",
              messages: [
                "Cerco di mantenere sempre un atteggiamento professionale in ogni ambito per risultare coerente e leggibile verso gli altri.",
                "Se posso non evito la critica costruttiva per risolvere o migliorare situazioni che possano creare un danno economoico o di dispersione di tempo."
              ]
            },
            {
              title: "Interpersonal Skills",
              messages: [
                "Se il contesto lo permtte, cerco di rompere il muro della formalità per sentirmi e far sentire a proprio agio le persone che ho intorno per creare un clima rilassato e disteso.",
                "Credo che un ambiente con pochi conformismi permetta alle persone di aprirsi offrendo una migliore comunicazione e produttività."
              ]
            },
            {
              title: "Leadership",
              messages: [
                "Sono in grado di condurre piccoli team.",
                "Ho sempre cercato di aiutare colleghi in difficoltà offrendo l'aiuto tecnico, supporto morale e la condivisione.",
                "Tendo a coinvolgere tutte le persone che collaborano con me ponendomi il problema di trovare il modo giusto per farle sentire valorizzate."
              ]
            },
            {
              title: "Attention to Detail",
              messages: [
                "Molte persone che mi conoscono mi definiscono osservatore, perciò l'attenzione al dettaglio la pratico continuamente.",
                "Non riesco a convivere per troppo tempo in un ambiente troppo disorganizzato nel momento in cui percepisco che non è un'eccezione ma la normalità."
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    // tab click manage
    openTab(tabName) {
      var i, tabContents, tabLinks;
      tabLinks = document.getElementsByClassName("tab");
      tabContents = document.getElementsByClassName("content-tab");
      for (i = 0; i < tabContents.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" is-active", "");
        tabContents[i].className = tabContents[i].className.replace(
          "is-active",
          "is-hidden"
        );
      }

      var selectedLinkTab = document.getElementById(tabName + "-tab");
      selectedLinkTab.className += " is-active";
      var selectedContentTab = document.getElementById(tabName);
      selectedContentTab.className = selectedContentTab.className.replace(
        "is-hidden",
        "is-active"
      );
    }
  }

  /*
  groups:
  - languages
  - web
  - methodologies: Agile, SCRUM,
 */
};
</script>

<style>
</style>

