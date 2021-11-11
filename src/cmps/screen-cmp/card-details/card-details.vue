<template>
  <!-- v-if="!displayed" -->
  <section
    v-if="card"
    class="card-details"
    style="
      border-radius: 3px;
      min-height: 500px;
      background-color: #fff;
      position: absolute;
      left: 50%;
      top: 48px;
      transform: translateX(-50%);
    "
  >
  <window-cover v-if="card.style"></window-cover>
  <!-- <window-cover v-if="card.style.bgColor"></window-cover> -->
  <window-title :card="card"></window-title>
  <window-content></window-content>
  <window-sidebar></window-sidebar>
    <!-- <div>
      {{ card.title }}
    </div> -->
  </section>
</template>

<script>
import windowCover from './window-cover.vue';
import windowTitle from './window-title.vue';
import windowContent from './window-content.vue';
import windowSidebar from './window-sidebar.vue';
export default {
  components: { windowCover,windowTitle,windowContent,windowSidebar },
  data() {
    return {
      card: null,
      listId: null,
    };
  },
  computed: {
    displayed() {
      return this.$store.getters.isQuickEdit;
    },

    currCard() {
      return this.$store.getters.currCard;
    },
  },

  watch: {
    currCard(newVal, oldVal) {
      this.card = newVal.card;
      this.listId = newVal.listId;
    },
  },
//   created() {
//       const data2 = this.currCard
//     this.card = data2.card;
//     this.listId = data2.listId;
//   },
};
</script>

<style></style>
