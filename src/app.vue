<template>
  <!-- <div id="app" class="app"  :style="{background:boardBackground?boardBackground :'red'}"> -->
  <div id="app" class="app"  :style="styles">
    <screen-create-board></screen-create-board>
    <screen></screen>
    <app-header class="" />
    <router-view class="main-height" />
  </div>
</template>

<script>
import appHeader from './cmps/app-header.vue';
import appFooter from './cmps/app-footer.vue';
import Screen from './cmps/screen-card.vue';
import { boardService } from './services/board.service';
import ScreenCreateBoard from './cmps/screen-board.vue';
import {socketService, SOCKET_EVENT_BOARD_UPDATED} from './services/socket2.service'

export default {
  data() {
    return {};
  },
  // watch: {
  //   boards(newVal, oldVal) {
     
  //   },
  // },
  computed:{
    styles(){
      return{
        background: (this.$store.getters.board)? this.boardBackground : '#fff'
      }
    },
     boardBackground(){
      return this.$store.getters.board.style.bgColor
    },
    // board(){
    //   this.$store.getters.boards
    // }
  },


  async created() {
    const isFirstLaunch = await boardService.query();
    // console.log('isFirstLaunch', isFirstLaunch.length);
    let boards = await this.$store.dispatch({ type: 'loadBoards' });
    await this.$store.dispatch({type: 'loadUsers'});
    await this.$store.dispatch({type: 'loadLoggedinUser'});
    this.$store.dispatch({type: 'timeInterval'})
    // console.log(boards);


    // if (isFirstLaunch.length) return;
    // await this.$store.dispatch({ type: 'createBoards' });
    // boards = await this.$store.dispatch({ type: 'loadBoards' });

    // console.log(boards);

    // this.$router.push('/board/' + boards[0]._id);

    



    
  // socketService.off(SOCKET_EVENT_BOARD_UPDATED);
  //       socketService.on(SOCKET_EVENT_BOARD_UPDATED, async board => {
  //         console.log('from socket in board' , board);
  //         // alert('hello from socket')
  //         // alert(board.title)
  //         const boardId = board._id
  //       this.board = await this.$store.dispatch('loadBoard', boardId);
  //       // context.commit({ type: 'setCurrBoard', board });
  //       // context.dispatch('loadBoard', board._id)
  //         // state.currBoard = board;
  //       })



  },

  components: {
    appHeader,
    appFooter,
    Screen,
    ScreenCreateBoard,
  },
};
</script>
