<template>
  <section class="board-menu-buttons">
    <div class="" >Change background</div>
    <div class="">Search cards</div>
    <div class="" @click.self="toggleDeletePopup"  style="position:relative">
      Remove board
      <div v-if="deletePopup" style="position:absolute;background-color:#fff;padding:1rem; width:200px">Are you sure?
        <div class="flex justify-between">
        <button @click="removeBoard();toggleDeletePopup()" style="background-color:red;color:#fff;cursor:pointer">Delete</button>
        <button @click="toggleDeletePopup" style="cursor:pointer">Cancel</button>
        </div>
      </div>
      </div>
  </section>
</template>

<script>
export default {
  props: ['board'],
  data(){
    return{
      deletePopup:false
    }
  },
  methods: {
    async removeBoard() {
      // this.$router.push('/'); //  ?
      this.toggleMenu();
      await this.$store.dispatch({
        type: 'removeBoard',
        boardId: this.board._id,
      });
      // setTimeout(()=>{
      this.$store.getters.board
        ? this.$router.push('/board/' + this.$store.getters.board._id)
        : this.$router.push('/');

      // },1000)
    },
    toggleDeletePopup(){
      this.deletePopup = !this.deletePopup
    },
    toggleMenu() {
      this.$emit('toggleMenu');
    },
  },
};
</script>

<style></style>
