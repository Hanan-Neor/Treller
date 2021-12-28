<template>
  <section class="board-menu-buttons">
    <div class="flex" style="gap:8px" @click="showBackground"><div :style="styles" style="width:20px; height:20px; border-radius:3px"></div>Change background</div>
    <div class="flex" style="gap:8px"><div style="width:20px; text-align:center"><font-awesome-icon icon="search"/></div> Search cards</div>
    <!-- <div class=""><font-awesome-icon icon="search" width="20px" :style="{ color: 'red', background: 'blue', width:'20px', height:'20px' }"/> Search cards</div> -->
    <div class="flex" @click.self="toggleDeletePopup" style="position: relative; gap:8px">
     <div style="width:20px; text-align:center"><font-awesome-icon :icon="['far', 'trash-alt']" /></div> Remove board
      <div
        v-if="deletePopup"
        style="
          position: absolute;
          background-color: #fff;
          padding: 1rem;
          width: 200px;
        "
      >
        Are you sure?
        <div class="flex justify-between">
          <button
            @click="
              removeBoard();
              toggleDeletePopup();
            "
            style="background-color: red; color: #fff; cursor: pointer"
          >
            Delete
          </button>
          <button @click="toggleDeletePopup" style="cursor: pointer">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['board'],
  data() {
    return {
      deletePopup: false,
    };
  },
  methods: {
    showBackground() {
      this.$store.dispatch({ type: 'setMenuSection', section: 'BACKGROUND' });
      // document.querySelector('.board-menu-content-background').style.display = 'block';
      document.querySelector('.board-menu-content-background').classList.add('show');
      document.querySelector('.board-menu-content-main').style.display = 'none';
    },
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
    toggleDeletePopup() {
      this.deletePopup = !this.deletePopup;
    },
    toggleMenu() {
      this.$emit('toggleMenu');
    },
  },
  computed:{
    styles(){
      return{
        background: (this.$store.getters.board)? this.boardBackground : '#fff'
      }
    },
    boardBackground(){
      return this.$store.getters.board.style.bgColor
    }
  }
};
</script>

<style></style>
