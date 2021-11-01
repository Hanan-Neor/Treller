<template>
  <section
    class="board-container flex column"
    :class="menuDisplay"
    style="flex: 1; background-color: lightblue; padding: 1px; overflow-x: auto"
  >
    <board-header></board-header>
    <board-content></board-content>
  </section>
</template>

<script>
import BoardContent from "./board-container/board-content.vue";
import boardHeader from "./board-container/board-header.vue";
export default {
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
