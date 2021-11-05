<template>
  <div @mousedown="toggleScreen" class="screen" :class="screenDisplay">
    <div
      ref="content"
      class="screen-content"
      style=""
      :style="position"
      @mousedown.stop=""
    >
      <screen-content :card="card" :listId="listId"></screen-content>
    </div>
  </div>
</template>

<script>
// import QuickEditorMenu from './screen-cmp/quick-editor/quick-editor-menu.vue';
// import quickEditor from './screen-cmp/quick-editor.vue';
import screenContent from './screen-cmp/screen-content.vue';
export default {
  components: { screenContent },
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

  methods: {
    toggleScreen() {
      this.$store.dispatch({ type: 'toggleScreen' });
      setTimeout(() => {
        this.$store.dispatch({ type: 'resetCurrCard' });
      }, 200); //animation time
    },
  },

  computed: {
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
    screenState() {
      return this.$store.getters.screenState;
    },
    screenDisplay() {
      return {
        show: this.screenState,
        hide: !this.screenState,
      };
    },
  },

  watch: {
    currCard(newVal, oldVal) {
      this.card = newVal.card;
      this.pos.x = newVal.pos.x;
      this.pos.y = newVal.pos.y;
      this.width = newVal.width;
      this.listId = newVal.listId;

      setTimeout(() => {
        this.screenContentHeight =
          document.querySelector('.screen-content').offsetHeight;
      }, 50);
    },
  },

  mounted() {},
  created() {},
};
</script>

<style></style>
