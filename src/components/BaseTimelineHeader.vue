<template>
  <header class="timeline-header">
    <span
      class="tag is-primary"
      v-bind:class="{ 'is-medium': properties.isMedium }"
    >{{ content.text }}</span>
  </header>
</template>

<script>
export default {
  props: {
    properties: {
      isMedium: {
        type: Boolean,
        default: false
      }
    },
    content: {
      text: String
    }
  }
};
</script>

<style>
</style>