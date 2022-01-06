<template>
  <section v-if="board" class="board-app flex">
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
import {
  socketService,
  SOCKET_EVENT_BOARD_UPDATED,
} from './../services/socket2.service';
// import boardWrapper from '../cmps/board-wrapper/board-wrapper.vue'

export default {
  data() {
    return {
      board: {},
    };
  },
  methods: {
    // handleBgColor() {
    //   const bgColor = this.board.style.bgColor;
    //   if (bgColor) {
    //     // this.$el.style.backgroundColor = bgColor
    //     // document.querySelector('.app').style.backgroundColor = bgColor;
    //     // document.querySelector('.app').style.backgroundColor = this.$store.getters.board.style.bgColor;
    //     document.querySelector('.app').style.backgroundColor = this.boardBackground;
    //   }
    // },
  },
  computed: {
    //  boardBackground(){
    //   return this.$store.getters.board.style.bgColor
    // },
    currBoard() {
      this.$store.getters.board;
    },
    boardUpdateSwitch() {
      this.$store.getters.boardUpdateSwitch;
    },
  },
  watch: {
    '$route.params.boardId': {
      immediate: true,
      async handler() {
        const { boardId } = this.$route.params;
        // console.log(boardId);
        if (!boardId) return;
        // if (!this.board) return;
        this.board = await this.$store.dispatch('loadBoard', boardId);
        // this.board = await this.$store.dispatch({type:'loadBoard', boardId});

        // this.handleBgColor();

        // console.log(this.board);
        // console.log(boardId);
        // this.board = boards[0];
      },
    },
    currBoard(newVal, oldVal) {
      this.board = newVal;
      alert('hi');
    },
    boardUpdateSwitch(newVal, oldVal) {
      // this.board = newVal;
      alert('hi');
    },
  },
  async created() {
    socketService.off(SOCKET_EVENT_BOARD_UPDATED);
    socketService.on(SOCKET_EVENT_BOARD_UPDATED, async (board) => {
      console.log('from socket in board', board);
      // alert('hello from socket')
      // alert(board.title)
      if (board._id !== this.board._id) return;
      const boardId = board._id;
      this.board = await this.$store.dispatch('loadBoard', boardId);

      // context.commit({ type: 'setCurrBoard', board });
      // context.dispatch('loadBoard', board._id)
      // state.currBoard = board;
    });
  },

  components: {
    // boardWrapper,
    BoardContainer,
    BoardMenu,
  },
};
</script>
