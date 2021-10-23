<template>
  <section
    class="board-content flex"
    
    style="gap: 20px; background-color: #0079bf; flex: 1; padding: 4px;overflow-x: auto; "
  >
    <board-list
      v-for="list in board.lists"
      :list="list"
      :key="list.id"
    ></board-list>
    <!-- {{board[0].lists[0]}} -->
    <!-- <board-list :list="board.lists[0]"/> -->
    <list-composer></list-composer>
  </section>
</template>

<script>
import boardList from "./board-content/board-list.vue";
import ListComposer from './board-content/list-composer.vue';
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

  components: { boardList, ListComposer },
  async created() {
    // this.$store.getters.boards
    //     .then(board=>{
    //         this.board = board[0]
    //     })
    const boards = await this.$store.getters.boards;
    this.board = boards[0];
  },
};
</script>

<style>
</style>