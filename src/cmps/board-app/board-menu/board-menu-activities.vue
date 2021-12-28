<template>
  <section class="board-menu-activities">
      <h4 style="margin-left:6px; display:flex; gap:8px"><div style="width:20px; text-align:center"><font-awesome-icon icon="list-ul"/></div> Activity</h4>
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