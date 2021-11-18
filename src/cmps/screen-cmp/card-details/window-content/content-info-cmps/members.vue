<template>
  <section v-if="card.members.length" class="members">
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

mounted(){
  console.log(this.card.members.length);
}
}
</script>

<style>

</style>