<template>
  <!-- <section v-if="card.description" class="content-description"> -->
  <section class="content-description">
    <h3>description</h3>

    <content-description-input
      v-if="!card.description || isInput"
      :card="card"
      @addDescription="addDescription"
    ></content-description-input>
    <div v-else @click="toggleDescription">
      <content-descriptuon-button :card="card"></content-descriptuon-button>
    </div>
  </section>
</template>

<script>
import ContentDescriptionInput from './content-description-input.vue';
import contentDescriptuonButton from './content-descriptuon-button.vue';
export default {
  components: { contentDescriptuonButton, ContentDescriptionInput },
  props: ['card', 'listId'],
  data() {
    return {
      cardDescription: this.card.description,
      isInput: false,
    };
  },
  methods: {
    toggleDescription() {
      this.isInput = !this.isInput;
    },
    handleEnter() {},
    addDescription(cardDescription) {
      // if(this.cardDescription === this.card.description) {
      // this.cardDescription = null
      //   return
      // }
      // alert('hi');
      this.toggleDescription();
      const cardToSave = this.card;
      cardToSave.description = cardDescription;
      this.$store.dispatch({
        type: 'saveCard',
        card: cardToSave,
        listId: this.listId,
      });
      // setTimeout(() => {
      //   this.$store.dispatch({ type: 'saveBoard' });
      // }, 100);
      this.$nextTick(function () {
        this.$store.dispatch({ type: 'saveBoard' });
        // this.$store.dispatch({})
      });
    },
  },
};
</script>
