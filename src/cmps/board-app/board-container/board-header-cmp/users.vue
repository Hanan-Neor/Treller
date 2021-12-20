<template>
  <section class="users">
    <header><h3>Invite to board</h3></header>
    <section class="flex column" style="gap: 4px">
      <div
        v-for="user in users"
        @click="addUser(user)"
        :key="user._id"
        style="
          border-radius: 3px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        "
      >
        <div class="flex align-center" style="gap:5px">
            <img :src="user.imgUrl"/>
          {{ user.username }}
        </div>
        <!-- <span
          v-if="
            boardLabels.find((boardLabel) =>
              card.labelIds.find((labelId) => boardLabel.id === labelId)
            )
          " -->

        <span v-if="board.members.find((loopUser) => loopUser._id === user._id)"
          >✔</span
        >
      </div>
    </section>
    <!-- <button @click="colorPicked('')">Remove cover</button> -->
  </section>
</template>

<script>
export default {
  props: ['users','board'],
  data() {
    return {
      //   color: this.value,
      //   label: this.value,
    };
  },
  methods: {
    addUser(user) {
      this.user = user;
      this.$emit('input', this.user);
      //   console.log(this.color);
    },
  },
  computed: {
    isExistUser(user) {
      // const isExistLabel = this.boardLabels.find((boardLabel) => {
      return this.boardLabels.find((boardLabel) => {
        //   return boardLabels.find((boardLabel) => {
        return boardLabel === label.id;
      });
      // return isExistLabel;
    },
  },
  created() {
      console.log(this.users);
    // console.log(this.boardLabels);
  },
};
</script>

<style></style>
