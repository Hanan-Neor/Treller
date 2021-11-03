<template>
  <!-- <section v-if="menuState" class="board-menu" style="width:340px; background-color:grey"> -->
  <section
    :class="menuDisplay"
    class="board-menu"
    style="width: 340px; background-color: #f4f5f7"
  >
    <div class="menu-header">
      <h3>MENU - {{board.title}}</h3>
      <button @click="toggleMenu">⨉</button>
    </div>
    <hr class="board-menu-divider" />
  </section>
</template>

<script>
export default {
  props:['board'],
  methods: {
    toggleMenu() {
      this.$store.dispatch({ type: 'toggleMenu' });
    },
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
