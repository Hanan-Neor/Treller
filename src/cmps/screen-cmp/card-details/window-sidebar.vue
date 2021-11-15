<template>
  <section class="window-sidebar flex column" style="position:relative">
    <button class="trello-button">Members</button>
    <button class="trello-button" @click="handleMenu('LABELS')" >Labels</button>
    <button class="trello-button">Checklist</button>
    <button class="trello-button">Dates</button>
    <button class="trello-button" @click="handleMenu('COVER')">Cover</button>
    <button class="trello-button">Attachment</button>
    <button class="trello-button">Move</button>
    <button class="trello-button">Copy</button>
    <button class="trello-button" @click="deleteCard">Delete</button>
    <!-- <button @click="deleteCard" class="trello-button">Delete</button> -->

    <modal-change-cover
      v-if="popupToShow === 'COVER'"
      :card="card"
      :listId="listId"
      @handleMenu="handleMenu"
      style="
        z-index: 4;
        width: 300px;
        height: 400px;
        position: absolute;
        background-color: #fff;
        opacity: 1;
        top: 0;
        left: 0;
      "
    ></modal-change-cover>
    <modal-edit-labels
      v-if="popupToShow === 'LABELS'"
      :card="card"
      :listId="listId"
      @handleMenu="handleMenu"
      style="
        z-index: 4;
        width: 300px;
        height: 400px;
        position: absolute;
        background-color: #fff;
        opacity: 1;
        top: 0;
        left: 0;
      "
    ></modal-edit-labels>
  </section>
</template>

<script>
import ModalChangeCover from './../quick-editor/modal-change-cover.vue';
import ModalEditLabels from './../quick-editor/modal-edit-labels.vue';

export default {
  props:['card','listId'],

    data() {
    return {
      popupToShow: null,
      // popupToShow:'COVER'
    };
  },
  methods: {
    handleMenu(val) {
      this.popupToShow = val;
    },
    // resetPopup(){

    // }
        deleteCard() {
      this.$store.dispatch({
        type: 'removeCard',
        cardId: this.card.id,
        listId: this.listId,
      });
      this.$nextTick(function () {
        this.$store.dispatch({ type: 'saveBoard' });
      });
      this.toggleScreen();
    },
        toggleScreen() {
      this.$store.dispatch({ type: 'toggleScreen' });
      setTimeout(() => {
        this.$store.dispatch({ type: 'resetCurrCard' });
      }, 200); //animation time
    },


  },
  components: {
    // QuickEditorContent,
    ModalChangeCover,
    ModalEditLabels,
  },

};
</script>

<style></style>
