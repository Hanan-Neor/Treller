<template>
  <section @click="openCardDetails" id="card" class="card-preview" ref="check" style="position:relative">
    <card-preview-header :card="card" v-if="card.style.bgColor"></card-preview-header>
    <card-preview-content :card="card"></card-preview-content>
    <!-- <div class="" style="position: relative">
      {{ card.title }} -->
      <div
        @click.stop="toggleScreen"
        class="edit-icon"
        ref="edit"
        style="
    
        "
      >
          <!-- height:28px;
          width:28px; -->
        🖍
      </div>
    <!-- </div> -->
  </section>
</template>

<script>
import CardPreviewContent from './card-preview-cmps/card-preview-content.vue';
import cardPreviewHeader from './card-preview-cmps/card-preview-header.vue';
export default {
  components: { cardPreviewHeader, CardPreviewContent },
  props: ['card', 'listId'],

  methods: {
    toggleScreen() {
      const rect = this.$el.getBoundingClientRect();
      const pos = {
        x: rect.left,
        y: rect.top,
      };
      const card = this.card;
      const listId = this.listId;
      const elWidth = this.$el.offsetWidth;
      this.$store.dispatch({ type: 'setCurrCard', card, pos, listId, elWidth });
      this.$store.dispatch({ type: 'openCardQuickEditor' });
      // setTimeout(() => {
      // this.$nextTick(() => {
        this.$store.dispatch({ type: 'toggleScreen' });
      // });
      // },500);
    },

    openCardDetails() {
      // this.toggleScreen()

      this.$store.dispatch({
        type: 'setCurrCard',
        card:this.card,
        pos: this.pos,
        listId: this.listId,
        elWidth: this.$el.offsetWidth,
      });
      this.$store.dispatch({ type: 'openCardDetails' });
      // this.$nextTick(() => {
        this.$store.dispatch({ type: 'toggleScreen' });
      // });

      // this.$store.dispatch({ type: 'toggleScreen' });
      const route =
        '/board/' + this.$store.getters.board._id + '/' + this.card.id;
      // console.log('params', this.$route.params);
      if (this.card.id === this.$route.params.cardId) return;
      this.$router.push(route);
      // this.$router.push('/board/'+ this.$store.getters.board._id +'/' + this.card.id )
      //  this.$router.push('/board/' + this.$store.getters.board._id)
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
