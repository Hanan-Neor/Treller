<template>
  <div @mousedown="toggleScreen" class="screen" :class="screenDisplay">
    <!-- <div ref="content" class="contenty" style="background-color:#fff;position:fixed" > -->
    <!-- <div style="position:relative; width:100%;height:100%"> -->
    <div
      ref="content"
      class="screen-content"
      style=""
      :style="position"
      @mousedown.stop=""
    >
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
      <!-- <div>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</div> -->
      <button class="save-button" @click="handleEnter">Save</button>
      <button @click="deleteCard">DELETE</button>
      <!-- <div @click="blur">hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</div> -->
      <!-- {{listId}} -->
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  // props:['card'],
  data() {
    return {
      titleToShow: null,
      card: null,
      pos: {
        x: 100,
        y: 100,
      },
      width: null,
      listId: null,
    };
  },

  methods: {
    handleEnter() {
      this.saveCard();
      this.toggleScreen();
      document.querySelector('.textarea2').blur();
    },
    deleteCard() {
      this.$store.dispatch({
        type: 'removeCard',
        cardId: this.card.id,
        listId: this.listId,
      });
      setTimeout(() => {
        this.$store.dispatch({ type: 'saveBoard' });
      }, 100);
      this.toggleScreen();
    },
    toggleScreen() {
      this.$store.dispatch({ type: 'toggleScreen' });
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
      setTimeout(() => {
        this.$store.dispatch({ type: 'saveBoard' });
      }, 100);
    },
  },

  computed: {
    currCard() {
      return this.$store.getters.currCard;
    },
    position() {
      return {
        // top:'100px',
        // left:'200px'
        top: this.pos.y + 'px',
        left: this.pos.x + 'px',
        width: this.width + 'px',
      };
    },
    screenState() {
      // console.log(this.$store.getters.menuState);
      return this.$store.getters.screenState;
    },
    screenDisplay() {
      return {
        show: this.screenState,
        hide: !this.screenState,
      };
    },
  },

  watch: {
    currCard(newVal, oldVal) {
      //  console.log(newVal);
      this.card = newVal.card;
      this.pos.x = newVal.pos.x;
      this.pos.y = newVal.pos.y;
      this.width = newVal.width;
      this.listId = newVal.listId;
      this.titleToShow = newVal.card.title;
      // document.querySelector('.textarea2').innerText = newVal.card.title;
      setTimeout(() => {
        document.querySelector('.textarea2').select();
      }, 100);
    },
  },

  mounted() {},
  created() {},
};
</script>

<style></style>
