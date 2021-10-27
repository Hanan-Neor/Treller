<template>
  <!-- <section v-if="cardComposerState" class="card-composer-input"> -->
  <section  class="card-composer-input">
    <!-- <form> -->
    <textarea
      @keyup.enter="addCard"
    v-model="cardTitle"
      class="textarea1"
      dir="auto"
      placeholder="Enter a title for this card…"
        rows="3"
      style="
        overflow: hidden;
        overflow-wrap: break-word;
        resize: none;
        width: 100%;
      "
    ></textarea>
    <!-- </form> -->
    <div class="compose-input-buttons flex justify-between">
      <div class="left-side">
        <button class="compose-add-button" @click="addCard">Add card</button>
        <button class="compose-cancel-button" @click="hideCardComposerInput">⨉</button>
      </div>
      <div><button>...</button></div>
    </div>
  </section>
</template>

<script>
import {boardService} from './../../../../services/board.service'
export default {
  props: ["cardComposerState","listId"],
  data(){
    return{
      // element:false
      // created:false
      cardTitle:null,
    }
  },

  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.$emit("hideCardComposerInput");
      }
    },
    addCard(){
      document.querySelector(".textarea1").focus()

      if (!this.cardTitle)return
      // console.log(this.cardTitle)
      let newCard = boardService.getEmptyCard()
      newCard.title = this.cardTitle
      newCard.createdAt = Date.now()
      // console.log(newCard);
      this.$store.dispatch({ type: "addCard" ,newCard, listId: this.listId });

            setTimeout(()=>{
        // dispatch({type:'saveBoard'})
      this.$store.dispatch({type:'saveBoard'})

      },2000)
      this.cardTitle = null;
      // document.querySelector(".textarea1").focus()



    },
    hideCardComposerInput() {
      this.$emit("hideCardComposerInput");
    },
  },
  mounted() {
    document.querySelector(".textarea1").focus()
    // document.addEventListener("mousedown", this.close);
    document.addEventListener("mouseup", this.close);
  },
  beforeDestroy() {
    // document.removeEventListener("mousedown", this.close);
    document.removeEventListener("mouseup", this.close);
  },
  created(){

  },
 
};
</script>