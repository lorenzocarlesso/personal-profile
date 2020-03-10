<template>
  <section id="skills" class="section">
    <h1 class="title has-text-centered">Skills</h1>
    <div class="container content">
      <div class="columns has-text-centered">
        <div
          class="column is-4"
          v-for="(group, group_index) in $t('skills')"
          :id="`col-${group_index}`"
          :key="`col-${group_index}`"
        >
          <h4 class="title is-4">{{ group.title }}</h4>
          <div :id="`accordion_${group_index}`">
            <BaseAccordion
              v-for="(skill, index) in group.list"
              :key="`article_${group_index}_${index}`"
              :index="`${index}`"
              :parentAccordion="`accordion_${group_index}`"
              :content="skill"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bulmaCollapsible from "@creativebulma/bulma-collapsible";
import BaseAccordion from "../components/BaseAccordion.vue";

export default {
  components: {
    BaseAccordion
  },
  data() {
    return {};
  },
  mounted() {
    const collapsibles = bulmaCollapsible.attach();
  }
};
</script>

<style>
</style>