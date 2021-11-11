<template>
  <section
    class="screen-create-board"
    @mousedown.self="toggleScreen"
    :class="screenDisplay"
  >
    <create-board-modal @toggleScreen="toggleScreen"></create-board-modal>
  </section>
</template>

<script>
import createBoardModal from './create-board-modal.vue';
export default {
  components: { createBoardModal },
  methods: {
    toggleScreen() {
      this.$store.dispatch({ type: 'toggleCreateBoardScreen' });

    //   setTimeout(() => {
    //     document.querySelector('.modal-input').focus();
    //   }, 1000);
    //   this.$nextTick(() => {
    //     document.querySelector('.modal-input').focus();
    //   });
    },
  },

  computed: {
    screenState() {
      return this.$store.getters.screenCreateBoardState;
    },

    screenDisplay() {
      return {
        show: this.screenState,
        hide: !this.screenState,
      };
    },
  },
};
</script>

<style></style>
