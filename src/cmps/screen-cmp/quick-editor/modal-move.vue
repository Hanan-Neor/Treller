<template>
  <section class="move">
    <form @submit.prevent="alert" class="flex column">
      board
      <select id="boardSel" @change="setBoard($event.target.value)">
        <!-- <select id="boardsSelect" @change="setBoard2($this)"> -->
        <option v-for="board in boards" :key="board._id" :value="board._id">
          {{ board.title }}
        </option>
      </select>
      list
      <select id="listSel" v-if="board" @change="setList($event.target.value)">
        <option v-for="list in board.lists" :key="list.id" :value="list.id">
          {{ list.title }}
        </option>
      </select>
      position
      <select id="posSel" v-if="list" @change="setPos($event.target.value)">
        <option :value="1">1</option>
        <option
          v-for="(card, index) in list.cards"
          :key="card.id"
          :value="index + 2"
        >
          {{ index + 2 }}
        </option>
      </select>
      <button>hi</button>
    </form>
  </section>
</template>

<script>
export default {
  props: ['card', 'listId'],
  data() {
    return {
      board: null,
      boards: null,
      list: null,
      pos: null,
    };
  },
  methods: {
    alert() {
      const relocation = {
        board: this.board._id,
        list: this.list.id,
        pos: this.pos,
      };
      console.log(this.pos);
      console.log(relocation);
      this.$store.dispatch({
        type: 'relocateCard',
        relocation,
        card: this.card,
        listId: this.listId,
      });

      this.$nextTick(function () {
        this.$store.dispatch({ type: 'saveBoard' });
      });
      this.toggleScreen();
    },

    toggleScreen() {
      this.$store.dispatch({ type: 'toggleScreen' });
      setTimeout(() => {
        this.$store.dispatch({ type: 'resetCurrCard' });
        this.loaded = false;
      }, 200); //animation time
    },

    setBoard(e) {
      // this.board =value
      this.board = this.boards.find((board) => board._id === e);
      console.log(this.board);
    },
    setList(e) {
      // this.board =value
      this.list = this.board.lists.find((list) => list.id === e);
      // console.log(this.board);
    },
    setPos(e) {
      // this.board =value
      this.pos = e;
      // console.log(this.board);
    },
    setBoard2() {
      const board = document.getElementById('boardsSelect').value;
      // this.board =value
      console.log(board);
    },
  },
  created() {
    this.boards = this.$store.getters.boards;
    this.board = this.boards[0]._id;
    this.list = this.boards[0].lists[0].id
    this.pos = 1
  },
};
</script>

<style></style>
