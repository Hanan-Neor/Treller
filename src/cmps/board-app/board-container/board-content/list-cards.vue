<template>
  <section class="list-cards">
    <card-preview
      v-for="card in cards"
      :card="card"
      :key="card.id"
    ></card-preview>
  </section>
</template>

<script>
import cardPreview from "./card-preview.vue";
export default {
  components: { cardPreview },
  props: ["cards"],
};
</script>

<style>
</style>