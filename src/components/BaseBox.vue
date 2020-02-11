<template>
  <div class="box">
    <div class="content has-text-left">
      <h3 class="title">{{ content.title }}</h3>
      <p class="subtitle">{{ content.subtitle }}</p>
      <p v-for="(message, index) in content.messages" :key="`bb_${index}`">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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