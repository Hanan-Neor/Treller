<template>
  <section v-if="card" class="screen-content" :style="position">
    <!-- <section v-if="displayed" class="screen-content" :style="position"> -->
      
    <quick-editor  :card="card" :listId="listId"></quick-editor>
    <modal-open-card></modal-open-card>
  </section>
</template>

<script>
import QuickEditor from './quick-editor.vue';
import modalOpenCard from './modal-open-card.vue';
export default {
  // props: ['card', 'listId'],
  data() {
    return {
      card: null,
      pos: {
        x: 100,
        y: 100,
      },
      width: null,
      listId: null,
      screenContentHeight: null,
      isOut: false,
    };
  },

  computed: {
    displayed() {
      return this.$store.getters.isQuickEdit;
    },
    currCard() {
      return this.$store.getters.currCard;
    },
    position() {
      const isOut =
        this.pos.y + this.screenContentHeight > window.innerHeight
          ? true
          : false;
      return {
        top: isOut ? 'unset' : this.pos.y + 'px',
        bottom: isOut ? 0 + 'px' : 'unset',
        left: this.pos.x + 'px',
        width: this.width + 'px',
      };
    },
  },
  watch: {
    currCard(newVal, oldVal) {
      this.card = newVal.card;

      if (newVal.pos) {
        this.pos.x = newVal.pos.x;
        this.pos.y = newVal.pos.y;
        this.width = newVal.width;
      }
      this.listId = newVal.listId;
      // console.log(this.card);

      setTimeout(() => {
        this.screenContentHeight =
          document.querySelector('.screen-content').offsetHeight;
      }, 50);
    },
  },

  components: {
    QuickEditor,
    modalOpenCard,
  },

  // created() {
  //   const data2 = this.currCard
  //   this.card = data2.card;
  //   this.pos.x = data2.pos.x;
  //   this.pos.y = data2.pos.y;
  //   this.width = data2.width;
  //   this.listId = data2.listId;
  //   setTimeout(() => {
  //     this.screenContentHeight =
  //       document.querySelector('.screen-content').offsetHeight;
  //   }, 50);
  // },
};
</script>
