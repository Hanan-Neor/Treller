<template>
  <section
    class="board-content flex"
    style="gap: 8px; background-color: #0079bf; flex: 1; padding: 4px;overflow-x: auto; "
  >
    <board-list
      v-for="list in board.lists"
      :list="list"
      :key="list.id"
    ></board-list>
    <!-- {{board[0].lists[0]}} -->
    <!-- <board-list :list="board.lists[0]"/> -->
    <list-composer></list-composer>
    <!-- <list-composer-button></list-composer-button>
    <list-composer-input></list-composer-input> -->
  </section>
</template>

<script>
import boardList from "./board-content/board-list.vue";
import ListComposerButton from "./board-content/list-composer-button.vue";
import ListComposerInput from "./board-content/list-composer-input.vue";
import ListComposer from "./board-content/list-composer.vue";
export default {
  data() {
    return {
      board: {},
    };
  },
  computed: {
    //    async board(){
    //        try{
    //            return this.$store.getters.boards
    //        }catch{
    //        }
    //     }
  },

  components: {
    boardList,
    ListComposerButton,
    ListComposerInput,
    ListComposer,
  },
  async created() {
    // this.$store.getters.boards
    //     .then(board=>{
    //         this.board = board[0]
    //     })
    // this.board = await this.$store.getters.board;
    const boards = await this.$store.getters.boards;
    this.board = boards[0];
  },
};
</script>

<style></style>
