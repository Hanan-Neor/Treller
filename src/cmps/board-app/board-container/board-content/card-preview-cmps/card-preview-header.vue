<template>
  <!-- <section v-if="card.style.bgColor" class="card-preview-header" :style="{'background-color': card.style.bgColor}"> -->
  <section v-if="card.style" class="card-preview-header" :style="{'background-color': card.style.bgColor}">
<!-- header -->
  </section>
</template>

<script>
export default {
    props:['card'],

}
</script>

<style>

</style>