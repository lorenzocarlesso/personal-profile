<template>
  <section id="experience" class="section">
    <div class="container">
      <h1 class="title has-text-centered">Experience</h1>

      <ExperienceBox />
      <ExperienceBox />
      <ExperienceBox />
      <ExperienceBox />
    </div>
  </section>
</template>

<script>
import ExperienceBox from "../components/ExperienceBox.vue";

export default {
  components: {
    ExperienceBox
  }
};
</script>

<style>
</style>