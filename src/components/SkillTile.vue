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
        <!-- <ProgressBar :level="level" />  -->
      </div>
    </article>
  </div>
</template>

<script>
import ProgressBar from "../components/ProgressBar.vue";

export default {
  components: {
    ProgressBar
  },
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
