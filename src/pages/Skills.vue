<template>
  <section id="skills" class="section">
    <div class="container">
      <h1 class="title has-text-centered">Skills</h1>

      <h2 class="subtitle">WEB DEVELOPMENT SKILLS</h2>
      <div class="columns is-desktop">
        <div class="column">
          <SkillTile :title="`${java.title}`" :level=0 :description="`${java.description}`" />
        </div>
        <div class="column">
          <SkillTile :title="`${scala.title}`" :level=0 :description="`${scala.description}`" />
        </div>
        <div class="column">
          <SkillTile :title="`${javascript.title}`" :level="`${javascript.level}`" :description="`${javascript.description}`" />
        </div>
      </div>
<!--
      <h2 class="subtitle">WEB DESIGN SKILLS</h2>
      <div class="columns is-desktop">
        <div class="column">
          <SkillTile />
        </div>
        <div class="column">
          <SkillTile />
        </div>
        <div class="column">
          <SkillTile />
        </div>
        -->
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
      java: {
        title: "Java",
        level: 70,
        description:
          "I've used Java for 15 years. I have a long experience about java web project. I started with J2EE 1.4."
      },
      scala: {
        title: "Scala",
        level: 40,
        description:
          "I've started to use Scala four years ago. I have not deep experience on pure Scala project because I use it to support java. I'm studying it to improve my confidence."
      },
      javascript: {
        title: "Javascript",
        level: 50,
        description:
          "Like fullstack developer I've used Javascript to build dynamic feauters on client browser. I used Javascript with different libraries: Jquery, underscore, highCharts."
      }
    };
  }
};
</script>

<style>
</style>