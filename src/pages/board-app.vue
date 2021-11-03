<template>
  <section
    class="board-app flex"
    style="position: relative; overflow-x: hidden"
  >
    <board-container :board="board"></board-container>
    <!-- <transition name="slide" type="animation"> -->
    <!-- <board-menu v-if="menuState"></board-menu> -->
    <board-menu :board="board"></board-menu>
    <!-- </transition> -->
  </section>
</template>

<script>
import BoardContainer from '../cmps/board-app/board-container.vue';
import BoardMenu from '../cmps/board-app/board-menu.vue';
// import boardWrapper from '../cmps/board-wrapper/board-wrapper.vue'

export default {
  data() {
    return {
      board: {},
    };
  },
  watch: {
    '$route.params.boardId': {
      immediate: true,
      async handler() {
        const { boardId } = this.$route.params;
        this.board = await this.$store.dispatch('loadBoard', boardId);
        // console.log(boardId);
        // this.board = boards[0];
      },
    },
  },

  components: {
    // boardWrapper,
    BoardContainer,
    BoardMenu,
  },
};
</script>
