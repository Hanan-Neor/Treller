<template>
  <section class="members">
      <div>Members</div>
            <img
      v-for="member in card.members"
      :src="member.imgUrl"
      :key="member._id"
      style="
        align-self: center;
        object-fit: cover;
        height: 28px;
        width: auto;
        border-radius: 3rem;
      "
    />

  </section>
</template>

<script>
export default {
  props:['card'],


}
</script>

<style>

</style>