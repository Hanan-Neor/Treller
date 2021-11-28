<template>
  <section class="board-menu-content-background flex">
    <img src="https://res.cloudinary.com/dymtestxz/image/upload/v1638125608/TRELLER/board-photos_kcwzd4.jpg">
    <img src="https://res.cloudinary.com/dymtestxz/image/upload/v1638125615/TRELLER/board-colors_vzippo.jpg"  @click="showColors">
     <!-- <div @click="showColors"> COLORS from background</div> -->
  </section>
</template>

<script>
export default {
  methods:{
    showColors(){
            this.$store.dispatch({ type: 'setMenuSection', section: 'COLORS' });
      document.querySelector('.board-menu-content-background').style.display = 'none';
      // document.querySelector('.board-menu-content-background').classList.remove('show');
      // document.querySelector('.board-menu-content-colors').style.display = 'block';
      document.querySelector('.board-menu-content-colors').classList.add('show');

    }
  }

}
</script>

<style>

</style>