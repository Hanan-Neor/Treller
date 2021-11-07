<template>
  <section class="list-cards" :class="listId">
    <draggable
    class="draggable"
    :list="cards"
      group="card"
      @start="drag = true"
      @end="onEnd"
        style=" display:flex;flex-direction:column;gap: 8px;"
        ghostClass= "sortable-ghost"
        chosenClass= "sortable-chosen"
        dragClass= "sortable-drag"
    >
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
export default {
  props: ['cards', 'cardComposerState', 'listId'],
  methods: {
    onEnd() {
      this.drag = false;
      this.$store.dispatch({type:'saveBoard'})
    },
    hideCardComposerInput() {
      this.$emit('hideCardComposerInput');
      // alert('hi from list-cards')
    },
  },

  components: { cardPreview, CardComposerInput, draggable },
};
</script>

<style></style>
