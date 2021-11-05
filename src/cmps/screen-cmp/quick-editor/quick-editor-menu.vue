<template>
  <section class="quick-editor-menu flex column" :class="styles"  style="">
    <button class="trello-button">Open card</button>
    <button class="trello-button">Edit labels</button>
    <button class="trello-button">Change members</button>
    <button class="trello-button">Change cover</button>
    <button class="trello-button">Move</button>
    <button class="trello-button">Copy</button>
    <button class="trello-button">Edit dates</button>
    <button @click="deleteCard" class="trello-button">Delete</button>
    <!-- {{ card.title }} -->
  </section>
</template>

<script>
export default {
  props: ['card', 'listId'],
  data() {
    return {
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
      this.rect = this.$el.getBoundingClientRect();
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
      //   console.log(this.rect.bottom);
      //   console.log(this.isOffPageBottom);
    },
  },

  methods: {
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
        this.loaded = false;
      }, 200); //animation time
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
        'loaded' : this.loaded
      };
    },
  },
  mounted() {
    // console.log(this.$el.offsetHeight);
    // this.rect = +JSON.parse(JSON.stringify(this.$el.getBoundingClientRect()));
    // console.log(this.rect);
  },
};
</script>

<style></style>
