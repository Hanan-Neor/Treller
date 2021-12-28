<template>
  <section class="create-button">
    <button class="trello-button flex align-center" @click="addBoard">
        <i class="el-icon-plus" style="font-size:1.2rem; font-weight:600"></i>
      <!-- <font-awesome-icon icon="plus" /> -->
      </button>
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
