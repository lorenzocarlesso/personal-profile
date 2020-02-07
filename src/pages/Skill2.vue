<template>
  <section id="skills" class="section">
    <h1 class="title has-text-centered">Skills 2</h1>

    <div class="container content">
      <div class="columns has-text-centered">
        <div
          class="column is-4"
          v-for="group in skillGroups"
          :id="`${group.title}-tab`"
          :key="`${group.title}-tab`"
        >
          <h4 class="title is-4">{{ group.title }}</h4>
          <ul>
            <li
              v-for="(skill, index) in group.skills"
              :key="`${group.title}_${index}`"
            >{{ skill.title }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import skillJson from "../assets/json/skill.json";

export default {
  data() {
    return {
      skillGroups: skillJson
    };
  }
};
</script>

<style>
</style>