<template>
  <!-- <section class="create-board-modal"  @mousedown.stop=""> -->
  <section class="create-board-modal">
    <div class="modal-container">
      <div class="input-preview-container">
        <input type="text" v-model="title" class="modal-input basic-input" placeholder="Add board title" />
      </div>
      <div class="background-picker">
        <input type="color" v-model="bgColor" value="#ffffff"/>
      </div>
      <div class="buttons">
        <button @click="addBoard" class="trello-button">Create board</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: null,
      bgColor: "#ffffff",
    };
  },
  methods: {
    async addBoard() {
      if(!this.title) return
      this.$emit('toggleScreen');
      const newBoard = await this.$store.dispatch({
        type: 'addBoard',
        title: this.title,
        bgColor: this.bgColor,
      });
      this.$router.push('/board/' + newBoard._id);
      this.title='';
      this.bgColor = "#fff"
    },
  },
  mounted(){
  }
};
</script>

<style></style>
