<template>
  <section class="window-content">
    <content-info></content-info>
    <content-description></content-description>
    <content-checklist></content-checklist>
    <content-activities></content-activities>
  </section>
</template>

<script>
import contentDescription from './window-content/content-description.vue';
import ContentActivities from './window-content/content-activities.vue';
import ContentChecklist from './window-content/content-checklist.vue';
import contentInfo from './window-content/content-info.vue';
export default {
  components: {
    contentInfo,
    contentDescription,
    ContentChecklist,
    ContentActivities,
  },
};
</script>

<style></style>
