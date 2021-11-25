<template>
  <section class="quick-editor-input">
    <section
      style="background-color: #fff; border-radius: 3px; margin-bottom: 1rem"
    >
      <card-preview-header
        :card="card"
        style=""
        v-if="card.style.bgColor"
      ></card-preview-header>

      <card-content-labels
        :card="card"
        style="margin-left: 8px; padding-top: 6px"
      ></card-content-labels>

      <!-- value="card.title" -->
      <textarea-autosize
        ref="textarea2"
        id="textarea2"
        v-model="titleToShow"
        @keydown.enter.prevent.native="handleEnter"
        class="textarea2"
        dir="auto"
        placeholder="Enter a title for this card…"
        rows="3"
        style="
          overflow: hidden;
          overflow-wrap: break-word;
          resize: none;
          width: 100%;
        "
      ></textarea-autosize>
      <!-- :max-height="400" -->
      <!-- <card-content-badges :card="card"></card-content-badges> -->

      <div class="flex justify-between" style="padding:0 8px 6px">
        <card-content-badges :card="card"></card-content-badges>
        <card-content-members :card="card"></card-content-members>
      </div>
    </section>
    <button class="save-button" @click="handleEnter">Save</button>
  </section>
</template>

<script>
import cardContentMembers from './../../board-app/board-container/board-content/card-preview-cmps/card-content-members.vue';
import cardContentBadges from './../../board-app/board-container/board-content/card-preview-cmps/card-content-badges.vue';
import cardContentLabels from './../../board-app/board-container/board-content/card-preview-cmps/card-content-labels.vue';
import cardPreviewHeader from './../../board-app/board-container/board-content/card-preview-cmps/card-preview-header.vue';

export default {
  props: ['card', 'listId'],
  components: {
    cardContentMembers,
    cardContentBadges,
    cardContentLabels,
    cardPreviewHeader,
  },

  data() {
    return {
      titleToShow: null,
    };
  },

  watch: {
    card: function (newVal, oldVal) {
      this.titleToShow = this.card.title;
      this.$nextTick(function () {
        document.querySelector('.textarea2').select();
      });
    },
  },

  methods: {
    toggleScreen() {
      this.$store.dispatch({ type: 'toggleScreen' });
      setTimeout(() => {
        this.$store.dispatch({ type: 'resetCurrCard' });
      }, 200); //animation time
    },

    handleEnter() {
      this.saveCard();
      this.toggleScreen();
      document.querySelector('.textarea2').blur();
    },

    saveCard() {
      // this.$store.getters.boards.then((boards)=>{
      //     console.log(boards[0]);
      // })
      const cardToSave = this.card;
      cardToSave.title = this.titleToShow;
      this.$store.dispatch({
        type: 'saveCard',
        card: cardToSave,
        listId: this.listId,
      });
        this.$store.dispatch({ type: 'updateActCardTitle',card:cardToSave});

      
      // setTimeout(() => {
      //   this.$store.dispatch({ type: 'saveBoard' });
      // }, 100);
      this.$nextTick(function () {
        this.$store.dispatch({ type: 'saveBoard' });
      });
    },
  },
  mounted() {
    document.querySelector('.textarea2').select();
  },
  created() {
    this.titleToShow = this.card.title;

    this.$nextTick(function () {
      document.querySelector('.textarea2').select();
    });
  },
};
</script>

<style></style>
