<template>
  <section id="card" class="card-preview" ref="check">
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
      // console.log(
      //   document.querySelector(`.list-cards.${this.listId}`).scrollTop
      // );
      // console.log(document.querySelector(`.board-content`).scrollLeft);
      const rect = this.$el.getBoundingClientRect();
      const pos = {
        x: rect.left,
        y: rect.top,
      };
      const card = this.card;
      const listId = this.listId;
      const elWidth = this.$el.offsetWidth;
      this.$store.dispatch({ type: 'setCurrCard', card, pos, listId, elWidth });
      // await this.$store.dispatch({type:"setCurrCard", card,pos})
      this.$store.dispatch({ type: 'toggleScreen' });
    },
  },

  computed: {},
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
