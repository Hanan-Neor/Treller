<template>
  <section class="quick-editor-menu flex column" :class="styles" style="">
    <button
      class="trello-button"
      @click="
        () => {
          this.$store.dispatch({ type: 'openCardDetails' });
        }
      "
    >
      Open card
    </button>
    <button @click="handleMenu()" class="trello-button">Edit labels</button>
    <button @click="handleMenu()" class="trello-button">Change members</button>
    <button @click="handleMenu('COVER')" class="trello-button">Change cover</button>
    <button @click="handleMenu()" class="trello-button">Move</button>
    <button @click="handleMenu()" class="trello-button">Copy</button>
    <button @click="handleMenu()" class="trello-button">Edit dates</button>
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
      this.handlePosition();
    },
  },

  methods: {
    handleMenu(val){
      console.log(val);
      this.$emit('handleMenu',val)
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
        this.loaded = false;
      }, 200); //animation time
    },
    handlePosition() {
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
