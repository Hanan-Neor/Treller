<template>
  <section class="window-sidebar flex column" style="position: relative">
    <span>Add to card</span>
    <button  class="sidebar-button" @click="handleMenu('MEMBERS')">
      Members
    </button>
    <button class="sidebar-button" @click="handleMenu('LABELS')">Labels</button>
    <button class="sidebar-button">Checklist</button>
    <button class="sidebar-button" @click="handleMenu('DATES')">Dates</button>
    <button class="sidebar-button" @click="handleMenu('COVER')">Cover</button>
    <button class="sidebar-button">Attachment</button>
    <span>Actions</span>
    <button class="sidebar-button" @click="handleMenu('MOVE')">Move</button>
    <button class="sidebar-button" @click="copyCard">Copy</button>
    <button class="sidebar-button" @click="deleteCard">Delete</button>
    <!-- <button @click="deleteCard" class="trello-button">Delete</button> -->

    <popup-container v-if="popupToShow === 'COVER'" @handleMenu="handleMenu">
      <modal-change-cover :card="card" :listId="listId"></modal-change-cover>
    </popup-container>

    <popup-container v-if="popupToShow === 'LABELS'" @handleMenu="handleMenu">
      <modal-edit-labels
        :card="card"
        :listId="listId"
        @handleMenu="handleMenu"
      ></modal-edit-labels>
    </popup-container>

    <popup-container v-if="popupToShow === 'MEMBERS'" @handleMenu="handleMenu">
      <modal-change-members
        :card="card"
        :listId="listId"
        @handleMenu="handleMenu"
      ></modal-change-members>
    </popup-container>

    <popup-container v-if="popupToShow === 'MOVE'" @handleMenu="handleMenu">
      <modal-move
        :card="card"
        :listId="listId"
        @handleMenu="handleMenu"
      ></modal-move>
    </popup-container>

    <popup-container v-if="popupToShow === 'DATES'" @handleMenu="handleMenu">
      <modal-edit-dates
        :card="card"
        :listId="listId"
        @handleMenu="handleMenu"
      ></modal-edit-dates>
    </popup-container>
  </section>
</template>

<script>
import popupContainer from './../popup-container.vue';
import ModalChangeCover from './../quick-editor/modal-change-cover.vue';
import ModalEditDates from './../quick-editor/modal-edit-dates.vue';
import ModalEditLabels from './../quick-editor/modal-edit-labels.vue';
import ModalChangeMembers from './../quick-editor/modal-change-members.vue';
import ModalMove from './../quick-editor/modal-move.vue';


export default {
  props: ['card', 'listId'],

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
    copyCard() {
      const cardToSave = JSON.parse(JSON.stringify(this.card));
      this.$store.dispatch({
        type: 'addCard',
        newCard: cardToSave,
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
      this.toggleScreen();
    },

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
    popupContainer,
    ModalEditDates,
    ModalChangeCover,
    ModalEditLabels,
    ModalChangeMembers,
    ModalMove
  },
};
</script>

<style></style>
