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
      <!-- {{card.title}} -->
      <!-- {{currCard.card.title}} -->

      <textarea-autosize
        ref="textarea2"
        id="textarea2"
        @change.native="saveCard"
        v-model="card.title"
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
      this.$store.dispatch({
        type: 'saveCard',
        card: this.card,
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
      // this.$refs.textarea2.select()
    },
  },

  mounted() {
    // this.$refs.content.style.top = this.$store.getters.screenState.pos.y
    // console.log(this.pos.x);
    // this.$refs.content.style.left = `${this.pos.y}`
    // console.log(this.pos.y);
  },
  created() {
    //   console.log('hi');
    //   this.card = this.$store.getters.screenState.card
    //   this.pos = this.$store.getters.screenState.pos
    //   console.log(this.pos);
  },
};
</script>

<style></style>
