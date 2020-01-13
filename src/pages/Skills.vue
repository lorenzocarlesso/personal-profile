<template>
  <section id="skills" class="section">
    <div class="container">
      <h1 class="title has-text-centered">Skills</h1>

      <h2 class="subtitle">WEB DEVELOPMENT SKILLS</h2>
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
      </div>

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
      </div>
    </div>
  </section>
</template>

<script>
import SkillTile from "../components/SkillTile.vue";

export default {
  components: {
    SkillTile
  }
};
</script>

<style>
</style>