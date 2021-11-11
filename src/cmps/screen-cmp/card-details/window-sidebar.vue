<template>
  <section class="window-sidebar flex column">
    <button class="trello-button">Members</button>
    <button class="trello-button">Labels</button>
    <button class="trello-button">Checklist</button>
    <button class="trello-button">Dates</button>
    <button class="trello-button">Cover</button>
    <button class="trello-button">Attachment</button>
    <button class="trello-button">Move</button>
    <button class="trello-button">Copy</button>
    <button class="trello-button">Delete</button>
    <!-- <button @click="deleteCard" class="trello-button">Delete</button> -->
  </section>
</template>

<script>
import quickEditorMenu from './../quick-editor/quick-editor-menu.vue';
export default {
  components: {
    quickEditorMenu,
  },
};
</script>

<style></style>
