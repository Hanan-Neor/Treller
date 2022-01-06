<template>
  <section class="popup" style="">
    <div class="close-button" @click="closePopup">
      <i class="el-icon-close" style="font-weight: 600"></i>
    </div>
    <header>{{ header }}</header>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: ['header'],
  data() {
    return {};
  },

  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        // this.$emit('resetPopup');
        this.$emit('handleMenu', null);
      }
    },
    closePopup() {
      this.$emit('handleMenu', null);
    },
  },
  mounted() {
    document.addEventListener('mousedown', this.close);
  },
  beforeDestroy() {
    document.removeEventListener('mousedown', this.close);
  },
};
</script>

<style></style>
