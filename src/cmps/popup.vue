<template>
  <section
    class="popup"
    style="
    "
  >
   <button
      @click="closePopup"
      style="
        position: absolute;
        padding: 12px;
        right: 0;
        top: 0;
        cursor: pointer;
      "
    >
      X
    </button>
    <slot></slot>
  </section>
</template>

<script>
export default {
    data() {
    return {
     
    };
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
