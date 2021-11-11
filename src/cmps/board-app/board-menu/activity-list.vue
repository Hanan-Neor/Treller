<template>
  <section class="activity-list">
      <activity-preview v-for="activity in activities" :key="activity.id" :activity="activity"></activity-preview>
  </section>
</template>

<script>
import activityPreview from './activity-preview.vue'
export default {
    props:['activities'],
    components:{
activityPreview
    }


}
</script>

<style>

</style>