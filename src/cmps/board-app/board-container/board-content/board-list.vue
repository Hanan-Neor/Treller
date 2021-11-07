<template>
  <section id="board" class="board-list" :style="reduceHeight">
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
      new:null,
      height:null,
    };
  },
  // watch: {
  //   list: function (newVal, oldVal) {
  //     console.log(newVal);
  //     this.new = newVal
  //   },
  // },
  // watch: {
  //   checkHeight(newVal, oldVal) {
  //     console.log(newVal);
  //     this.new = newVal
  //   },
  // },
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
    // checkHeight(){
    //   let height = this.$el.offsetHeight
    //   return{
    //     height
    //   }
    // }
  },
  mounted() {
    // console.log(this.$el);
    // this.height = this.checkHeight

    // console.log('hi board');
    // setTimeout(()=>{

      // console.log(this.list);
    // },2000)
  },

  components: { listHeader, ListCards, CardComposerButton },
};
</script>

<style></style>
