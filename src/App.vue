<template>
  <div id="app">
    <Menu />
    <Home />
    <AboutMe />
    <Skills />
    <News />
    <Experience />
    <Education />
    <Info />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Home from "./pages/Home.vue";
import AboutMe from "./pages/AboutMe.vue";
import Skills from "./pages/Skills.vue";
import Experience from "./pages/Experience.vue";
import Education from "./pages/EducationTwo.vue";
import News from "./pages/News.vue";
import Info from "./pages/Info.vue";

export default {
  name: "app",
  components: {
    Menu,
    Home,
    AboutMe,
    Skills,
    Experience,
    Education,
    News,
    Info
  }
};
</script>

