<template>
  <div>
    <div class="modal" v-bind:class="{'is-active':isActive}">
      <div class="modal-background"></div>
      <div class="modal-content">
        <BaseBox :content="modal.content" />
      </div>
      <button @click="close" class="modal-close"></button>
    </div>
    <button
      @click="launch"
      class="button"
      :class="[modal.primaryColor ? 'is-primary': '', modal.secondaryColor ? 'is-secondary' : '']"
    >{{ modal.button }}</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isActive: false
    };
  },
  props: {
    modal: {
      button: String,
      primaryColor: {
        type: Boolean,
        default: false
      },
      secondaryColor: {
        type: Boolean,
        default: false
      },
      content: Object
    }
  },
  methods: {
    launch() {
      this.isActive = true;
    },
    close() {
      this.isActive = false;
    }
  }
};
</script>

<style>
</style>