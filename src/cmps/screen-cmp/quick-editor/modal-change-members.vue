<template>
  <section class="modal-change-members" style="">
    <members :members="members" :card="card" @addMember="addMember"></members>
  </section>
</template>

<script>
import members from './members-cmps/members.vue';
// import{eventBusService} from './../../../services/event-bus.service'
export default {
  props: ['card', 'listId'],
  components: { members },
  data() {
    return {
      members: null,
    };
  },
  methods: {
    addMember(memberToSave) {
      // alert('hi')
// eventBusService.$emit('updateMemberAct')
      const cardToSave = this.card;
// ==================== for activity ================
        const list = this.$store.getters.board.lists.find(loopList=>loopList.id === this.listId)
       const prevList = {
        id: '',
        title: '',
      };
// ======================
      const isExistMember = cardToSave.members.find((member) => {
        return member._id === memberToSave._id;
      });
      if (isExistMember) {
        const idx = cardToSave.members.findIndex((member) => {
          return member._id === memberToSave._id;
        });

        cardToSave.members.splice(idx, 1);
        this.$store.dispatch({
        type: 'addActivity',
        action: 'REMOVE_MEMBER',
        card: cardToSave,
        list,
        prevList,
        member:memberToSave
      });
      } else {
        cardToSave.members.push(memberToSave);

      this.$store.dispatch({
        type: 'addActivity',
        action: 'ADD_MEMBER',
        card :cardToSave,
        list,
        prevList,
        member:memberToSave
      });
      console.log(memberToSave);

      }

      //   cardToSave.members.push(member)
      this.$store.dispatch({
        type: 'saveCard',
        card: cardToSave,
        listId: this.listId,
      });

      //   this.$store.dispatch({type:'setCurrCard',card:cardToSave})
      this.$nextTick(function () {
        this.$store.dispatch({
          type: 'setCurrCard',
          card: cardToSave,
          pos: null,
          listId: this.listId,
          elWidth: null,
        });
        this.$store.dispatch({ type: 'saveBoard' });
      });
    },
  },

  created() {
    this.members = this.$store.getters.board.members;
  },
};
</script>

<style></style>
