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
            class="column is-one-quarter"
          >
            <SkillTile :skill="skill" />
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
              level: 50,
              description:
                "I've used Java for 15 years. I started with J2EE 1.4."
            },
            {
              title: "Scala",
              level: 50,
              description:
                "I've started to use Scala four years ago. I'm studying it to improve my confidence with it."
            },
            {
              title: "Javascript",
              level: 50,
              description:
                "I've written Javascript code. but I am not a Javascript ninja. I am studying ES6 to upgrade my confidence and level."
            },
            {
              title: "Web Frameworks",
              level: 50,
              description: "I've started to study Vue. "
            },
            {
              title: "HTML5",
              level: 50,
              description: "It's imposbile know all, but I know how use it."
            },
            {
              title: "CSS3",
              level: 50,
              description:
                "Same knowledge like HTML. In my last experience I've used Bulma CSS framework."
            }
          ]
        },
        {
          title: "SOFTWARE ENGINERING",
          skills: [
            {
              title: "Computer programming and coding",
              level: 50,
              description: ""
            },
            {
              title: "Software development",
              level: 50,
              description: ""
            },
            {
              title: "Object-oriented design (OOD)",
              level: 50,
              description: ""
            },
            {
              title: "Software testing and debugging",
              level: 50,
              description: ""
            },
            {
              title: "Problem solving and logical thinking",
              level: 50,
              description: ""
            }
          ]
        },
        {
          title: "SOFT SKILLS",
          skills: [
            {
              title: "Communication",
              level: 50,
              description: ""
            },
            {
              title: "Teamwork",
              level: 50,
              description: ""
            },
            {
              title: "Adaptability",
              level: 50,
              description: ""
            },
            {
              title: "Problem-Solving",
              level: 50,
              description: ""
            },
            {
              title: "Creativity",
              level: 50,
              description: ""
            },
            {
              title: "Work Ethic",
              level: 50,
              description: ""
            },
            {
              title: "Interpersonal Skills",
              level: 50,
              description: ""
            },
            {
              title: "Time Management",
              level: 50,
              description: ""
            },
            {
              title: "Leadership",
              level: 50,
              description: ""
            },
            {
              title: "Attention to Detail",
              level: 50,
              description: ""
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

