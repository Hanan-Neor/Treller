<template>
  <section
    id="list-composer"
    class="board-list list-composer"
    :class="menuDisplay2"
  >
    <div
      class="comps"
      style="height: 2.5rem"
      :class="menuDisplay"
      @click="toggleListComposer"
    >
      <list-composer-button></list-composer-button>
    </div>
    <list-composer-input
      style="height: 2.5rem"
      class="comps"
      :showInput="showInput"
      :clearTitle="clearTitle"
      :class="menuDisplay2"
      @onEnter="addList"
      @hideListComposerInput="toggleListComposer"
      @setListTitle="setListTitle"
    ></list-composer-input>
    <div class="buttons" :class="menuDisplay2">
      <button class="compose-add-button" @click="addList">Add list</button>
      <button class="compose-cancel-button" @click="toggleListComposer">
        ⨉
      </button>
    </div>
  </section>
</template>

<script>
import ListComposerButton from './list-composer-button.vue';
import ListComposerInput from './list-composer-input.vue';

export default {
  data() {
    return {
      listTitle: null,
      showInput: false,
      clearTitle: false,
    };
  },
  methods: {
    setListTitle(titleToSave) {
      this.listTitle = titleToSave;
    },

    toggleListComposer() {
      this.showInput = !this.showInput;
      if (this.showInput) {
        this.focus();
      }
    },
    focus() {
      // setTimeout(() => {
      //   document.getElementById('list-input').focus();
      // }, 100);
      this.$nextTick(function () {
        document.getElementById('list-input').focus();
      });
    },
    addList() {
      document.getElementById('list-input').focus();
      if (!this.listTitle) return;
      let newList = boardService.getEmptyList();
      newList.title = this.listTitle;
      this.$store.dispatch({ type: 'addList', newList });
      this.clearTitle = !this.clearTitle;
      // document.getElementById("list-input").scrollIntoView();
      // window.scrollTo(0, 2000);

      location.href = '#';
      location.href = '#list-input';

      // var scrollDiv = document.getElementById("list-input").offsetLeft;
      // window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
    },
  },
  computed: {
    menuDisplay() {
      return {
        show: !this.showInput,
        hide: this.showInput,
      };
    },
    menuDisplay2() {
      return {
        show2: this.showInput,
        hide2: !this.showInput,
      };
    },
    menuDisplay2() {
      return {
        show2: this.showInput,
        hide2: !this.showInput,
      };
    },
  },

  components: {
    ListComposerButton,
    ListComposerInput,
  },
};
</script>

<style></style>
