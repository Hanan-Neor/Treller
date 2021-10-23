<template>
  <section class="board-header flex" style="justify-content:space-between; background-color: #0079bf; padding:4px">
    <div class="column-left flex">
      <!-- <button class="trello-button">Board</button> -->
      <button class="trello-button">Starting - (board name)</button>
      <button class="trello-button">⭐</button>
      <!-- <button class="trello-button">Hanan workspace</button> -->
      <!-- <button class="trello-button">Private</button> -->
      <button class="trello-button">HN - (Participants pics)</button>
      <button class="trello-button">Invite</button>
    </div>
    <div class="column-right flex">
      <button class="trello-button">Statistics</button>
      <button class="trello-button" v-if="!menuState" @click="toggleMenu">Show menu</button>
    </div>
  </section>
</template>

<script>
export default {

  methods:{
    toggleMenu(){
      this.$store.dispatch({type:'toggleMenu'})
    }
  },
    computed:{
    menuState(){
      // console.log(this.$store.getters.menuState);
      return this.$store.getters.menuState
    }
  }

};
</script>

<style>
</style>