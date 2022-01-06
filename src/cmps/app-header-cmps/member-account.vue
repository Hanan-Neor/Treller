<template>
  <section class="member-account">
      <div @click="showMenu = true" class="flex" style="cursor:pointer">
       <img style="height: 28px;width:28px; object-fit:cover ;border-radius:3rem;" v-if="loggedinUser" :src="loggedinUser.imgUrl" />
        <div v-else style="height: 28px; width:28px; border-radius:3rem; background-color:#fff"></div>
        </div>
        <popup v-if="showMenu" :header="'Account'" @handleMenu="handleMenu" style="left:unset; right:0">
            <member-account-menu  @handleMenu="handleMenu"></member-account-menu>
        </popup>
  </section>
</template>

<script>
import popup from '../popup.vue'
import MemberAccountMenu from './member-account-menu.vue'
export default {
  components: { popup, MemberAccountMenu },
    props:['loggedinUser'],
    data(){
        return{
            showMenu:false
        }
    },
    methods:{
        handleMenu(){
            this.showMenu = false
        }
    }

}
</script>

<style>

</style>