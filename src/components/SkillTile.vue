<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ title }}</strong>
            <br />
            {{ description }}
          </p>
        </div>
        <progress class="progress is-primary" :value="level" max="100">{{ level }}</progress>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    level: {
      type: Number,
      required: true
    }
  }
};
</script>

<style>
</style>
