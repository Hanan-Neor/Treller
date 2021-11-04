<template>
  <section class="app-header flex">
    <div class="column-left flex">
      <!-- <button class="trello-button">...</button> -->
      <button class="trello-button">home</button>
      <button class="trello-button">boards</button>
      <router-link :to="'/board/' + boards[0]._id">
        <button class="trello-button">board 1</button></router-link
      >
      <router-link :to="'/board/' + boards[1]._id">
        <button class="trello-button">board 2</button></router-link
      >
      <!-- <input type="text" placeholder="Jump to...">  -->
    </div>
    <div class="column-center">
      <div>TRELLER</div>
    </div>
    <div class="column-right flex">
      <button class="trello-button">+</button>
      <!-- <button class="trello-button">!</button> -->
      <button class="trello-button">🔔</button>
      <div>HN</div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      boards: null,
    };
  },
  created() {
    // this.$nextTick(() => {
    setTimeout(() => {
      this.boards = this.$store.getters.boards;
    }, 200);
    // });
  },
};
</script>

<style></style>
