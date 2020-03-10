<template>
  <footer class="footer">
    <div class="container content has-text-centered">
      <div class="technologies-alignment">
        <a class="footer-logo" href="https://vuejs.org/">
          <img src="../assets/images/logos/vue.png" alt="vue logo" width="30" height="30" />
        </a>
        <a class="footer-logo" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
            width="100"
            height="100"
          />
        </a>
        <a class="footer-logo" href="https://html.spec.whatwg.org/multipage/">
          <img
            src="../assets/images/logos/HTML5-128.png"
            alt="HTML5 spec whatwg"
            width="30"
            height="30"
          />
        </a>
        <a class="footer-logo" href="https://sass-lang.com/">
          <img alt="Sass" width="30" height="30" src="../assets/images/logos/sass.svg" />
        </a>
      </div>
      <div>
        <p>
          © {{ now.getFullYear() }}
          -
          <strong>{{ $t('name') }}</strong>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      now: new Date()
    };
  }
};
</script>

<style>
</style>