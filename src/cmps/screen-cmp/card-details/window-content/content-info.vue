<template>
  <section class="content-info flex" style="gap:0.5rem;flex-wrap: wrap;">
      <members :card="card"></members>
      <labels :card="card"></labels>
      <date :card="card"></date>
  </section>
</template>

<script>
import Date from './content-info-cmps/date.vue'
import Labels from './content-info-cmps/labels.vue'
import members from './content-info-cmps/members.vue'
export default {
  props:['card'],

  components: { members, Labels, Date },

}
</script>

<style>

</style>