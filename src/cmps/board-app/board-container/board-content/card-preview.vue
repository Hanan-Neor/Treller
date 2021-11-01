<template>
  <section class="card-preview">
    <router-link :to="'/board/' + card.id">

    <!-- <div class="flex justify-between" style="position:relative"> -->
    <div class="" style="position:relative">
      <!-- <div> -->

      {{ card.title }}
      <!-- </div> -->
      <div
        @click="toggleScreen"
        class="edit-icon"
        ref="edit"
        style="display:none; position:absolute;right:-4px;top:-4px;border-radius: 3px;padding: 4px;"
      >
        🖍
      </div>
    </div>
    <!-- <button>Edit</button>
      <button>Delete</button> -->
      </router-link>
  </section>
</template>

<script>
export default {
  props: ["card"],

  methods: {
    toggleScreen(card=this.card , pos=this.cardPosition) {
      this.$store.dispatch({ type: "toggleScreen",card, pos });
    
    },
  },

    computed:{
cardPosition(){
  const rect = this.$el.getBoundingClientRect()
return{
  //  x : this.$el.clientX ,
  // y : this.$el.clientY
  //  x : this.$el.offsetLeft ,
  // y : this.$el.offsetTop
  x:rect.left,
  y:rect.top
}

}
    },
  mounted(){
    this.$el.onmouseover = () =>{
      this.$refs.edit.style.display ='block'
        // alert('hi')
    }
    this.$el.onmouseout = () =>{
      this.$refs.edit.style.display ='none'
        // alert('hi')
    }
  },
};
</script>

<style></style>
