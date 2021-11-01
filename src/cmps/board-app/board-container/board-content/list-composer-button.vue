<template>
  <section class="list-composer list-composer-button">
    <div style=""><button class="">+ Add another list</button></div>
    <!-- <div style=""><button class="trello-button">+ Add another list</button></div> -->
  </section>
</template>

<script>
export default {
  methods: {
    focus() {
      document.getElementById("list-input").focus();
    },
  },
};
</script>
