<template>
  <section class="home">
    <!-- <section class="home"> -->
    hello from home
  </section>
</template>

<script>
export default {
async created(){
    let boards = await this.$store.dispatch({ type: 'loadBoards' });
    console.log(boards);
    this.$router.push('/board/'+boards[0]._id)
  }
};
</script>

<style></style>
