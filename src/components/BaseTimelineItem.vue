<template>
  <div class="timeline-item is-primary">
    <div
      class="timeline-marker is-icon"
      :class="[content.iconColor ? content.iconColor : 'is-primary']"
    >
      <font-awesome-icon :icon="content.icon" size="2x"></font-awesome-icon>
    </div>
    <div class="timeline-content">
      <p class="heading">{{ content.head }}</p>
      <p>{{ content.text }}</p>
      <p v-if="content.modal">
        <BaseModal :modal="content.modal" />
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
      iconColor: {
        type: String
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