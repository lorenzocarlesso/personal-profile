<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        © {{ now.getFullYear() }}
        -
        <strong>Lorenzo Carlesso</strong>
        - Version 1.0
      </p>
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