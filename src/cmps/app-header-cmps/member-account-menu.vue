<template>
  <section class="member-account-menu">
    <div v-if="loggedinUser" class="flex" style="gap:8px">
      <img
        :src="loggedinUser.imgUrl"
        style="
          object-fit: cover;
          height: 40px;
          width: 40px;
           object-fit:cover ;
          border-radius: 3rem;
        "
      />
      <div class="flex column">
        <div>{{ loggedinUser.fullname }}</div>
        <div style="font-size:0.8em; color:#B3BAC5; ">blabla@email.com</div>
        <!-- <div>{{ loggedinUser.username }}</div> -->
      </div>
    </div>
    <hr class="board-menu-divider" />
    <div @click="goToLogin" style="cursor: pointer; padding:6px 0">Login</div>
    <!-- <div @click="goToLogin" style="cursor:pointer">Login</div> -->
  </section>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$emit('handleMenu');
      if (this.$route.path != '/login') {
        this.$router.push('/login');
        // this.$router.push('/login').catch(()=>{})
      }
    },
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
  },
};
</script>

<style></style>
