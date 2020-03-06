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
                  <h1 class="title">{{ $t('name') }}</h1>
                  <h6 class="subtitle is-italic has-text-weight-normal">{{ $t('profession') }}</h6>
                  <p>{{ $t('shortDescription') }}</p>
                  <p v-html="$t('longDescription')"></p>
                  <p v-html="$t('live')"></p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="columns is-centered has-text-centered">
          <div v-for="quote in $t('quotes')" class="column is-3">
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
export default {
  data() {
    return {};
  }
};
</script>

<style>
</style>