<template>
  <!-- v-if="!displayed" -->
  <section
    v-if="card"
    class="card-details"
    style="
      border-radius: 3px;
      min-height: 500px;

      position: absolute;
      left: 50%;
     
      transform: translateX(-50%);
    "
  >
  <div class="card-menu-button details-button" @click="openCardMenu" style="margin-right:50px">
    <i class="el-icon-more" style=""></i>
  </div>
  <div class="close-button details-button" @click="$emit('toggleScreen')">

     <i class="el-icon-close" style="font-weight:600; font-size:20px"></i>
  </div>
    <window-cover v-if="card.style.bgColor" :card="card"></window-cover>
    <main class="flex column" style="padding: 1rem; flex: 1; gap: 2rem">
      <!-- <window-cover  :card="card"></window-cover> -->
      <window-title :card="card" :listId="listId"></window-title>
      <div class="flex" style="flex: 1; gap:1rem">
        <window-content :card="card" :listId="listId"></window-content>
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
  methods:{
openCardMenu(){
  document.querySelector('.window-sidebar').classList.toggle('hide')
}
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
