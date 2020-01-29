<template>
  <div class="timeline-item">
    <div class="timeline-marker is-icon is-primary">
      <font-awesome-icon :icon="content.icon" size="2x"></font-awesome-icon>
    </div>
    <div class="timeline-content">
      <p class="heading">{{ content.head }}</p>
      <p>{{ content.text }}</p>
      <p v-if="content.modal">
        <BaseModal :button="content.modal.button" :content="content.modal.content" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      head: {
        type: String,
        required: true
      },
      text: String,
      icon: [Object, Array, String],
      modal: Object
    }
  }
};
</script>

<style>
</style>