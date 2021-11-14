<template>
  <section class="card-preview-content">
      <card-content-labels :card="card"></card-content-labels>
      <card-content-title :card="card"></card-content-title>
      <card-content-badges :card="card"></card-content-badges>
      <card-content-members :card="card"></card-content-members>
  </section>
</template>

<script>
import cardContentLabels from './card-content-labels.vue'
import CardContentTitle from './card-content-title.vue'
import CardContentBadges from './card-content-badges.vue'
import CardContentMembers from './card-content-members.vue'
export default {
  components: { cardContentLabels, CardContentTitle,CardContentBadges,CardContentMembers },
  props:['card'],

}
</script>

<style>

</style>