<template>
  <div id="app" class="app">
    <screen></screen>
    <app-header class="" />
    <router-view class="main-height" />
  </div>
</template>

<script>
import appHeader from './cmps/app-header.vue';
import appFooter from './cmps/app-footer.vue';
import Screen from './cmps/screen.vue';
import { boardService } from './services/board.service';

export default {
  data() {
    return {};
  },
  async created() {
    const isFirstLaunch = await boardService.query();
    console.log('isFirstLaunch', isFirstLaunch.length);
    let boards = await this.$store.dispatch({ type: 'loadBoards' });
    if (isFirstLaunch.length) return;
    await this.$store.dispatch({ type: 'createBoards' });
    boards = await this.$store.dispatch({ type: 'loadBoards' });

    console.log(boards);
    this.$router.push('/board/' + boards[0]._id);
  },

  components: {
    appHeader,
    appFooter,
    Screen,
  },
};
</script>
