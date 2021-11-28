<template>
  <section class="board-menu-content-main menu-content-section">
      <board-menu-buttons
      :board="board"
      @toggleMenu="toggleMenu"
    ></board-menu-buttons>

    

    <hr class="board-menu-divider" />

    <board-menu-activities :board="board"></board-menu-activities>

  </section>
</template>

<script>
import BoardMenuActivities from './board-menu-activities.vue';
import boardMenuButtons from './board-menu-buttons.vue';

export default {
    props:['board'],
  components: { boardMenuButtons, BoardMenuActivities },

        methods:{
        toggleMenu(){
            this.$emit('toggleMenu')
        }
    }


}
</script>

<style>

</style>