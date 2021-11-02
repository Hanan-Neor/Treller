<template>
  <section class="list-cards">
    <card-preview
      v-for="card in cards"
      :listId="listId"
      :card="card"
      :key="card.id"
    ></card-preview>
    <card-composer-input
      v-if="cardComposerState"
      :listId="listId"
      :cardComposerState="cardComposerState"
      @hideCardComposerInput="hideCardComposerInput"
    ></card-composer-input>
  </section>
</template>

<script>
import CardComposerInput from './card-composer-input.vue';
import cardPreview from './card-preview.vue';
export default {
  props: ['cards', 'cardComposerState', 'listId'],
  methods: {
    hideCardComposerInput() {
      this.$emit('hideCardComposerInput');
      // alert('hi from list-cards')
    },
  },

  components: { cardPreview, CardComposerInput },
};
</script>

<style></style>
