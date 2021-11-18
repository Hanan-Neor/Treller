<template>
  <section class="modal-change-members" style="padding: 0.75rem">
    <members :members="members" :card="card" @addMember="addMember"></members>
  </section>
</template>

<script>
import members from './members-cmps/members.vue';
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

      const cardToSave = this.card;

      const isExistMember = cardToSave.members.find((member) => {
        return member._id === memberToSave._id;
      });
      if (isExistMember) {
        const idx = cardToSave.members.findIndex((member) => {
          return member._id === memberToSave._id;
        });

        cardToSave.members.splice(idx, 1);
      } else {
        cardToSave.members.push(memberToSave);
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
