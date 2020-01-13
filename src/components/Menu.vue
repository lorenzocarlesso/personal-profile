<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="#home">Lorenzo Carlesso</a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="siteNavbar"
          @click="showNav = !showNav"
          :class="{ 'is-active' : showNav }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="siteNavbar" class="navbar-menu" :class="{ 'is-active' : showNav }">
        <div class="navbar-end">
          <a class="navbar-item" href="#aboutMe">About Me</a>
          <a class="navbar-item" href="#skills">Skills</a>
          <a class="navbar-item" href="#experience">Experience</a>
          <a class="navbar-item" href="#education">Education</a>
          <a class="navbar-item" href="#news">News</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    };
  }
};
</script>

<style>
</style>