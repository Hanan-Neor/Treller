<template>
  <div id="app" class="app">
    <screen></screen>
    <app-header class="" />
    <router-view class="main-height" />
  </div>
</template>

<script>
import appHeader from './cmps/app-header.vue';
import appFooter from './cmps/app-footer.vue';
import Screen from './cmps/screen.vue';

export default {
  data() {
    return {};
  },

  components: {
    appHeader,
    appFooter,
    Screen,
  },
};
</script>
