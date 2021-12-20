<template>
  <section class="app-header flex">
    <div class="column-left flex">
      <!-- <button class="trello-button">...</button> -->
      <button class="trello-button">home</button>
      <boards-menu-button :boards="boards"></boards-menu-button>

      <!-- <router-link v-for="board in boards" :to="'/board/' + board._id" :key="board._id">
        <button class="trello-button">{{board.title}}</button></router-link
      > -->

      <!-- <router-link :to="'/board/' + boards[0]._id">
        <button class="trello-button">{{boards[0].title}}</button></router-link
      >
      <router-link :to="'/board/' + boards[1]._id">
        <button class="trello-button">{{boards[1].title}}</button></router-link
      > -->

      <!-- <input type="text" placeholder="Jump to...">  -->
    </div>
    <div class="column-center">
      <div>TRELLER</div>
    </div>
    <div class="column-right flex">
      <!-- <button class="trello-button">!</button> -->
      <create-button></create-button>
      <button class="trello-button">🔔</button>
      <div class="flex">
        <img style="height: 28px;width:auto;border-radius:3rem;" v-if="loggedinUser" :src="loggedinUser.imgUrl" />
        <div v-else style="height: 28px; width:28px; border-radius:3rem; background-color:#fff"></div>
      </div>
    </div>
  </section>
</template>

<script>
import boardsMenuButton from './app-header-cmps/boards-menu-button.vue';
import CreateButton from './app-header-cmps/create-button.vue';
export default {
  data() {
    return {
      boards: null,
      loggedinUser: null,
      // loggedinUser: this.$store.getters.loggedinUser,

    };
  },

  watch: {
    boardsFromStore(newVal, oldVal) {
      // console.log(newVal);
      this.boards = newVal;
    },
    loggedinUserFromStore(newVal){
      this.loggedinUser = newVal
      console.log(newVal);
    }

  },
  methods: {
  },

  computed: {
    boardsFromStore() {
      return this.$store.getters.boards;
    },
    loggedinUserFromStore(){
      return this.$store.getters.loggedinUser
    }
  },
// created(){
//   // setTimeout(()=>{
// this.loggedinUser = this.loggedinUserFromStore
//     console.log(this.$store.getters.loggedinUser);
//   // },10000)
// },

  // created() {
  //   // this.$nextTick(() => {
  //   setTimeout(() => {
  //     this.boards = this.$store.getters.boards;
  //   }, 1000);
  //   // });
  // },
  components: {
    boardsMenuButton,
    CreateButton,
  },
};
</script>

