<template>
  <section class="board-menu-buttons">
    <div class="" >Change background</div>
    <div class="">Search cards</div>
    <div class="" @click="removeBoard">Remove board</div>
  </section>
</template>

<script>
export default {
  props: ['board'],
  methods: {
    async removeBoard() {
      // this.$router.push('/'); //  ?
      this.toggleMenu();
      await this.$store.dispatch({
        type: 'removeBoard',
        boardId: this.board._id,
      });
      // setTimeout(()=>{
      this.$store.getters.board
        ? this.$router.push('/board/' + this.$store.getters.board._id)
        : this.$router.push('/');

      // },1000)
    },
    toggleMenu() {
      this.$emit('toggleMenu');
    },
  },
};
</script>

<style></style>
