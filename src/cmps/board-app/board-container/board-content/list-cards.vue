<template>
  <section class="list-cards" :class="listId">
    <draggable
      class="draggable"
      :list="cards"
      group="card"
      @start="onStart"
      @end="onEnd"
      @add="onAdd"
      delay="1000"
      delayOnTouchOnly="true"
      touchStartThreshold="10"
      animation="150"
      style="display: flex; flex-direction: column; gap: 8px"
      ghostClass="sortable-ghost"
      chosenClass="sortable-chosen"
      dragClass="sortable-drag"
    >
      <!-- setData="onSetData" -->
      <!-- ghostClass: "sortable-ghost",  // Class name for the drop placeholder
	chosenClass: "sortable-chosen",  // Class name for the chosen item
	dragClass: "sortable-drag",  // Class name for the dragging item -->
      <!-- animation=150 -->
      <!-- @end="drag = false" -->
      <!-- v-model="myArray" -->
      <!-- <div v-for="element in myArray" :key="element.id">{{element.name}}</div> -->

      <card-preview
        v-for="card in cards"
        :listId="listId"
        :card="card"
        :key="card.id"
      ></card-preview>
    </draggable>
    <card-composer-input
      v-if="cardComposerState"
      :listId="listId"
      :cardComposerState="cardComposerState"
      @hideCardComposerInput="hideCardComposerInput"
    ></card-composer-input>
  </section>
</template>

<script>
import CardComposerInput from './card-composer-input.vue';
import cardPreview from './card-preview.vue';
import draggable from 'vuedraggable';
// import Sortable from './../../../../../node_modules/sortablejs'
// import Sortable from 'sortablejs/modular/sortable.complete.esm.js';
export default {
  props: ['cards', 'cardComposerState', 'listId'],
  methods: {
    onSetData() {
      alert('hi');
    },
    onStart(evt) {
      // console.log(evt);
      let list = this.$store.getters.board.lists.find(
        (list) => list.id === this.listId
      );
      let card = list.cards[evt.oldIndex];
      this.$store.dispatch({ type: 'startDrag', card, list });

      // console.log(list.cards[evt.oldIndex].title);
    },
    onAdd(evt) {
      let itemEl = evt.item;
      //     console.log(evt);
      //     console.log(itemEl);
      // console.log(evt.from);
      // console.log(evt.to);
      // console.log(evt.oldIndex);
      // console.log(evt.newIndex);
      // alert('hi');

      // const board = this.$store.getters.board
      let list = this.$store.getters.board.lists.find(
        (list) => list.id === this.listId
      );
      // console.log(list);
      // console.log(evt.newIndex);
      // console.log(list.cards[evt.newIndex].title);
      let card = list.cards[evt.newIndex];

      this.$store.dispatch({ type: 'endDrag', card, list });
    },
    onEnd() {
      this.drag = false;
      this.$store.dispatch({ type: 'saveBoard' });
    },
    hideCardComposerInput() {
      this.$emit('hideCardComposerInput');
      // alert('hi from list-cards')
    },
  },
  mounted() {
    //     var el = this.$el;
    // var sortable = new Sortable(el, {
    // onStart: function (/**Event*/evt) {
    // 	alert('baba')
    // 	},
    // })
  },

  components: { cardPreview, CardComposerInput, draggable },
};
</script>

<style></style>
