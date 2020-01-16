<template>
  <div id="app">
    <Menu />
    <Home />
    <AboutMe />
    <Skills />
    <News />
    <Experience />
    <Education />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Home from "./pages/Home.vue";
import AboutMe from "./pages/AboutMe.vue";
import Skills from "./pages/Skills.vue";
import Experience from "./pages/Experience.vue";
import Education from "./pages/Education.vue";
import News from "./pages/News.vue";

export default {
  name: "app",
  components: {
    Menu,
    Home,
    AboutMe,
    Skills,
    Experience,
    Education,
    News
  }
};
</script>

