<template>
         <section  class="board-colors" style="display:grid; grid-template-columns:repeat(2,1fr);gap:8px; grid-template-rows:96px;    height: 100%;">
      <div
        @click="colorPicked('#0079bf')"
        style="background-color: #0079bf; cursor:pointer; border-radius: 8px;"
      ></div>
      <div
        @click="colorPicked('#d29034')"
        style="background-color: #d29034; cursor:pointer; border-radius: 8px;"
      ></div>
      <div
        @click="colorPicked('#519839')"
        style="background-color: #519839; cursor:pointer; border-radius: 8px;"
      ></div>
      <div
        @click="colorPicked('#b04632')"
        style="background-color: #b04632; cursor:pointer; border-radius: 8px;"
      ></div>
      <div
        @click="colorPicked('#89609e')"
        style="background-color: #89609e; cursor:pointer; border-radius: 8px;"
      ></div>
      <div
        @click="colorPicked('#cd5a91')"
        style="background-color: #cd5a91; cursor:pointer; border-radius: 8px;"
      ></div>
      <div
        @click="colorPicked('#4bbf6b')"
        style="background-color: #4bbf6b; cursor:pointer; border-radius: 8px;"
      ></div>
      <div
        @click="colorPicked('#00aecc')"
        style="background-color: #00aecc; cursor:pointer; border-radius: 8px;"
      ></div>
      <div
        @click="colorPicked('#838c91')"
        style="background-color: #838c91; cursor:pointer; border-radius: 8px;"
      ></div>
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

}
</script>

<style>

</style>