<template>
  <section class="acti||vity-preview">
      {{activity.txt}} ||
       By {{activity.byMember.fullname}} ||
     In task {{activity.task.title}} ||
      <!-- {{activity.txt}}||
      {{activity.txt}}||
      {{activity.txt}}|| -->
  </section>
</template>

<script>
export default {
    props:['activity'],

}
</script>

<style>

</style>