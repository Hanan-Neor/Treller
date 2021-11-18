<template>
  <section class="modal-edit-labels" style="padding: 0.75rem">
    <labels
      :card="card"
      :boardLabels="boardLabels"
      v-model="label"
      @input="addLabel"
    ></labels>
    <!-- {{ cardLabels }} -->
    <!-- {{ label }} -->
  </section>
</template>

<script>
import labels from './labels-cmps/labels.vue';
export default {
  props: ['card', 'listId'],
  data() {
    return {
      boardLabels: null,
      label: null,
      // coverColor: this.card.style.bgColor,
    };
  },
  methods: {
    addLabel() {
      // alert('hi')
      const cardToSave = this.card;
      const isExistLabel = cardToSave.labelIds.find((labelId) => {
        return labelId === this.label.id;
      });
      if (isExistLabel) {
        const idx = cardToSave.labelIds.findIndex((labelId) => {
          return labelId === this.label.id;
        });

        cardToSave.labelIds.splice(idx, 1);
      } else {
        cardToSave.labelIds.push(this.label.id);
      }
      this.$store.dispatch({
        type: 'saveCard',
        card: cardToSave,
        listId: this.listId,
      });

      //   this.$store.dispatch({type:'setCurrCard',card:cardToSave})
      this.$nextTick(function () {
        this.$store.dispatch({
          type: 'setCurrCard',
          card: cardToSave,
          pos: null,
          listId: this.listId,
          elWidth: null,
        });
        this.$store.dispatch({ type: 'saveBoard' });
      });
    },
  },
  created() {
    const boardLabels = this.$store.getters.board.labels;

    // boardLabels.sort(function (a, b) {
    //   // return a.title - b.title;
    //   return a.color - b.color;
    // });

    // let labels = [];
    // for (var i = 0; i < board.labels.length; i++) {
    //   for (var j = 0; j < this.card.labelIds.length; j++) {
    //     if (board.labels[i].id === this.card.labelIds[j]) {
    //       labels.push(board.labels[i]);
    //     }
    //   }
    // }
    this.boardLabels = boardLabels;
  },

  components: {
    labels,
  },
};
</script>

<style></style>
