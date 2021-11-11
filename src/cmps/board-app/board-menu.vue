<template>
  <!-- <section v-if="menuState" class="board-menu" style="width:340px; background-color:grey"> -->
  <section
    :class="menuDisplay"
    class="board-menu"
    style="width: 340px; background-color: #f4f5f7"
  >
    <div class="menu-header">
      <h3>MENU - {{ board.title }}</h3>
      <button @click="toggleMenu">⨉</button>
    </div>
    <hr class="board-menu-divider" />

    <board-menu-buttons
      :board="board"
      @toggleMenu="toggleMenu"
    ></board-menu-buttons>

    <hr class="board-menu-divider" />

    <board-menu-activities  :board="board"></board-menu-activities>
  </section>
</template>

<script>
import BoardMenuActivities from './board-menu/board-menu-activities.vue';
import boardMenuButtons from './board-menu/board-menu-buttons.vue';
export default {
  components: { boardMenuButtons, BoardMenuActivities },
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
};
</script>

<style></style>
