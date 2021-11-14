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
    close(e) {
      if (!this.$el.contains(e.target)) {
        // this.$emit('resetPopup');
        this.$emit('handleMenu' , null);
      }
    },

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
  mounted() {
    document.addEventListener('mousedown', this.close);
  },
  beforeDestroy() {
    document.removeEventListener('mousedown', this.close);
  },

  components: {
    colors,
  },
};
</script>

<style></style>
