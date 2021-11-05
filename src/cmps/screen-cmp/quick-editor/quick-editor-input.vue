<template>
  <section class="quick-editor-input">
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
    <button class="save-button" @click="handleEnter">Save</button>
  </section>
</template>

<script>
export default {
  props: ['card', 'listId'],
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
      // setTimeout(() => {
      //   this.$store.dispatch({ type: 'saveBoard' });
      // }, 100);
      this.$nextTick(function () {
        this.$store.dispatch({ type: 'saveBoard' });
      });
    },
  },
};
</script>

<style></style>
