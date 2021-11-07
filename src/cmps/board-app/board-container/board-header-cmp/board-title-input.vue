<template>
      <autosize-input
      id="board-title-input"
      ref="input"
      type="text"
      
      v-model="titleToEdit"
      @blur="closeEditor"
    />

</template>

<script>
import AutosizeInput from 'vue-autosize-input';

export default {
    props:['title'],
    data(){
        return{
            titleToEdit:null

        }
    },
    methods:{
        closeEditor(){
            this.$emit('closeEditor' , this.titleToEdit)
        }
    },
  components: {
    AutosizeInput,
  },
  created(){
      this.titleToEdit = this.title
  }

}
</script>

<style>

</style>