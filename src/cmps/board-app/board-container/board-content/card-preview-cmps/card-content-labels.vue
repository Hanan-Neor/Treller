<template>
  <section
    class="card-content-labels"
    style="display: flex; gap: 4px; margin-bottom: 4px"
    @click.stop="toggleLables"
  >
    <!-- <span v-for="label in card.labelIds" :key="label" :style="{'background-color':}">{{ label }} </span> -->
    <!-- <span v-for="label in card.labelIds" :key="label">{{ label }} </span> -->

    <!-- class="show" -->
    <span
      :class="showLabels"
      v-for="label in boardLabels"
      :key="label.id"
      :style="{ 'background-color': label.color }"
      >{{ label.title }}
    </span>
    <!-- {{card.labelIds}} -->
    <!-- {{ boardLabels }} -->
    <!-- {{getBoardLabels}} -->
  </section>
</template>

<script>
export default {
  props: ['card'],
  data() {
    return {
      boardLabels: null,
    };
  },
  methods: {
    toggleLables() {
      // if(!document.querySelector('.card-content-labels span'))return
      // document.querySelectorAll('.card-content-labels span').classList.toggle('show')
      this.$store.dispatch({ type: 'toggleLabels' });
    },
  },
  computed: {
    showLabels() {
      return this.$store.getters.labelsState ? 'show' : '';
    },
    getBoardLabels() {
      // return this.$store.getters.board.labels;
      const board = this.$store.getters.board;
      return board.labels;
    },
    currCard(){
      return this.$store.getters.currCard.card
    }
  },
  watch: {
    // card(newVal, oldVal) {
    currCard(newVal, oldVal) {
      const board = this.$store.getters.board;
      let labels = [];
      // console.log(board.labels);
      // if (!board.labels) return;
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

    // const labels = board.labels.filter((label) => {
    //   // console.log(label);
    //   return this.card.labelIds.filter((id) => {
    //     // console.log('id in card',id);
    //     // console.log('id in board',label.id);
    //     id === label.id;
    //   });
    // });

    for (var i = 0; i < board.labels.length; i++) {
      for (var j = 0; j < this.card.labelIds.length; j++) {
        if (board.labels[i].id === this.card.labelIds[j]) {
          labels.push(board.labels[i]);
        }
      }
    }

    console.log(`labels in card ${this.card.id} and board`, labels);

    // this.boardLabels = this.getBoardLabels()
    // this.boardLabels = board.labels
    this.boardLabels = labels;
  },
};
</script>

<style></style>
