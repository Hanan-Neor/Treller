<template>
  <section>
    <quick-editor :card="card" :listId="listId"></quick-editor>
    <modal-open-card></modal-open-card>
  </section>
</template>

<script>
import QuickEditor from './quick-editor.vue';
import modalOpenCard from './modal-open-card.vue';
export default {
  props: ['card', 'listId'],
  components: {
    QuickEditor,
    modalOpenCard,
  },
};
</script>
