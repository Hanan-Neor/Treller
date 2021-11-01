<template>
  <div id="app" class="app">
    <!-- <div id="app" class="  main-layout" style=""> -->

    <!-- <div style="" @click="toggleScreen" class="screen" :class="screenDisplay">
        <div ref="content" class="contenty" style="background-color:#fff;position:fixed">
          CHECKING
        </div>
    </div> -->

    <screen></screen>
    <app-header class="" />
    <!-- <app-header class="main-layout full" /> -->

    <router-view class="main-height" />
    <!-- <router-view class="" /> -->

    <!-- <app-footer class="" /> -->
    <!-- <app-footer class="main-layout full" /> -->
  </div>
</template>

<script>
import appHeader from "./cmps/app-header.vue";
import appFooter from "./cmps/app-footer.vue";
import Screen from './cmps/screen.vue';


export default {
  data() {
    return {};
  },
  //   methods: {
  //   toggleScreen() {
  //     this.$store.dispatch({ type: "toggleScreen" });
  //   },
  // },

  //   computed: {
  //   screenState() {
  //     // console.log(this.$store.getters.menuState);
  //     return this.$store.getters.screenState;
  //   },
  //   screenDisplay() {
  //     return {
  //       show: this.screenState,
  //       hide: !this.screenState,
  //     };
  //   },
  // },

  // mounted(){
  //   this.$refs.content.style.top = '100px'
  //   this.$refs.content.style.left = '100px'
  // },

  components: {
    appHeader,
    appFooter,
    Screen,
  },
};
</script>
