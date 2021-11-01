<template>
  <section class="board-list" style="">
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
import CardComposerButton from "./card-composer-button.vue";
import ListCards from "./list-cards.vue";
import listHeader from "./list-header.vue";
export default {
  props: ["list"],

  data() {
    return {
      cardComposerState: false,
    };
  },
  methods: {
    hideCardComposerInput() {
      // this.cardComposerState = false;
      this.cardComposerState = !this.cardComposerState;

      // alert('hi board-list')
    },
    // toggleCardComposer(){
    //   this.$store.dispatch({type:'toggleCardComposer'})
    // }
    toggleCardComposer() {
      // alert('hi')
      // console.log(this.cardComposerState);
      this.cardComposerState = !this.cardComposerState;
    },
  },

  components: { listHeader, ListCards, CardComposerButton },
};
</script>

<style></style>
