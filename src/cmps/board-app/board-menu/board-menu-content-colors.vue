<template>
  <section class="board-menu-content-colors">
    <board-colors v-model="coverColor" @input="updateBoardBackground"></board-colors>
  </section>
</template>

<script>
import boardColors from './board-colors.vue'
export default {
  props:['board'],
  data() {
    return {
      coverColor: null,
      // coverColor: this.card.style.bgColor,
    };
  },
  methods: {
    updateBoardBackground() {
      // alert(this.coverColor)
      const boardToSave = JSON.parse(JSON.stringify(this.board));
      boardToSave.style.bgColor = this.coverColor;
      this.$store.dispatch({
        type: 'updateBoardBackground',
        board: boardToSave,
      });
      // this.$store.dispatch({
      //   type: 'updateBoardBackground',
      //   boardId: boardToSave._id,
      //   bgColor : this.coverColor
      // });

      // this.$nextTick(function () {
        // this.$store.dispatch({ type: 'saveBoard' });
      // });
    },
  },
  components: {
   boardColors
  },
};
</script>

<style></style>
