<template>
  <section :id="list.id" class="board-list" :style="reduceHeight">
    <!-- <draggable  @start="drag = true" @end="onEnd" animation=150 style="display:flex;gap: 8px;"> -->

    <div class="board-list-content" style="background-color: #ebecf0">
      <list-header :listId="list.id" :title="list.title"></list-header>
      <!-- <list-cards :cards="list.cards" :cardComposerState="cardComposerState" @hideCardComposerInput="cardComposerState = false"></list-cards> -->
      <list-cards
        :listId="list.id"
        :cards="list.cards"
        :cardComposerState="cardComposerState"
        @hideCardComposerInput="hideCardComposerInput"
      ></list-cards>
      <div @click="toggleCardComposer">
        <card-composer-button
          :cardComposerState="cardComposerState"
        ></card-composer-button>
      </div>
      <!-- <div  @click="toggleCardComposer">hhhhhh</div> -->
    </div>
    <!-- </draggable> -->
  </section>
</template>

<script>
import CardComposerButton from './card-composer-button.vue';
import ListCards from './list-cards.vue';
import listHeader from './list-header.vue';
export default {
  props: ['list'],

  data() {
    return {
      cardComposerState: false,
      new: null,
      height: null,
      rect: null,
    };
  },
  // watch: {
  //   list: function (newVal, oldVal) {
  //     console.log(newVal);
  //     this.new = newVal
  //   },
  // },
  watch: {
    checkHeight(newVal, oldVal) {
      console.log(newVal);
      this.new = newVal;
    },
  },
  methods: {
    hideCardComposerInput() {
      this.cardComposerState = !this.cardComposerState;
    },
    toggleCardComposer() {
      this.cardComposerState = !this.cardComposerState;
    },
  },
  computed: {
    reduceHeight() {},

    checkHeight() {
      // const y = document.getElementById(this.listId).getBoundingClientRect()
      // return y
      // return this.$el.offsetHeight;
      //  return this.$el.getBoundingClientRect()
      // return (this.$el.offsetY + this.$el.offsetHeight)
    },
  },
  // updated() {
  //   const height = this.$el.firstChild.offsetHeight;
  //   if (height > document.querySelector('.board-content').clientHeight - 8) {
  //     this.$el.style.height = 'unset';
  //   } else {
  //     this.$el.style.height = 'fit-content';
  //   }
  // },
  mounted() {
  //   const height = this.$el.firstChild.offsetHeight;
  //   if (height > document.querySelector('.board-content').clientHeight - 8) {
  //     this.$el.style.height = 'unset';
  //   } else {
  //     this.$el.style.height = 'fit-content';
  //   }



  
  },

  components: { listHeader, ListCards, CardComposerButton },
};
</script>

<style></style>
