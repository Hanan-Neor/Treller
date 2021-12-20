<template>
  <section class="board-header flex">
    <div class="column-left flex align-center">
      <board-title :board="board"></board-title>
      <button class="trello-button">⭐</button>
      <!-- <img
        v-for="member in board.members"
        :src="member.imgUrl"
        :key="member._id"
      /> -->
      <board-members  :board="board"></board-members>
    </div>
    <div class="column-right flex">
      <button class="trello-button">Statistics</button>
      <button class="trello-button" v-if="!menuState" @click="toggleMenu">
        Show menu
      </button>
    </div>
  </section>
</template>

<script>
import boardTitle from './board-header-cmp/board-title.vue';
import BoardMembers from './board-header-cmp/board-members.vue';
export default {
  props: ['board'],
  data() {
    return {
      // editable: false,
    };
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch({ type: 'toggleMenu' });
    },
  },
  computed: {
    menuState() {
      // console.log(this.$store.getters.menuState);
      return this.$store.getters.menuState;
    },
  },
  components: {
    boardTitle,
    BoardMembers,
  },
};
</script>

<style></style>
