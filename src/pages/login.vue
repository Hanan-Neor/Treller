<template>
  <section class="login">
    <h2>login</h2>
    <form class="flex column" style="gap:20px"  @submit.stop="login">
      <label>
        username
        <select v-model="username" >
            <option v-for="user in users" :key="user._id">{{user.username}}</option>
            </select>
      </label>
      <!-- <label>
        username
        <input type="text" v-model="username" />
      </label>
      <label>
          password
        <input type="text" v-model="password" />
      </label> -->
      <button class="trello-button" style="width:150px">Login</button>
    </form>
  </section>
</template>

<script>
export default {
    data(){
        return{
            username:null,
            password:null,
        }
    },
    methods:{
        login(){
            const user = {}
            user.username = this.username;
            user.password = this.username;
            // user.password = this.password;
            this.$store.dispatch({type:'login', user})
            this.$router.push('/board/'+this.$store.getters.board._id)
        }
    },
    computed:{
        users(){
            return this.$store.getters.users
        }
    }
};
</script>

<style></style>
