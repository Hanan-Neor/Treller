<template>
  <section>
    <button  @click="toggleMenu" class="boards-menu-button trello-button"><font-awesome-icon :icon="['fab', 'trello']"/> Boards</button>
    <boards-menu v-if="showMenu" :boards="boards" @toggleMenu="toggleMenu"></boards-menu>
  </section>
</template>

<script>
import boardsMenu from './boards-menu.vue';

export default {
  props: ['boards'],
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
        this.showMenu = !this.showMenu
    },
  },
  components: {
    boardsMenu,
  },
};
</script>

<style></style>
