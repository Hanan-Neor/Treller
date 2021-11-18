<template>
  <section class="content-description-input">
    <textarea-autosize
      v-model="cardDescription"
      class="description-textarea"
      dir="auto"
      autofocus
      @blur.native="addDescription"
      placeholder="Add a more detailed description..."
      rows="3"
      style="
        overflow: hidden;
        overflow-wrap: break-word;
        resize: none;
        width: 100%;

      "
    ></textarea-autosize>
              <!-- border-radius: 3px;
      box-shadow: inset 0 0 0 2px #0079bf; -->
  </section>
</template>

<script>
export default {
  props: ['card'],
  data() {
    return {
      cardDescription: this.card.description,
    };
  },
  methods: {
    addDescription() {
        // const card = this.cardDescription
      this.$emit('addDescription', this.cardDescription);
    },
  },
  mounted(){
    document.querySelector('.description-textarea').select();
  }
  
};
</script>

<style></style>
