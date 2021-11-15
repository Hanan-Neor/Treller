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
    <window-cover v-if="card.style.bgColor" :card="card"></window-cover>
    <main class="flex column" style="padding: 1rem;flex: 1; gap:2rem">
      <!-- <window-cover  :card="card"></window-cover> -->
      <window-title :card="card" :listId="listId"></window-title>
      <div class="flex" style="flex: 1">
        <window-content :card="card"></window-content>
        <window-sidebar :card="card" :listId="listId"></window-sidebar>
      </div>
    </main>

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
  components: { windowCover, windowTitle, windowContent, windowSidebar },
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
  // created() {
  //   this.card = this.$store.getters.currCard.card;
  // },
};
</script>

<style></style>
