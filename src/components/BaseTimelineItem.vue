<template>
  <div class="timeline-item is-primary">
    <div
      class="timeline-marker is-icon"
      :class="[properties.iconColor ? properties.iconColor : 'is-primary']"
    >
      <font-awesome-icon :icon="properties.icon" size="2x"></font-awesome-icon>
    </div>
    <div class="timeline-content">
      <p class="heading">{{ content.head }}</p>
      <p>{{ content.text }}</p>
      <p v-if="content.modal">
        <BaseModal :properties="properties.modal" :content="content.modal" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    properties: {
      iconColor: {
        type: String
      },
      icon: [Object, Array, String],
      modal: Object
    },
    content: {
      head: {
        type: String,
        required: true
      },
      text: String,
      modal: Object
    }
  }
};
</script>

<style>
</style>