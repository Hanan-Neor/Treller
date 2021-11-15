<template>
  <section class="window-content flex column" style="gap:2rem">
    <content-info :card="card"></content-info>
    <content-description :card="card"></content-description>
    <content-checklist :card="card"></content-checklist>
    <content-activities :card="card"></content-activities>
  </section>
</template>

<script>
import contentDescription from './window-content/content-description.vue';
import ContentActivities from './window-content/content-activities.vue';
import ContentChecklist from './window-content/content-checklist.vue';
import contentInfo from './window-content/content-info.vue';
export default {
  props:['card'],
  components: {
    contentInfo,
    contentDescription,
    ContentChecklist,
    ContentActivities,
  },
};
</script>

<style></style>
