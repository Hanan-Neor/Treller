<template>
  <section
    class="board-app flex"
    style="position: relative; overflow-x: hidden"
  >
    <board-container></board-container>
    <!-- <transition name="slide" type="animation"> -->
      <!-- <board-menu v-if="menuState"></board-menu> -->
      <board-menu></board-menu>
    <!-- </transition> -->
  </section>
</template>

<script>
import BoardContainer from "../cmps/board-app/board-container.vue";
import BoardMenu from "../cmps/board-app/board-menu.vue";
// import boardWrapper from '../cmps/board-wrapper/board-wrapper.vue'

export default {
//   computed: {
//     menuState() {
//       // console.log(this.$store.getters.menuState);
//       return this.$store.getters.menuState;
//     },
//   },

  components: {
    // boardWrapper,
    BoardContainer,
    BoardMenu,
  },
};
</script>

