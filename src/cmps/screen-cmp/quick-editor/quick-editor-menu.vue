<template>
  <section class="quick-editor-menu-container" :class="styles" style="">
    <section class="quick-editor-menu flex column">
      <button
        class="trello-button"
        @click="
          () => {
            this.$store.dispatch({ type: 'openCardDetails' });
          }
        "
      >
       <font-awesome-icon icon="pager" :style="{marginRight:' 6px'}"/> Open card
      </button>
      <button @click="handleMenu('LABELS')" class="trello-button">
       <font-awesome-icon icon="tag"  :style="{marginRight:' 6px'}"/> Edit labels
      </button>
      <button @click="handleMenu('MEMBERS')" class="trello-button">
       <font-awesome-icon :icon="['far', 'user']" :style="{marginRight:' 6px  '}"/> Change members
      </button>
      <button @click="handleMenu('COVER')" class="trello-button">
       <font-awesome-icon :icon="['far', 'window-maximize']" :style="{marginRight:' 6px'}"/> Change cover
      </button>
      <button @click="handleMenu('MOVE')" class="trello-button"> 
        <font-awesome-icon icon="arrow-right" :style="{marginRight:' 6px'}"/>
<!-- <i class="el-icon-right" style="font-size:1.2rem; margin-right:6px"></i> -->
            Move
         </button>
      <button @click="copyCard" class="trello-button"><font-awesome-icon :icon="['far', 'copy']" :style="{marginRight:' 6px'}"/> Copy</button>
      <button @click="handleMenu('DATES')" class="trello-button">
        <font-awesome-icon :icon="['far', 'clock']" :style="{marginRight:' 6px'}"/> Edit dates
      </button>
      <button @click="deleteCard" class="trello-button"><font-awesome-icon :icon="['far', 'trash-alt']" :style="{marginRight:' 6px'}"/> Delete</button>
      <!-- {{ card.title }} -->
    </section>
    <section>
      <popup-container :header="'Colors'" v-if="popupToShow === 'COVER'" @handleMenu="handleMenu">
        <modal-change-cover :card="card" :listId="listId"></modal-change-cover>
      </popup-container>

      <popup-container :header="'Labels'" v-if="popupToShow === 'LABELS'" @handleMenu="handleMenu">
        <modal-edit-labels
          :card="card"
          :listId="listId"
          @handleMenu="handleMenu"
        ></modal-edit-labels>
      </popup-container>

      <popup-container
      :header="'Members'"
        v-if="popupToShow === 'MEMBERS'"
        @handleMenu="handleMenu"
      >
        <modal-change-members
          :card="card"
          :listId="listId"
          @handleMenu="handleMenu"
        ></modal-change-members>
      </popup-container>

      <popup-container v-if="popupToShow === 'MOVE'" :header="'Move card'" @handleMenu="handleMenu">
        <modal-move
        
          :card="card"
          :listId="listId"
          @handleMenu="handleMenu"
        ></modal-move>
      </popup-container>

      <popup-container v-if="popupToShow === 'DATES'" :header="'Dates'" @handleMenu="handleMenu">
        <modal-edit-dates
        
          :card="card"
          :listId="listId"
          @handleMenu="handleMenu"
        ></modal-edit-dates>
      </popup-container>
    </section>
  </section>
</template>

<script>
import popupContainer from './../popup-container.vue';
import quickEditorInput from './quick-editor-input.vue';
import ModalChangeCover from './modal-change-cover.vue';
import ModalChangeMembers from './modal-change-members.vue';
import ModalEditLabels from './modal-edit-labels.vue';
import ModalMove from './modal-move.vue';
import ModalEditDates from './modal-edit-dates.vue';

export default {
  props: ['card', 'listId'],
  components: {
    popupContainer,
    quickEditorInput,
    ModalChangeCover,
    ModalEditLabels,
    ModalChangeMembers,
    ModalMove,
    ModalEditDates,
  },
  data() {
    return {
      popupToShow: null,
      loaded: false,
      // offPage:true
      offPage: false,
      rect: null,
      isOffPageBottom: false,
      isOffPageRight: false,
    };
  },

  watch: {
    card: function (newVal, oldVal) {
      this.handlePosition();
    },
  },

  methods: {
    handleMenu(val) {
      console.log(val);
      // this.$emit('handleMenu', val);
      this.popupToShow = val;
    },
    copyCard() {
      const cardToSave = JSON.parse(JSON.stringify(this.card));
      cardToSave.activities = [];
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
        this.loaded = false;
      }, 200); //animation time
    },
    handlePosition() {
      this.rect = document
        .querySelector('.quick-editor-menu-container')
        .getBoundingClientRect();
      //   console.log(this.rect);
      this.isOffPageBottom =
        this.rect.bottom > document.querySelector('.screen').offsetHeight
          ? true
          : false;
      //   this.rect.bottom > window.innerHeight ? true : false;
      this.isOffPageRight =
        this.rect.right > document.querySelector('.screen').offsetWidth
          ? true
          : false;
      this.loaded = true;
    },
  },

  computed: {
    styles() {
      // const isOut = this.rect.bottom > window.offsetHeight ? true : false;
      return {
        // 'off-page-bottom': isOut,
        // 'off-page-right': isOut,
        'off-page-bottom': this.isOffPageBottom,
        'off-page-right': this.isOffPageRight,
        loaded: this.loaded,
      };
    },
  },
  mounted() {
    this.handlePosition();
  },
};
</script>

<style></style>
