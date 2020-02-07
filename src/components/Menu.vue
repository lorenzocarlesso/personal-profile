<template>
  <nav class="navbar is-primary is-fixed-bottom" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="#home">Lorenzo Carlesso</a>

        <a
          id="navbar-burger"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="siteNavbar"
          @click="openCloseNavbar"
          :class="{ 'is-active' : showNav }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="siteNavbar" class="navbar-menu" :class="{ 'is-active' : showNav }">
        <div class="navbar-end">
          <a
            v-for="barItem in barItems"
            class="navbar-item"
            :href="`#${barItem.anchor}`"
            @click="openCloseNavbar"
          >{{ barItem.title }}</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
      barItems: [
        { title: "News", anchor: "news" },
        { title: "Lifetime", anchor: "lifetime" },
        { title: "Skills", anchor: "skills" },
        { title: "Info", anchor: "info" }
      ]
    };
  },
  methods: {
    // bulma not manage the burger button
    openCloseNavbar() {
      this.showNav = !this.showNav;
    }
  }
};
</script>

<style>
</style>