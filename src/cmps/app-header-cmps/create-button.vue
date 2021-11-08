<template>
  <section class="create-button">
    <button class="trello-button" @click="addBoard">Create</button>
  </section>
</template>

<script>
// import CreateBoardModal from './screen-cmp/create-board-modal.vue';

export default {
  methods: {
    // async addBoard() {
    //   const newBoard = await this.$store.dispatch({ type: 'addBoard' });
    //   this.$router.push('/board/' + newBoard._id);
    //   // console.log(this.$store.getters.boards);
    // },
    addBoard() {
      // this.$store.dispatch({type:'toggleScreen'});
      this.$store.dispatch({type:'toggleCreateBoardScreen'});
    },
  },
};
</script>

<style></style>
