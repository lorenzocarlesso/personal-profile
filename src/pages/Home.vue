<template>
  <section id="home" class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <div class="box">
            <article class="media">
              <div class="media-left desktop">
                <figure class="image is-128x128">
                  <img src="../assets/logo.png" alt="Image" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <h1 class="title">{{ name }}</h1>
                  <h6 class="subtitle is-italic has-text-weight-normal">{{ profession }}</h6>
                  <p>{{ shortDescription }}</p>
                  <p>
                    I currently live in
                    <b>{{ city }} ({{ country }})</b>
                  </p>
                  <p>
                    <a href="http://linkedin.com/in/lorenzo-carlesso-85441a3b" target="_blank">
                      <font-awesome-icon
                        class="linkedin-transition"
                        :icon="['fab', 'linkedin']"
                        size="2x"
                      ></font-awesome-icon>
                    </a>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="section is-medium">
        <div class="columns has-text-centered">
          <div v-for="quote in quotes" class="column">
            <div class="container">
              <h2 class="subtitle is-italic">" {{ quote.mention }} "</h2>
              <h6 class>{{ quote.author }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "Lorenzo Carlesso",
      profession: "Senior Software Developer",
      city: "Turin",
      country: "Italy",
      shortDescription:
        "Specialized in web projects. I am open to new job opportunities.",
      quotes: [
        {
          mention: "Festìna lente",
          author: "Augusto"
        },
        {
          mention:
            "When a man tells you that he got rich through hard work, ask him: 'Whose?",
          author: "Don Marquis"
        },
        {
          mention: "You have to die a few times before you can really live.",
          author: "Charles Bukowski"
        },
        {
          mention: "Faber est suae quisque fortunae.",
          author: "(maybe) Sallustio"
        }
      ]
    };
  }
};
</script>

<style>
</style>