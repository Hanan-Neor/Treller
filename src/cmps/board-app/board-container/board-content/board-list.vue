<template>
  <section class="board-list" style="min-width: 270px">
    <div class="board-list-content" style="background-color: #ebecf0">
      <list-header :title="list.title"></list-header>
      <list-cards :cards="list.cards"></list-cards>
      <card-composer></card-composer>
    </div>
  </section>
</template>

<script>
import CardComposer from "./card-composer.vue";
import ListCards from "./list-cards.vue";
import listHeader from "./list-header.vue";
export default {
  props: ["list"],

  components: { listHeader, ListCards, CardComposer },
};
</script>

<style>
</style>