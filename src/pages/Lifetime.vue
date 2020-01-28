<template>
  <section id="lifetime" class="section">
    <div class="container">
      <h1 class="title has-text-centered">My Lifetime in a Timeline</h1>
      <div class="timeline is-centered">
        <header class="timeline-header">
          <span class="tag is-medium is-primary">...</span>
        </header>
        <div class="timeline-item">
          <div class="timeline-marker is-primary"></div>
          <div class="timeline-content">
            <p class="heading">{{ xeffe.head }}</p>
            <p>
              <BaseModal :button="xeffe.modal.button" :content="xeffe.modal.content" />
            </p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker is-primary"></div>
          <div class="timeline-content">
            <p class="heading">{{ synthesis.head }}</p>
            <p>
              <BaseModal :button="synthesis.modal.button" :content="synthesis.modal.content" />
            </p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker is-primary"></div>
          <div class="timeline-content">
            <p class="heading">2010</p>
            <p>My second daughter is born</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker is-primary"></div>
          <div class="timeline-content">
            <p class="heading">2007</p>
            <p>My first daughter is born</p>
          </div>
        </div>
        <header class="timeline-header">
          <span class="tag is-primary">2000</span>
        </header>
        <div class="timeline-item">
          <div class="timeline-marker is-icon">
            <i class="fa fa-plus"></i>
          </div>
          <div class="timeline-content">
            <p class="heading">{{ highSchool.head }}</p>
            <p>
              <BaseModal :button="highSchool.modal.button" :content="highSchool.modal.content" />
            </p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker is-primary"></div>
          <div class="timeline-content">
            <p class="heading">August 1977</p>
            <p>When I was born</p>
          </div>
        </div>
        <header class="timeline-header">
          <span class="tag is-medium is-primary">1970</span>
        </header>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      xeffe: {
        head: "September 2013",
        modal: {
          button: "Xeffe",
          content: {
            title: "Xeffe s.r.l. (Turin)",
            subtitle: "Java/Scala Senior Developer - Team Leader"
          }
        }
      },
      synthesis: {
        head: "April 2008",
        modal: {
          button: "Synthesis",
          content: {
            title: "Synthesis (Turin)",
            subtitle: "Java Senior Developer"
          }
        }
      },
      highSchool: {
        head: "June 1997",
        modal: {
          button: "High School",
          content: {
            title: "Computer Expert Graduation",
            subtitle: "I.T.I.S. E. Majoarana - Grugliasco (Turin)",
            messages: ["bla 1", "bla 2"]
          }
        }
      }
    };
  }
};
</script>

<style>
</style>