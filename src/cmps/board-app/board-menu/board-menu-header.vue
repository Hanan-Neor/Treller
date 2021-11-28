<template>
  <section class="board-menu-header">
    <div class="menu-header">
      <!-- <div> -->
      <div v-if="menuSection === 'BACKGROUND'" class="flex justify-center" style=" align-items:center; width:100%;position:relative">
        <div @click="hideBackground" style="cursor:pointer;position:absolute;left:0;top:0;">⨞</div>
        <h3 style="margin:0">Change background</h3>
      </div>
      <div v-else-if="menuSection === 'COLORS'" class="flex justify-center" style=" align-items:center; width:100%;position:relative">
        <div @click="hideColors" style="cursor:pointer;position:absolute;left:0;top:0;">⨞</div>
        <h3 style="margin:0">Colors</h3>
      </div>
      <div v-else>
        <h3 style="margin:0">Menu</h3>
      </div>
      <!-- <h3>MENU - {{ board.title }}</h3> -->
      <button @click="toggleMenu">⨉</button>
    </div>
    <hr class="board-menu-divider" style="margin: 0px" />
  </section>
</template>

<script>
export default {
  props: ['board'],

  methods: {
    toggleMenu() {
      this.$emit('toggleMenu');
    },
    hideBackground() {
      this.$store.dispatch({ type: 'setMenuSection', section: '' });

        document.querySelector('.board-menu-content-main').style.display = 'block';
      document.querySelector('.board-menu-content-background').classList.remove('show');
    },
    hideColors() {
      this.$store.dispatch({ type: 'setMenuSection', section: 'BACKGROUND' });

        document.querySelector('.board-menu-content-background').style.display = 'flex';
      document.querySelector('.board-menu-content-background').classList.add('show');
      document.querySelector('.board-menu-content-colors').classList.remove('show');
        // document.querySelector('.board-menu-content-colors').style.display = 'none';
    },
  },
  computed:{
      menuSection(){
         return this.$store.getters.menuSection
      }
  }
};
</script>

<style></style>
