<template>
  <div>
    <div class="modal" v-bind:class="{'is-active':isActive}">
      <div class="modal-background"></div>
      <div class="modal-content">
        <BaseBox :content="content" />
      </div>
      <button @click="close" class="modal-close"></button>
    </div>
    <button @click="launch" class="button is-primary">{{ button }}</button>
  </div>
</template>

<script>
import BaseBox from "../components/BaseBox.vue";

export default {
  components: {
    BaseBox
  },
  data() {
    return {
      isActive: false
    };
  },
  props: {
    button: String,
    content: Object
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