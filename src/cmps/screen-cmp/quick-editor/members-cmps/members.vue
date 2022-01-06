<template>
  <section class="members">
    <input type="text" />
    <section>
          
      <div v-for="member in members" :key="member._id" @click="addMember(member)" style="cursor:pointer">
        <img
          :src="member.imgUrl"
          style="
            align-self: center;
            object-fit: cover;
            height: 28px;
            width: auto;
            border-radius: 3rem;
          "
        />
        {{member.fullname}}
        <span v-if="card.members.find((cardMember) => cardMember._id === member._id)">✔</span>
      </div>
    </section>
  </section>
</template>

<script>
export default {
    props:['members','card'],
    methods:{
        addMember(member){
            this.$emit('addMember', member)
        }
    }
};
</script>

<style></style>
