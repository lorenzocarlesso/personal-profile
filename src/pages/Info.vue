<template>
  <section id="info" class="section">
    <div class="container content">
      <h1 class="title has-text-centered">Info</h1>
      <div class="columns">
        <div class="column is-4">
          <h6 class="title is-6">{{ $t('info.whyThisSite.title') }}</h6>
          <p>{{ $t('info.whyThisSite.description') }}</p>
        </div>
        <div class="column is-4">
          <h6 class="title is-6">{{ $t('info.training.title') }}</h6>
          <p>{{ $t('info.training.description') }}</p>
        </div>
        <div class="column is-4">
          <h6 class="title is-6">{{ $t('info.warning.title') }}</h6>
          <p>{{ $t('info.warning.description') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>