<template>
  <section
  v-if="card.dueDate"
    class="card-content-date flex"
    style="
      background-color: #eb5a46;
      align-items: center;
      padding: 4px;
      border-radius: 3px;
      color: #fff;
      font-size:0.75rem
    "
  >
    {{ card.dueDate }}
  </section>
</template>

<script>
export default {
  props: ['card'],
};
</script>

<style></style>
