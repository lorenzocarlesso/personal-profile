<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ skill.title }}</strong>
            <br />
            {{ skill.description }}
          </p>
        </div>
        <!-- <ProgressBar :level="skill.level" />  -->
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
    skill: {
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
  }
};
</script>

<style>
</style>
