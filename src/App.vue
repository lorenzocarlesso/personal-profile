<template>
  <div id="app">
    <Menu />
    <Home />
    <News />
    <Lifetime />
    <Skills />
    <Skill2 />
    <Info />
    <Footer />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Home from "./pages/Home.vue";
import News from "./pages/News.vue";
import Lifetime from "./pages/Lifetime.vue";
import Skills from "./pages/Skills.vue";
import Skill2 from "./pages/Skill2.vue";
import Info from "./pages/Info.vue";
import Footer from "./pages/Footer.vue";

export default {
  name: "app",
  components: {
    Menu,
    Home,
    News,
    Lifetime,
    Skills,
    Skill2,
    Info,
    Footer
  }
};
</script>

