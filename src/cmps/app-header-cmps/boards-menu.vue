<template>
  <section class="boards-menu flex column">
    <input type="text" placeholder="Find boards by name..." class="basic-input"/>
    <router-link
      v-for="board in boards"
      :to="'/board/' + board._id"
      :key="board._id"
    >
      <div @click="toggleMenu">{{ board.title }}</div></router-link
    >
  </section>
</template>

<script>
export default {
  props: ['boards'],
  methods: {
    close(e) {
      if (
        !this.$el.contains(e.target) &&
        !document.querySelector('.boards-menu-button').contains(e.target)
      ) {
        this.$emit('toggleMenu');
      }
    },
    toggleMenu(){
        this.$emit('toggleMenu');
        
    }
  },
  mounted() {
    document.addEventListener('mousedown', this.close);
  },
  beforeDestroy() {
    document.removeEventListener('mousedown', this.close);
  },
};
</script>

<style></style>
