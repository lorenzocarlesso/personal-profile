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
import skillJson from "../assets/json/skill.json";

export default {
  components: {
    SkillTile
  },
  data() {
    return {
      skillGroups: skillJson
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
};
</script>

<style>
</style>

