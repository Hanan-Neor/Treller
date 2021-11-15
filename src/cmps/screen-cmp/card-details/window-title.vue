<template>
  <section class="window-title" style="">
    <div>
      <h2 style="margin:0">{{ card.title }}</h2>
    </div>
    <div>in list {{ listById.title }}</div>
  </section>
</template>

<script>
export default {
  props: ['card', 'listId'],
  computed: {
    listById() {
      const board = this.$store.getters.board;
      const list = board.lists.find(list=>list.id === this.listId)
      return list
      // console.log(list);
    },
  },
};
</script>

<style></style>
