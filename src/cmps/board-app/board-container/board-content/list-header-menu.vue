<template>
  <section class="list-header-menu flex column">
      <h4>List actions</h4>
    <hr class="board-menu-divider" />

    <div class="menu-option" @click="removeList">Delete list</div>
  </section>
</template>

<script>
export default {
  methods: {
    removeList() {
      this.$emit('removeList');
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.$emit('toggleMenu');
      }
    },
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
