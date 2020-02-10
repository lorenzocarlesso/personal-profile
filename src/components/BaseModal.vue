<template>
  <div>
    <div class="modal has-text-left" v-bind:class="{'is-active':isActive}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head" :class="[modal.color ? modal.color : 'is-primary']">
          <p class="modal-card-title">{{ modal.content.title }}</p>
          <button @click="close" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body content">
          <p class="subtitle">{{ modal.content.subtitle }}</p>
          <p v-for="message in modal.content.messages">{{ message }}</p>
        </section>
      </div>
    </div>
    <button
      @click="launch"
      class="button"
      :class="[modal.color ? modal.color : 'is-primary']"
    >{{ modal.button }}</button>
  </div>
  <!--
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
  -->
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
      color: {
        type: String
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