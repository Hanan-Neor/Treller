<template>
  <section v-if="card.dueDate" class="date">
    <div>Due date</div>
      <div>{{card.dueDate}}</div>
  </section>
</template>

<script>
export default {
  props:['card'],

}
</script>

<style>

</style>