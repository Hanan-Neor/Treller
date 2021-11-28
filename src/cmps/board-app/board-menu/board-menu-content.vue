<template>
  <section class="board-menu-content">
<board-menu-content-main :board="board" @toggleMenu="toggleMenu"></board-menu-content-main>
<board-menu-content-background :board="board"></board-menu-content-background>
<board-menu-content-colors :board="board"></board-menu-content-colors>
  </section>
</template>

<script>
import boardMenuContentMain from './board-menu-content-main.vue'
import boardMenuContentBackground from './board-menu-content-background.vue'
import boardMenuContentColors from './board-menu-content-colors.vue'
export default {
  props: ['board'],

  components: { boardMenuContentMain , boardMenuContentBackground,boardMenuContentColors},
    methods:{
        toggleMenu(){
            this.$emit('toggleMenu')
        }
    }

}
</script>

<style>

</style>