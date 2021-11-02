<template>
  <!-- <section v-if="listComposerState" class="list-composer-input"> -->
  <section class="list-composer-input" style="">
    <!-- <form> -->
    <input
      id="list-input"
      autofocus
      autocomplete="off"
      type="text"
      v-model="listTitle"
      class="textarea1"
      dir="auto"
      placeholder="Enter a title for this list…"
      rows="1"
      style="
        overflow: hidden;
        overflow-wrap: break-word;
        resize: none;
        width: 100%;
      "
      @keydown.enter.prevent="onEnter"
      @change="setListTitle"
    />
    <!-- </form> -->
    <!-- <div class="flex">
        <button @click="addList">Add list</button>
        <button @click="hideListComposerInput">X</button>
    </div> -->
  </section>
</template>

<script>
import { boardService } from '../../../../services/board.service';
export default {
  props: ['listComposerState', 'listId', 'showInput', 'clearTitle'],
  data() {
    return {
      // element:false
      // toFocus:this.showInput,
      listTitle: null,
    };
  },
  watch: {
    clearTitle: function (newVal, oldVal) {
      this.listTitle = null;
      // if (!showInput) return;
      // document.getElementById("list-input").focus();
    },
  },

  methods: {
    onEnter() {
      if (!this.listTitle) return;
      this.setListTitle();
      this.$emit('onEnter');
      // this.addList();
    },
    close(e) {
      if (
        !this.$el.contains(e.target) &&
        !document
          .querySelector('.board-list.list-composer')
          .contains(e.target) &&
        this.showInput
      ) {
        // alert('hi')
        this.$emit('hideListComposerInput');
      }
    },
    setListTitle() {
      // alert('hi')
      this.$emit('setListTitle', this.listTitle);
    },
    addList() {
      // document.querySelector(".textarea1").focus();

      if (!this.listTitle) return;
      // console.log(this.listTitle)
      let newList = boardService.getEmptyList();
      newList.title = this.listTitle;
      // newList.createdAt = Date.now();
      // console.log(newList);
      this.$store.dispatch({ type: 'addList', newList });

      // setTimeout(() => {
      //   // dispatch({type:'saveBoard'})
      //   this.$store.dispatch({ type: "saveBoard" });
      // }, 2000);
      this.listTitle = null;
      // document.querySelector(".textarea1").focus()
    },
    hideListComposerInput() {
      this.$emit('hideListComposerInput');
    },
  },
  mounted() {
    // document.getElementById("list-input").focus();
    // document.querySelector(".textarea1").focus()
    document.addEventListener('mousedown', this.close);
  },
  beforeDestroy() {
    document.removeEventListener('mousedown', this.close);
  },
  created() {
    // document.querySelector(".list-input").focus()
  },
};
</script>
