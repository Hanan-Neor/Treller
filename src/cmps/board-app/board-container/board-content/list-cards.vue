<template>
  <section class="list-cards">
    <card-preview
      v-for="card in cards"
      :card="card"
      :key="card.id"
    ></card-preview>
    <!-- <div v-if="cardComposerState"> -->
    <!-- <div> -->
    <card-composer-input
      v-if="cardComposerState"
      :listId="listId"
      :cardComposerState="cardComposerState"
      @hideCardComposerInput="hideCardComposerInput"
    ></card-composer-input>
    <!-- </div> -->
  </section>
</template>

<script>
import CardComposerInput from "./card-composer-input.vue";
import cardPreview from "./card-preview.vue";
export default {
  props: ["cards", "cardComposerState", "listId"],
  methods: {
    hideCardComposerInput() {
      this.$emit("hideCardComposerInput");
      // alert('hi from list-cards')
    },
  },

  components: { cardPreview, CardComposerInput },
};
</script>

<style></style>
