<template>
  <section class="window-sidebar" style="">
    <span>Add to card</span>
    <button  class="sidebar-button flex  align-center" @click="handleMenu('MEMBERS')">
      <font-awesome-icon :icon="['far', 'user']"  :style="{marginRight:'6px'}"/> Members
    </button>
    <button class="sidebar-button flex align-center" flex @click="handleMenu('LABELS')"><font-awesome-icon icon="tag" :style="{marginRight:'6px'}"/> Labels</button>
    <button class="sidebar-button flex align-center" flex><font-awesome-icon :icon="['far', 'check-square']"  :style="{marginRight:'6px'}"/> Checklist</button>
    <button class="sidebar-button flex align-center" @click="handleMenu('DATES')"><font-awesome-icon :icon="['far', 'clock']"  :style="{marginRight:'6px'}"/> Dates</button>
    <button class="sidebar-button flex align-center" @click="handleMenu('COVER')"><font-awesome-icon :icon="['far', 'window-maximize']"  :style="{marginRight:'6px'}"/> Cover</button>
    <button class="sidebar-button flex align-center"><font-awesome-icon icon="paperclip"  :style="{marginRight:'6px'}"/> Attachment</button>
    <span>Actions</span>
    <button class="sidebar-button flex align-center" @click="handleMenu('MOVE')"><font-awesome-icon icon="arrow-right"  :style="{marginRight:'6px'}"/> Move</button>
    <button class="sidebar-button flex align-center" @click="copyCard"><font-awesome-icon :icon="['far', 'copy']"  :style="{marginRight:'6px'}"/> Copy</button>
    <button class="sidebar-button flex align-center" @click="deleteCard"><font-awesome-icon :icon="['far', 'trash-alt']"  :style="{marginRight:'6px'}"/> Delete</button>
    <!-- <button @click="deleteCard" class="trello-button">Delete</button> -->

    <popup-container v-if="popupToShow === 'COVER'"  :header="'Colors'" @handleMenu="handleMenu">
      <modal-change-cover :card="card" :listId="listId"></modal-change-cover>
    </popup-container>

    <popup-container v-if="popupToShow === 'LABELS'"  :header="'Labels'" @handleMenu="handleMenu">
      <modal-edit-labels
        :card="card"
        :listId="listId"
        @handleMenu="handleMenu"
      ></modal-edit-labels>
    </popup-container>

    <popup-container v-if="popupToShow === 'MEMBERS'"  :header="'Members'" @handleMenu="handleMenu">
      <modal-change-members
        :card="card"
        :listId="listId"
        @handleMenu="handleMenu"
        
      ></modal-change-members>
    </popup-container>

    <popup-container v-if="popupToShow === 'MOVE'"  :header="'Move Card'" @handleMenu="handleMenu">
      <modal-move
        :card="card"
        :listId="listId"
        @handleMenu="handleMenu"
      ></modal-move>
    </popup-container>

    <popup-container v-if="popupToShow === 'DATES'"  :header="'Dates'" @handleMenu="handleMenu">
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
     close(e) {
      if (!this.$el.contains(e.target)) {
        // this.$emit('resetPopup');
        this.$el.classList.remove('show');
      }
    },
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
        card: this.card,
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
   mounted() {

    document.addEventListener('mousedown', this.close);
  },
  beforeDestroy() {
    document.removeEventListener('mousedown', this.close);
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
