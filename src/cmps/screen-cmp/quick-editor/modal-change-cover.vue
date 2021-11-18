<template>
  <section class="modal-change-cover" style="padding: 0.75rem">
    <colors v-model="coverColor" @input="changeCardCover"></colors>
    {{ coverColor }}
  </section>
</template>

<script>
import colors from './cover-cmps/colors.vue';
export default {
  props: ['card', 'listId'],
  data() {
    return {
      coverColor: null,
      // coverColor: this.card.style.bgColor,
    };
  },
  methods: {
    changeCardCover() {
      // alert('hi')
      const cardToSave = this.card;
      cardToSave.style.bgColor = this.coverColor;
      this.$store.dispatch({
        type: 'saveCard',
        card: cardToSave,
        listId: this.listId,
      });

      this.$nextTick(function () {
        this.$store.dispatch({ type: 'saveBoard' });
      });
    },
  },
  components: {
    colors,
  },
};
</script>

<style></style>
