<template>
  <section id="news" class="section">
    <div class="container has-text-justified">
      <h1 class="title has-text-centered">News</h1>
      <div class="content" v-for="(item, index) in $t('news')" :key="`news_${index}`">
        <h3 class="title">{{item.title}}</h3>
        <p v-for="paragraph in item.content">{{paragraph}}</p>
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