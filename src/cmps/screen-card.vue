<template>
  <section @mousedown.self="toggleScreen" class="screen" :class="screenDisplay">

    <!-- <screen-content v-if="displayed"></screen-content>
    <card-details v-else></card-details> -->
    <screen-content v-show="displayed"></screen-content>
    <card-details v-show="!displayed"></card-details>

  </section>
</template>

<script>
import CardDetails from './screen-cmp/card-details/card-details.vue';
import screenContent from './screen-cmp/screen-content.vue';
export default {
  data() {
    return {
      // toggle:true
      toggle: false,
    };
  },
  components: { screenContent, CardDetails },
  methods: {
    toggleScreen() {
      this.$store.dispatch({ type: 'toggleScreen' });
      setTimeout(() => {
        this.$store.dispatch({ type: 'resetCurrCard' });
      }, 200); //animation time

      if (this.$store.getters.board._id === this.$route.params.boardId) return;
       this.$router.push('/board/' + this.$store.getters.board._id)

    },
  },
  computed: {
    screenState() {
      return this.$store.getters.screenState;
    },
    screenDisplay() {
      return {
        show: this.screenState,
        hide: !this.screenState,
      };
    },
    displayed() {
      return this.$store.getters.isQuickEdit;
    },
  },
  created() {
    // console.log(this.$store.getters.screenState);
  },
};
</script>

<style></style>
