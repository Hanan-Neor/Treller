<template>
  <section
    class="popup-container"
    :class="styles"
    style="
    "
  >
    <div class="close-button"
      @click="closePopup"
      style=""
    >
    
        <i class="el-icon-close" style=" font-weight:600"></i>
        
    </div>
    <slot></slot>
  </section>
</template>

<script>
export default {
    data() {
    return {
      loaded: false,
      // offPage:true
      offPage: false,
      rect: null,
      isOffPageBottom: false,
      isOffPageRight: false,
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

    handlePosition() {
      this.rect = this.$el.getBoundingClientRect();
        // console.log(this.rect);
      this.isOffPageBottom =
        this.rect.bottom > document.querySelector('.screen').offsetHeight
          ? true
          : false;
      //   this.rect.bottom > window.innerHeight ? true : false;
      this.isOffPageRight =
        this.rect.right > document.querySelector('.screen').offsetWidth
          ? true
          : false;
      // this.loaded = true;
      // this.rect.bottom > document.querySelector('.screen').offsetHeight? this.$el.styles.bottom =
      // console.log('isOffPageBottom',this.isOffPageBottom);
      // console.log('isOffPageRight',this.isOffPageRight);
    },
  },
  computed: {
    styles() {
      // const isOut = this.rect.bottom > window.offsetHeight ? true : false;
      return {
        // 'off-page-bottom': isOut,
        // 'off-page-right': isOut,
        'off-page-bottom': this.isOffPageBottom,
        'off-page-right': this.isOffPageRight,
        // loaded: this.loaded,
      };
    },
  },

  mounted() {
    this.handlePosition();

    document.addEventListener('mousedown', this.close);
  },
  beforeDestroy() {
    document.removeEventListener('mousedown', this.close);
  },
};
</script>

<style></style>
