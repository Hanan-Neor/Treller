<template>
  <section
  v-if="card.dueDate"
    class="card-content-date flex"
    style="
      background-color: #eb5a46;
      align-items: center;
      padding: 0.2857em;
      border-radius: 3px;
      color: #fff;
    "
  >
      <!-- padding: 4px; -->
    {{ card.dueDate }}
  </section>
</template>

<script>
export default {
  props: ['card'],
};
</script>

<style></style>
