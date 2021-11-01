<template>
  <section class="list-header">
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
  </section>
</template>

<script>
import ListHeaderInput from "./list-header-input.vue";
import listHeaderButton from "./list-header-button.vue";
export default {
  data() {
    return {
      showInput: false,
    };
  },
  components: { listHeaderButton, ListHeaderInput },
  props: ["title", "listId"],
};
</script>

<style></style>
