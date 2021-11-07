<template>
  <section class="app-header flex">
    <div class="column-left flex">
      <!-- <button class="trello-button">...</button> -->
      <button class="trello-button">home</button>
      <button class="trello-button">boards</button>

      <router-link v-for="board in boards" :to="'/board/' + board._id" :key="board._id">
        <button class="trello-button">{{board.title}}</button></router-link
      >

      <!-- <router-link :to="'/board/' + boards[0]._id">
        <button class="trello-button">{{boards[0].title}}</button></router-link
      >
      <router-link :to="'/board/' + boards[1]._id">
        <button class="trello-button">{{boards[1].title}}</button></router-link
      > -->

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

  watch: {
    boardsFromStore(newVal, oldVal) {
      // console.log(newVal);
      this.boards = newVal;
    },
  },

  computed: {
    boardsFromStore() {
      return this.$store.getters.boards;
    },
  },

  // created() {
  //   // this.$nextTick(() => {
  //   setTimeout(() => {
  //     this.boards = this.$store.getters.boards;
  //   }, 1000);
  //   // });
  // },
};
</script>

<style></style>
