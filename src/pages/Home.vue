<template>
  <section id="home" class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <div class="box">
            <article class="media">
              <div class="media-left desktop">
                <figure class="image is-128x128">
                  <img src="../assets/images/Simpsonized.jpg" alt="Image" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <h1 class="title">{{ general.name }}</h1>
                  <h6 class="subtitle is-italic has-text-weight-normal">{{ general.profession }}</h6>
                  <p>{{ general.shortDescription }}</p>
                  <p v-html="general.longDescription"></p>
                  <p v-html="general.live"></p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="columns is-centered has-text-centered">
          <div v-for="quote in general.quotes" class="column is-3">
            <div class="container">
              <q class="is-size-6">{{ quote.mention }}</q>
              <h6 class="is-italic">{{ quote.author }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import generalJson from "../assets/json/general.json";

export default {
  data() {
    return {
      general: generalJson
    };
  }
};
</script>

<style>
</style>