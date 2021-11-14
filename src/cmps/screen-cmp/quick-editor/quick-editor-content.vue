<template>
  <section class="quick-editor-content"  style="background-color:#fff; border-radius:3px">
    <!-- <card-preview-header :card="card" style="margin-bottom:6px"></card-preview-header>

    <card-content-labels :card="card" style="margin-left:8px;"></card-content-labels> -->

    <quick-editor-input :card="card" :listId="listId"></quick-editor-input>
  </section>
</template>

<script>
// import cardContentLabels from './../../board-app/board-container/board-content/card-preview-cmps/card-content-labels.vue'
// import cardPreviewHeader from './../../board-app/board-container/board-content/card-preview-cmps/card-preview-header.vue'

import QuickEditorInput from './quick-editor-input.vue';

export default {
  props: ['card','listId'],
  components: {
    QuickEditorInput,
    // cardContentLabels,
    // cardPreviewHeader
  },

};
</script>

<style></style>
