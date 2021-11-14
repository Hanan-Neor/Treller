<template>
  <section class="quick-editor" style="position: relative">
    <!-- transform: translateX(calc(100% +8px)); -->
    <!-- @resetPopup="resetPopup" -->
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
        right: 0;
        transform: translateX(103%);
      "
    ></modal-change-cover>
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
import QuickEditorMenu from './quick-editor/quick-editor-menu.vue';
import quickEditorInput from './quick-editor/quick-editor-input.vue';
import ModalChangeCover from './quick-editor/modal-change-cover.vue';
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
    QuickEditorMenu,
    quickEditorInput,
    ModalChangeCover,
  },
  created() {
    // console.log(this.card);
  },
};
</script>

<style></style>
