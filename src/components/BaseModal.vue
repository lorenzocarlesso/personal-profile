<template>
  <div>
    <div class="modal" v-bind:class="{'is-active':isActive}">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <div class="content has-text-centered">
            <h3>{{message}}</h3>
            <p class="control"></p>
            <span>&nbsp;</span>
          </div>
        </div>
      </div>
      <button @click="close" class="modal-close"></button>
    </div>
    <button @click="launch" class="button is-primary">{{ title }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  props: {
    title: String,
    message: String
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