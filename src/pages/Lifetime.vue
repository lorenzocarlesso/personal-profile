<template>
  <section id="lifetime" class="section">
    <div class="container">
      <h1 class="title has-text-centered">My Lifetime in a Timeline</h1>
      <div class="timeline is-centered">
        <BaseTimelineHeader :properties="timeline.headerEnd" :content="$t('timeline.headerEnd')" />
        <BaseTimelineItem
          :properties="timeline.pauseForMyself"
          :content="$t('timeline.pauseForMyself')"
        />

        <BaseTimelineItem :properties="timeline.xeffe" :content="$t('timeline.xeffe')" />
        <BaseTimelineItem :properties="timeline.xeffe" :content="$t('timeline.secondDaughter')" />
        <BaseTimelineItem :properties="timeline.synthesis" :content="$t('timeline.synthesis')" />
        <BaseTimelineItem
          :properties="timeline.firstDaughter"
          :content="$t('timeline.firstDaughter')"
        />
        <BaseTimelineItem :properties="timeline.meetAlice" :content="$t('timeline.meetAlice')" />
        <BaseTimelineItem :properties="timeline.datasoftRe" :content="$t('timeline.datasoftRe')" />
        <BaseTimelineItem
          :properties="timeline.dynamicSitesCourse"
          :content="$t('timeline.dynamicSitesCourse')"
        />
        <BaseTimelineHeader
          :properties="timeline.twoThousand"
          :content="$t('timeline.twoThousand')"
        />
        <BaseTimelineItem :properties="timeline.youth" :content="$t('timeline.youth')" />
        <BaseTimelineItem :properties="timeline.allStamp" :content="$t('timeline.allStamp')" />
        <BaseTimelineItem :properties="timeline.highSchool" :content="$t('timeline.highSchool')" />
        <BaseTimelineItem :properties="timeline.playDrum" :content="$t('timeline.playDrum')" />
        <BaseTimelineItem
          :properties="timeline.playFootball"
          :content="$t('timeline.playFootball')"
        />
        <BaseTimelineItem :properties="timeline.commodore64" :content="$t('timeline.commodore64')" />
        <BaseTimelineItem :properties="timeline.born" :content="$t('timeline.born')" />
        <BaseTimelineHeader
          :properties="timeline.headerStart"
          :content="$t('timeline.headerStart')"
        />
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