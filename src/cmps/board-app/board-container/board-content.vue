<template>
  <section class="board-content flex">
    <!-- <draggable  :list="board.lists" group="list" @start="drag = true" @end="onEnd" animation=150 style="display:flex;gap: 8px;"> -->
      <!-- handle=".list-header" -->
    <draggable
      :list="board.lists"
      group="board"
      @start="drag = true"
      @end="onEnd"
      delay= 1000
      delayOnTouchOnly= true
      touchStartThreshold= 10
      animation="150"
      style="display: flex; gap: 8px"
    >
      <board-list
        v-for="list in board.lists"
        :list="list"
        :key="list.id"
      ></board-list>
    </draggable>

    <!-- {{board[0].lists[0]}} -->
    <!-- <board-list :list="board.lists[0]"/> -->
    <list-composer></list-composer>
    <!-- <list-composer-button></list-composer-button>
    <list-composer-input></list-composer-input> -->


    <div class="zoom-button" @click="toggleZoom"> <font-awesome-icon v-if="zoomButtonBool" icon="search-minus"/><font-awesome-icon v-else icon="search-plus"/></div>
  </section>
</template>

<script>
import boardList from './board-content/board-list.vue';
import ListComposerButton from './board-content/list-composer-button.vue';
import ListComposerInput from './board-content/list-composer-input.vue';
import ListComposer from './board-content/list-composer.vue';
import draggable from 'vuedraggable';

export default {
  props: ['board'],
  data() {
    return {
      // board: {},
      zoomButtonBool: true,
    };
  },
  methods: {
    onEnd() {
      this.drag = false;
      this.$store.dispatch({ type: 'saveBoard' });
    },
    toggleZoom(){
      this.$el.classList.toggle('zoom-out')
      this.zoomButtonBool = !this.zoomButtonBool;
    }
  },
  computed: {
    //    async board(){
    //        try{
    //            return this.$store.getters.boards
    //        }catch{
    //        }
    //     }
  },

  // watch: {
  //   '$route.params.boardId': {
  //     immediate: true,
  //     async handler() {
  //       const { boardId } = this.$route.params;
  //       this.board = await this.$store.dispatch('loadBoard', boardId);
  //       // console.log(boardId);
  //       // this.board = boards[0];
  //     },
  //   },
  // },

  components: {
    boardList,
    ListComposerButton,
    ListComposerInput,
    ListComposer,
    draggable,
  },
  mounted() {
    // console.log(this.$el.offsetWidth);
  },
  async created() {
    // this.$store.getters.boards
    //     .then(board=>{
    //         this.board = board[0]
    //     })
    // this.board = await this.$store.getters.board;
    // const { boardId } = this.$route.params;
    // console.log(boardId);
    // const boards = await this.$store.getters.boards;
    // this.board = boards[0];
  },
};
</script>

<style></style>
