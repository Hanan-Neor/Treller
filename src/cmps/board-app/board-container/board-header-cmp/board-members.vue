<template>
  <section class="board-members" style="display: relative">
    <div class="flex" style="gap:4px">
      <div class="members-imgs flex">
        <img
          v-for="member in board.members"
          :src="member.imgUrl"
          :key="member._id"
          style=""
          
        />
      </div>
      <button @click="toggleUsers" class="trello-button">
       <font-awesome-icon icon="user-plus" /> Invite
      </button>
    </div>
    <popup v-if="showUsers" @handleMenu="handleMenu" style="margin-top: 8px">
      <board-invite-container :board="board"></board-invite-container>
    </popup>
  </section>
</template>

<script>
import Popup from '../../../popup.vue';
import boardInviteContainer from './board-invite-users-container.vue';
export default {
  props: ['board'],

  components: { boardInviteContainer, Popup },
  data() {
    return {
      showUsers: false,
    };
  },
  methods: {
    toggleUsers() {
      this.showUsers = !this.showUsers;
    },
    handleMenu() {
      // alert('hi')
      this.showUsers = false;
    },
  },
};
</script>

<style></style>
