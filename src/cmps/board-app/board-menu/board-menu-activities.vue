<template>
  <section class="board-menu-activities">
      <h4>Activity</h4>
      <activity-list :activities="board.activities"></activity-list>
  </section>
</template>

<script>
import activityList from './activity-list.vue'
export default {
props:['board'],
data(){
    return{

    }
},
components:{
    activityList
}

}
</script>

<style>

</style>