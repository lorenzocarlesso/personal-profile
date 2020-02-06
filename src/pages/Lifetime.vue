<template>
  <section id="lifetime" class="section">
    <div class="container">
      <h1 class="title has-text-centered">My Lifetime in a Timeline</h1>
      <div class="timeline is-centered">
        <BaseTimelineHeader :content="timeline.headerEnd" />
        <BaseTimelineItem :content="timeline.pauseForMyself" />
        <BaseTimelineItem :content="timeline.xeffe" />
        <BaseTimelineItem :content="timeline.secondDaughter" />
        <BaseTimelineItem :content="timeline.synthesis" />
        <BaseTimelineItem :content="timeline.firstDaughter" />
        <BaseTimelineItem :content="timeline.meetAlice" />
        <BaseTimelineItem :content="timeline.datasoftRe" />
        <BaseTimelineItem :content="timeline.dynamicSitesCourse" />
        <BaseTimelineHeader :content="timeline.twoThousand" />
        <BaseTimelineItem :content="timeline.youth" />
        <BaseTimelineItem :content="timeline.allStamp" />
        <BaseTimelineItem :content="timeline.highSchool" />
        <BaseTimelineItem :content="timeline.playDrum" />
        <BaseTimelineItem :content="timeline.playFootball" />
        <BaseTimelineItem :content="timeline.commodore64" />
        <BaseTimelineItem :content="timeline.born" />
        <BaseTimelineHeader :content="timeline.headerStart" />
      </div>
    </div>
  </section>
</template>

<script>
import BaseTimelineHeader from "../components/BaseTimelineHeader.vue";
import BaseTimelineItem from "../components/BaseTimelineItem.vue";
import timelineJson from "../assets/json/timeline.json";

export default {
  components: { BaseTimelineHeader, BaseTimelineItem },
  data() {
    return {
      timeline: timelineJson
    };
  }
};
</script>

<style>
</style>