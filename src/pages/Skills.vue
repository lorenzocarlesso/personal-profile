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
                "I've used Java for 15 years. I started with J2EE 1.4."
              ]
            },
            {
              title: "Scala",
              messages: [
                "I've started to use Scala four years ago. I'm studying it to improve my confidence with it."
              ]
            },
            {
              title: "Javascript",
              messages: [
                "I've written Javascript code. but I am not a Javascript ninja. I am studying ES6 to upgrade my confidence and level."
              ]
            },
            {
              title: "Web Frameworks",
              messages: ["I've started to study Vue.js."]
            },
            {
              title: "HTML5",
              messages: ["It's imposbile know all, but I know how use it."]
            },
            {
              title: "CSS3",
              messages: [
                "Same knowledge like HTML. In my last experience I've used Bulma CSS framework."
              ]
            }
          ]
        },
        {
          title: "SOFTWARE ENGINERING",
          skills: [
            {
              title: "Computer programming and coding",
              messages: [""]
            },
            {
              title: "Software development",
              messages: [""]
            },
            {
              title: "Object-oriented design (OOD)",
              messages: [""]
            },
            {
              title: "Software testing and debugging",
              messages: [""]
            },
            {
              title: "Problem solving and logical thinking",
              messages: [""]
            }
          ]
        },
        {
          title: "SOFT SKILLS",
          skills: [
            {
              title: "Communication",
              messages: [""]
            },
            {
              title: "Teamwork",
              messages: [""]
            },
            {
              title: "Adaptability",
              messages: [""]
            },
            {
              title: "Problem-Solving",
              messages: [""]
            },
            {
              title: "Creativity",
              messages: [""]
            },
            {
              title: "Work Ethic",
              messages: [""]
            },
            {
              title: "Interpersonal Skills",
              messages: [""]
            },
            {
              title: "Time Management",
              messages: [""]
            },
            {
              title: "Leadership",
              messages: [""]
            },
            {
              title: "Attention to Detail",
              messages: [""]
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

