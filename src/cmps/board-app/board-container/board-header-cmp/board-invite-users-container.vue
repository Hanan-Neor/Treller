<template>
  <section class="board-invite-users-container">
      <users :users="users" v-model="user"  :board="board" @input="addUser"></users>
      <!-- dsavfdsfvsefgbergvber   dsavfdsfvsefgbergvber   dsavfdsfvsefgbergvber   dsavfdsfvsefgbergvber   dsavfdsfvsefgbergvber   dsavfdsfvsefgbergvber   dsavfdsfvsefgbergvber   dsavfdsfvsefgbergvber   dsavfdsfvsefgbergvber   dsavfdsfvsefgbergvber   dsavfdsfvsefgbergvber   dsavfdsfvsefgbergvber   dsavfdsfvsefgbergvber   dsavfdsfvsefgbergvber   dsavfdsfvsefgbergvber   dsavfdsfvsefgbergvber   dsavfdsfvsefgbergvber   dsavfdsfvsefgbergvber   dsavfdsfvsefgbergvber   dsavfdsfvsefgbergvber   dsavfdsfvsefgbergvber -->
   
  </section>
</template>

<script>
import users from './users.vue'
export default {
      props: ['board'],

    components:{
        users
    },
    data(){
        return{
            user:null,
            users:null
        }
    },
    methods:{
        addUser(user){
            console.log(user._id);
            this.$store.dispatch({type:'addUser', user})

        },

    },
    created(){
        this.users = this.$store.getters.users
        console.log(this.users);
    }

}
</script>
