<template>
  <section class="board-menu-activities">
      <h4>Activity</h4>
      <activity-list :activities="board.activities" :isMenu="true"></activity-list>
  </section>
</template>

<script>
import activityList from './activity-list.vue'
export default {
props:['board'],
data(){
    return{
        isMenu:true
    }
},
components:{
    activityList
}

}
</script>

<style>

</style>