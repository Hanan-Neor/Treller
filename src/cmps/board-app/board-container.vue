<template>
  <section
    class="board-container flex column"
    :class="menuDisplay"
    style="flex: 1; background-color: lightblue; padding: 1px; overflow-x: auto"
  >
    <board-header :board="board"></board-header>
    <board-content :board="board"></board-content>
  </section>
</template>

<script>
import BoardContent from './board-container/board-content.vue';
import boardHeader from './board-container/board-header.vue';
export default {
  props:['board'],

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


  components: { boardHeader, BoardContent },
};
</script>

<style></style>
