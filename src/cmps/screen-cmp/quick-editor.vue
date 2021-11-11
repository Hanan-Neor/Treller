<template>
  <section class="quick-editor">
    <quick-editor-menu :card="card" :listId="listId"></quick-editor-menu>
    <quick-editor-input  :card="card" :listId="listId"></quick-editor-input>
  </section>
</template>

<script>
import QuickEditorMenu from './quick-editor/quick-editor-menu.vue';
import quickEditorInput from './quick-editor/quick-editor-input.vue'
export default {
  props: ['card', 'listId'],
  components: {
    QuickEditorMenu,
    quickEditorInput
  },
  created(){
    // console.log(this.card);
  }
};
</script>

<style></style>
