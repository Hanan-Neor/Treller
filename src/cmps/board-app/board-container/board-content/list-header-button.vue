<template>
  <section class="list-header-button" @click="showHeaderInput">
    {{ title }}
    <!-- <button>Delete</button> -->
  </section>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    showHeaderInput() {
      this.$emit("showHeaderInput");
    },
  },
};
</script>

<style></style>
