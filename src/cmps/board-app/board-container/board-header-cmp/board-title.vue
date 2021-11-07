<template>
  <section class="board-title" style="width: fit-content">
    <board-title-input
      v-if="isTitleEdit"
      :title="board.title"
      @closeEditor="closeEditor"
    ></board-title-input>

    <button v-else class="trello-button" @click="openEditor">
      {{ board.title }}
    </button>
  </section>
</template>

<script>
import boardTitleInput from './board-title-input.vue';
export default {
  props: ['board'],
  data() {
    return {
      isTitleEdit: false,
      titleToEdit: '',
    };
  },
  methods: {
    openEditor() {
      this.isTitleEdit = true;
      this.$nextTick(function () {
        document.getElementById('board-title-input').select();
      });
    },
    closeEditor(title) {
      this.isTitleEdit = false;
      this.$store.dispatch({
        type: 'updateBoardTitle',
        title,
        boardId: this.board._id,
      });
    },
    // resize(el) {
    //   el.target.style.width = el.target.scrollWidth + 'px';
    // },
  },
  mounted() {},
  created() {
    this.titleToEdit = this.board.title;
  },
  components: {
    boardTitleInput,
  },
};
</script>

<style></style>
