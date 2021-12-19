<template>
  <div id="app" class="app">
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

export default {
  data() {
    return {};
  },
  // watch: {
  //   boards(newVal, oldVal) {
     
  //   },
  // },
  // computed:{
  //   board(){
  //     this.$store.getters.boards
  //   }
  // },


  async created() {
    const isFirstLaunch = await boardService.query();
    // console.log('isFirstLaunch', isFirstLaunch.length);
    let boards = await this.$store.dispatch({ type: 'loadBoards' });
    await this.$store.dispatch({type: 'loadUsers'});
    this.$store.dispatch({type: 'timeInterval'})
    // console.log(boards);


    // if (isFirstLaunch.length) return;
    // await this.$store.dispatch({ type: 'createBoards' });
    // boards = await this.$store.dispatch({ type: 'loadBoards' });

    // console.log(boards);

    // this.$router.push('/board/' + boards[0]._id);
  },

  components: {
    appHeader,
    appFooter,
    Screen,
    ScreenCreateBoard,
  },
};
</script>
