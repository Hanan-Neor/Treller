<template>
  <!-- <section v-if="menuState" class="board-menu" style="width:340px; background-color:grey"> -->
  <section
    :class="menuDisplay"
    class="board-menu flex column"
    style="width: 340px; background-color: #f4f5f7"
  >
   <board-menu-header :board="board" @toggleMenu="toggleMenu"></board-menu-header>
    <board-menu-content :board="board"  @toggleMenu="toggleMenu"></board-menu-content>

    
  </section>
</template>

<script>
import boardMenuHeader from './board-menu/board-menu-header.vue'
import boardMenuContent from './board-menu/board-menu-content.vue'
export default {
  components: { boardMenuHeader, boardMenuContent},
  props: ['board'],
  methods: {
    toggleMenu() {
      this.$store.dispatch({ type: 'toggleMenu' });
    },
    // async removeBoard() {
    //   // this.$router.push('/'); //  ?
    //   this.toggleMenu();
    //   await this.$store.dispatch({
    //     type: 'removeBoard',
    //     boardId: this.board._id,
    //   });
    //   // setTimeout(()=>{
    //   this.$store.getters.board
    //     ? this.$router.push('/board/' + this.$store.getters.board._id)
    //     : this.$router.push('/');

    //   // },1000)
    // },
  },
  computed: {
    menuState() {
      // console.log(this.$store.getters.menuState);
      return this.$store.getters.menuState;
    },
    menuDisplay() {
      return {
        show: this.menuState,
        hide: !this.menuState,
      };
    },
  },
  // created(){
  //   setInterval(()=>{
  //     this.time = Date.now()
  //   },1000)
  // }
};
</script>

<style></style>
