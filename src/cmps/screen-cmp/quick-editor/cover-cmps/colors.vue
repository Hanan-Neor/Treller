<template>
  <section class="colors">
    <section style="display:grid; grid-template-columns:repeat(5,1fr);gap:8px; grid-template-rows:2rem 2rem">
      <div
        @click="colorPicked('#7BC86C')"
        style="background-color: #7bc86c; cursor:pointer"
      ></div>
      <div
        @click="colorPicked('#F5DD29')"
        style="background-color: #f5dd29; cursor:pointer"
      ></div>
      <div
        @click="colorPicked('#FFAF3F')"
        style="background-color: #ffaf3f; cursor:pointer"
      ></div>
      <div
        @click="colorPicked('#EF7564')"
        style="background-color: #ef7564; cursor:pointer"
      ></div>
      <div
        @click="colorPicked('#CD8DE5')"
        style="background-color: #cd8de5; cursor:pointer"
      ></div>
      <div
        @click="colorPicked('#5BA4CF')"
        style="background-color: #5ba4cf; cursor:pointer"
      ></div>
      <div
        @click="colorPicked('#29CCE5')"
        style="background-color: #29cce5; cursor:pointer"
      ></div>
      <div
        @click="colorPicked('#6DECA9')"
        style="background-color: #6deca9; cursor:pointer"
      ></div>
      <div
        @click="colorPicked('#FF8ED4')"
        style="background-color: #ff8ed4; cursor:pointer"
      ></div>
      <div
        @click="colorPicked('#172B4D')"
        style="background-color: #172b4d; cursor:pointer"
      ></div>
    </section>
      <button
        @click="colorPicked('')"
      >Remove cover</button>
  </section>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      color: this.value,
    };
  },
  methods: {
    colorPicked(color) {
      this.color = color;
      this.$emit('input', this.color);
      // console.log(this.color);
    },
  },
};
</script>

<style></style>
