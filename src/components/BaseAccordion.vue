<template>
  <article class="message skill has-text-left">
    <div class="message-header">
      {{ content.title }}
      <a
        :href="`#collapsible-message-${parentAccordion}-${index}`"
        data-action="collapse"
      >[+]</a>
    </div>
    <div
      :id="`collapsible-message-${parentAccordion}-${index}`"
      class="message-body is-collapsible"
      :data-parent="parentAccordion"
    >
      <div class="message-body-content">
        <p v-if="content.subtitle" class="subtitle">{{ content.subtitle }}</p>
        <p v-for="message in content.messages">{{ message }}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    parentAccordion: String,
    index: String,
    content: {
      title: String,
      subtitle: String,
      messages: Array
    }
  }
};
</script>

<style>
</style>