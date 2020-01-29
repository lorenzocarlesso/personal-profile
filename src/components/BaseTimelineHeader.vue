<template>
  <header class="timeline-header">
    <span class="tag is-primary" v-bind:class="{ 'is-medium': content.isMedium }">{{ content.text }}</span>
  </header>
</template>

<script>
export default {
  props: {
    content: {
      text: String,
      isMedium: {
        type: Boolean,
        default: false
      }
    }
  }
};
</script>

<style>
</style>