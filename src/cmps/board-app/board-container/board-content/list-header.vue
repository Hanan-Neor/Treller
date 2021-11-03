<template>
  <section class="list-header flex justify-between">
    <list-header-button
      v-if="!showInput"
      :title="title"
      @showHeaderInput="showInput = true"
    />
    <list-header-input
      v-else
      :listId="listId"
      :title="title"
      :showInput="showInput"
      @hideHeaderInput="showInput = false"
    />
    <button @click="removeList">🗑</button>
  </section>
</template>

<script>
import ListHeaderInput from './list-header-input.vue';
import listHeaderButton from './list-header-button.vue';
export default {
  props: ['listId'],
  data() {
    return {
      showInput: false,
    };
  },
  methods: {
    removeList() {
      this.$store.dispatch({ type: 'removeList', listId: this.listId });
      //      setTimeout(() => {
      //   this.$store.dispatch({ type: "saveBoard" });
      // }, 100);
    },
  },
  components: { listHeaderButton, ListHeaderInput },
  props: ['title', 'listId'],
};
</script>

<style></style>
