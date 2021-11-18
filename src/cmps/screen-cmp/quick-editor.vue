<template>
  <section class="quick-editor" style="position: relative">
    <!-- transform: translateX(calc(100% +8px)); -->
    <!-- @resetPopup="resetPopup" -->

    <!-- <popup-container
      v-if="popupToShow === 'COVER'"
      @handleMenu="handleMenu"
      style="right: 0; transform: translateX(103%)"
    >
      <modal-change-cover :card="card" :listId="listId"></modal-change-cover>
    </popup-container>

    <popup-container
      v-if="popupToShow === 'LABELS'"
      @handleMenu="handleMenu"
      style="right: 0; transform: translateX(103%)"
    >
      <modal-edit-labels
        :card="card"
        :listId="listId"
        @handleMenu="handleMenu"
      ></modal-edit-labels>
    </popup-container>

    <popup-container
      v-if="popupToShow === 'MEMBERS'"
      @handleMenu="handleMenu"
      style="right: 0; transform: translateX(103%)"
    >
      <modal-change-members
        :card="card"
        :listId="listId"
        @handleMenu="handleMenu"
      ></modal-change-members>
    </popup-container>

    <popup-container
      v-if="popupToShow === 'MOVE'"
      @handleMenu="handleMenu"
      style="right: 0; transform: translateX(103%)"
    >
      <modal-move
        :card="card"
        :listId="listId"
        @handleMenu="handleMenu"
      ></modal-move>
    </popup-container>

    <popup-container
      v-if="popupToShow === 'DATES'"
      @handleMenu="handleMenu"
      style="right: 0; transform: translateX(103%)"
    >
      <modal-edit-dates
        :card="card"
        :listId="listId"
        @handleMenu="handleMenu"
      ></modal-edit-dates>
    </popup-container> -->

    <quick-editor-menu
      @handleMenu="handleMenu"
      :card="card"
      :listId="listId"
    ></quick-editor-menu>
    <!-- <quick-editor-content :card="card" :listId="listId"></quick-editor-content> -->
    <quick-editor-input :card="card" :listId="listId"></quick-editor-input>
    <!-- <button class="save-button" @click="handleEnter">Save</button> -->
  </section>
</template>

<script>
// import QuickEditorContent from './quick-editor/quick-editor-content.vue';
import popupContainer from './popup-container.vue';
import QuickEditorMenu from './quick-editor/quick-editor-menu.vue';
import quickEditorInput from './quick-editor/quick-editor-input.vue';
import ModalChangeCover from './quick-editor/modal-change-cover.vue';
import ModalChangeMembers from './quick-editor/modal-change-members.vue';
import ModalEditLabels from './quick-editor/modal-edit-labels.vue';
import ModalMove from './quick-editor/modal-move.vue';
import ModalEditDates from './quick-editor/modal-edit-dates.vue';
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
  },
  components: {
    // QuickEditorContent,
    popupContainer,
    QuickEditorMenu,
    quickEditorInput,
    ModalChangeCover,
    ModalEditLabels,
    ModalChangeMembers,
    ModalMove,
    ModalEditDates,
  },
  created() {
    // console.log(this.card);
  },
};
</script>

<style></style>
