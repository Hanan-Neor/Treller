<template>
  <section class="card-preview">
    <div class="" style="position: relative">
      {{ card.title }}
      <div
        @click="toggleScreen"
        class="edit-icon"
        ref="edit"
        style="
          display: none;
          position: absolute;
          right: -4px;
          top: -4px;
          border-radius: 3px;
          padding: 4px;
        "
      >
        🖍
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['card', 'listId'],

  methods: {
    toggleScreen() {
      //  async toggleScreen() {
      const card = this.card;
      const pos = this.cardPosition;
      const listId = this.listId;
      const elWidth = this.$el.offsetWidth;
      this.$store.dispatch({ type: 'setCurrCard', card, pos, listId, elWidth });
      // await this.$store.dispatch({type:"setCurrCard", card,pos})
      this.$store.dispatch({ type: 'toggleScreen' });
    },
  },

  computed: {
    cardPosition() {
      const rect = this.$el.getBoundingClientRect();
      return {
        //  x : this.$el.clientX ,
        // y : this.$el.clientY
        //  x : this.$el.offsetLeft ,
        // y : this.$el.offsetTop
        x: rect.left,
        y: rect.top,
      };
    },
  },
  mounted() {
    this.$el.onmouseover = () => {
      this.$refs.edit.style.display = 'block';
      // alert('hi')
    };
    this.$el.onmouseout = () => {
      this.$refs.edit.style.display = 'none';
      // alert('hi')
    };
  },
};
</script>

<style></style>
