<template>
  <section
    v-if="board"
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
        if (!this.board) return;
        this.board = await this.$store.dispatch('loadBoard', boardId);
        // console.log(boardId);
        // this.board = boards[0];
      },
    },
  },
  created() {
    // this.board = this.$store.getters.board

    // this.$store.dispatch({ type: 'loadBoards' }).then((boards) => {
      // console.log(boards);
      // console.log(boards[0]._id);
    //   setTimeout(() => {
    //     this.$router.push('/board/' + boards[0]._id);
    //   }, 2000);
    // });


    // console.log(board);
    // console.log(board._id);
    // try{

    //   this.board = board;
    // }catch(err){
    //   console.log(err);
    // }
  },

  components: {
    // boardWrapper,
    BoardContainer,
    BoardMenu,
  },
};
</script>
