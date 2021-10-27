<template>
  <section v-if="!cardComposerState" class="card-composer-button">
    <!-- <div @click="toggleCardComposer">+ Add a card</div> -->
    <div>+ Add a card</div>
  </section>
</template>

<script>
export default {
props:["cardComposerState"],
  // data(){
  //   return{
  //       cardComposerState:false
  //   }
  // },
  methods: {
    // toggleCardComposer(){
    //   this.$store.dispatch({type:'toggleCardComposer'})
    // }
    // toggleCardComposer(){
    //   this.cardComposerState = !this.cardComposerState
    // }
  },
  computed:{
    // cardComposerState(){
    //   return this.$store.getters.cardComposerState
    // }

  }
};
</script>

<style>
</style>