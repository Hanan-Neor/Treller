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
    <button class="menu-button" @click="toggleMenu">⋯</button>

    <list-header-menu v-if="showMenu" @removeList="removeList" @toggleMenu="toggleMenu"></list-header-menu>
    <!-- <button class="menu-button" @click="removeList">⋯</button> -->
  </section>
</template>

<script>
import ListHeaderInput from './list-header-input.vue';
import listHeaderButton from './list-header-button.vue';
import ListHeaderMenu from './list-header-menu.vue';
export default {
  props: ['listId'],
  data() {
    return {
      showInput: false,
      showMenu: false,
    };
  },
  methods: {
    toggleMenu(){
      this.showMenu = !this.showMenu
    },
    removeList() {
      this.$store.dispatch({ type: 'removeList', listId: this.listId });
      //      setTimeout(() => {
      //   this.$store.dispatch({ type: "saveBoard" });
      // }, 100);
    },
  },
  components: { listHeaderButton, ListHeaderInput, ListHeaderMenu },
  props: ['title', 'listId'],
};
</script>

<style></style>
