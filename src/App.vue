<template>
  <div id="app">
    <Menu />
    <Home />
    <News />
    <Lifetime />
    <Skill />
    <Info />
    <Footer />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Home from "./pages/Home.vue";
import News from "./pages/News.vue";
import Lifetime from "./pages/Lifetime.vue";
import Skill from "./pages/Skill.vue";
import Info from "./pages/Info.vue";
import Footer from "./pages/Footer.vue";

export default {
  name: "app",
  components: {
    Menu,
    Home,
    News,
    Lifetime,
    Skill,
    Info,
    Footer
  }
};
</script>

