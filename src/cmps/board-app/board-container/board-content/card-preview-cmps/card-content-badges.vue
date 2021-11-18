<template>
  <section class="card-content-badges flex" style="gap:8px">
      <card-content-date :card="card"></card-content-date>


      <!-- {{card}} -->
      <div v-if="card.description" style="display:flex;align-items:center">≡</div>
      <!-- ≡ -->
  </section>
</template>

<script>
import cardContentDate from './card-content-date.vue'
export default {
  components: { cardContentDate },
  props:['card'],

}
</script>

<style>

</style>