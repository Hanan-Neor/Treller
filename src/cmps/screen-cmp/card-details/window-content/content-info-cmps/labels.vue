<template>
  <section class="labels">
    <div>Labels</div>
  
    <section class="flex" style="gap:4px">
    <div
      v-for="label in boardLabels"
      :key="label.id"
      :style="{ 'background-color': label.color }"
      style="min-width:40px;height:2rem; border-radius:3px; padding:0 .75rem; display:flex; align-items:center; color:#fff"
    >
      {{ label.title }}
    </div>
    </section>
  </section>
</template>

<script>
import cardContentLabels from '../../../../board-app/board-container/board-content/card-preview-cmps/card-content-labels.vue';
export default {
  components: { cardContentLabels },
  props: ['card'],
  data() {
    return {
      boardLabels: null,
    };
  },
  computed: {
    getBoardLabels() {
      // return this.$store.getters.board.labels;
      const board = this.$store.getters.board;
      return board.labels;
    },
    currCard() {
      return this.$store.getters.currCard.card;
    },
  },
  watch: {
    currCard(newVal, oldVal) {
      const board = this.$store.getters.board;
      let labels = [];
      for (var i = 0; i < board.labels.length; i++) {
        if (!this.card.labelIds) return;
        for (var j = 0; j < this.card.labelIds.length; j++) {
          if (board.labels[i].id === this.card.labelIds[j]) {
            labels.push(board.labels[i]);
          }
        }
      }
      this.boardLabels = labels;
    },
  },
  created() {
    const board = this.$store.getters.board;
    let labels = [];
    for (var i = 0; i < board.labels.length; i++) {
      for (var j = 0; j < this.card.labelIds.length; j++) {
        if (board.labels[i].id === this.card.labelIds[j]) {
          labels.push(board.labels[i]);
        }
      }
    }
    this.boardLabels = labels;
  },
};
</script>

<style></style>
