<template>
  <section class="card-content-members flex" style="justify-content: flex-end;gap:4px">
    <img
      v-for="member in card.members"
      :src="member.imgUrl"
      :key="member._id"
      style="
        align-self: center;
        object-fit: cover;
        height: 2em;
        width: auto;
        border-radius: 3rem;
      "
    />
  </section>
</template>

<script>
export default {
  props: ['card'],
};
</script>

<style></style>
