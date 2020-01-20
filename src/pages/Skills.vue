<template>
  <section id="skills" class="section">
    <h1 class="title has-text-centered">Skills</h1>

    <div class="container">
      <nav class="tabs is-centered">
        <ul>
          <li v-for="group in skillGroups" class="tab">
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
        class="content-tab"
        style="display:none"
      >
        <div class="columns is-desktop">
          <div v-for="skill in group.skills" class="column">
            <SkillTile
              :title="`${skill.title}`"
              :level="`${skill.level}`"
              :description="`${skill.description}`"
            />
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
          title: "LANGUAGES",
          skills: [
            {
              title: "Java",
              level: 70,
              description:
                "I've used Java for 15 years. I started with J2EE 1.4."
            },
            {
              title: "Scala",
              level: 40,
              description:
                "I've started to use Scala four years ago. I'm studying it to improve my confidence with it."
            },
            {
              title: "Javascript",
              level: 50,
              description:
                "I've written Javascript code. but I am not a Javascript ninja. I am studying ES6 to upgrade my confidence and level."
            }
          ]
        },
        {
          title: "WEB",
          skills: [
            {
              title: "HTML",
              level: 60,
              description: "It's impposbile know all, but I know how use it."
            },
            {
              title: "CSS",
              level: 60,
              description:
                "Same knowledge like HTML. In my last time I've used Bulma CSS framework."
            }
          ]
        },
        {
          title: "SOFTWARE ENGINERING",
          skills: [
            {
              title: "Oracle",
              level: 70,
              description:
                "I worked many years with Oracle. I am not a DBA but I know how write complex SQL query and some simple PL/SQL. I know how design tables."
            },
            {
              title: "MySQL",
              level: 80,
              description: ""
            },
            {
              title: "Apache Derby - H2",
              level: 60,
              description: ""
            }
          ]
        },
        {
          title: "SOFT SKILLS",
          skills: [{}]
        }
      ]
    };
  },
  methods: {
    // tab click manage
    openTab(tabName) {
      var i, x, tablinks;
      x = document.getElementsByClassName("content-tab");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tab");
      for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
      }
      document.getElementById(tabName).style.display = "block";
      this.currentTarget.className += " is-active";
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

