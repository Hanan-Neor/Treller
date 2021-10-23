<template>
  <div id="app" class="app">
  <!-- <div id="app" class="  main-layout" style=""> -->

    <app-header class="" />
    <!-- <app-header class="main-layout full" /> -->

    <router-view class="main-height" />
    <!-- <router-view class="" /> -->

    <!-- <app-footer class="" /> -->
    <!-- <app-footer class="main-layout full" /> -->
  </div>
</template>

<script>
import appHeader from './cmps/app-header.vue';
import appFooter from './cmps/app-footer.vue';

export default {
  data() {
    return {};
  },
  computed: {

  },
  components: {
    appHeader,
    appFooter,
  },
};
</script>
