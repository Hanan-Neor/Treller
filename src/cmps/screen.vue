<template>
  <div @click="toggleScreen" class="screen" :class="screenDisplay">
    <!-- <div ref="content" class="contenty" style="background-color:#fff;position:fixed" > -->
    <div
      ref="content"
      class="contenty"
      style="background-color:#fff;position:fixed"
    >
      CHECKING
      <!-- <span  v-if="card"> -->
      <!-- {{card.title}} -->
      <!-- {{cardToShow}} -->

      <!-- </span> -->
    </div>
  </div>
</template>

<script>
export default {
    // props:['card'],
data(){
    return{
        card:null,
        // pos:{
        //     x:100,
        //     y:100
        // }
    }
},

 watch: {
    '$route.params.cardId': {
      immediate: true,
      async handler() {
        const { cardId } = this.$route.params;
        try {
          const card = await borderService.getById(cardId);
          this.card = card;
        } catch (error) {
          console.log('cannot get card', error);
        }
      },
    },
  },
//  watch: {
//     card: function(newVal, oldVal) {
//       this.card = card;
//       // if (!showInput) return;
//       // document.getElementById("list-input").focus();
//     },
//   },
    methods: {
    toggleScreen() {
      this.$store.dispatch({ type: "toggleScreen" });
    },
  },

    computed: {
        // cardToShow(){
        //     return this.$store.getters.screenState.card.title
        // },
        // positionX(){
        //     return{

        //         top:this.$store.getters.screenState.pos.x,
        //     }
        // },
        // positionY(){
        //     return{
        //         left:this.$store.getters.screenState.pos.y
        //     }
        // },
    screenState() {
      // console.log(this.$store.getters.menuState);
      return this.$store.getters.screenState.showScreen;
    },
    screenDisplay() {
      return {
        show: this.screenState,
        hide: !this.screenState,
      };
    },
  },

  mounted(){
    // this.$refs.content.style.top = this.$store.getters.screenState.pos.y
    // console.log(this.pos.x);
    // this.$refs.content.style.left = `${this.pos.y}`
    // console.log(this.pos.y);
  },
  created(){
    //   this.card = this.$store.getters.screenState.card
    //   this.pos = this.$store.getters.screenState.pos
    //   console.log(this.pos);
  }

}
</script>

<style></style>
