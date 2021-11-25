<template>
  <section class="list-header-input">
    <form @submit="updateHeader">
      <textarea-autosize
        @change.native="updateHeader"
        ref="header-input"
        id="header-input"
        @keydown.enter.native="updateHeader"
        v-model="titleToModel"
        class=""
        dir="auto"
        placeholder="Enter list title…"
        rows="1"
        style="
          overflow: hidden;
          overflow-wrap: break-word;
          resize: none;
          width: 100%;
        "
      />
      <!-- onkeydown="if(event.keyCode == 13) return false;" -->
      <!-- @keydoup.enter="updateHeader" -->
    </form>

    <!-- <input ref="header-input" id="header-input" @change="updateHeader" @keyup.enter="addCard" v-model="titleToModel" type="text" style="
        overflow: hidden;
        overflow-wrap: break-word;
        resize: none;
        width: 100%;
      "> -->

    <!-- <textarea
      @focus="$event.target.select()"
      ref="header-input"
      id="header-input"
      v-on:keydown.enter="updateHeader"

      v-model="titleToModel"
      class=""
      dir="auto"
      placeholder="Enter list title…"
      rows="1"
      style="
        overflow: hidden;
        overflow-wrap: break-word;
        resize: none;
        width: 100%;
      "
    ></textarea> -->
  </section>
</template>

<script>
export default {
  props: ['title', 'showInput', 'listId'],
  data() {
    return {
      titleToModel: this.title,
    };
  },
  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.$emit('hideHeaderInput');
      }
    },
    updateHeader() {
      if (!this.titleToModel) return;
      this.$emit('hideHeaderInput');
      const title = this.titleToModel;
      const listId = this.listId;
        this.$store.dispatch({ type: 'updateActListTitle',listId});

      this.$store.dispatch({ type: 'updateHeader', title, listId });
    },
  },
  mounted() {
    document.getElementById('header-input').select();
    // this.$refs.header-input.focus();
    // this.$refs.header-input.$el.focus()
    document.addEventListener('mousedown', this.close);
  },
  beforeDestroy() {
    document.removeEventListener('mousedown', this.close);
  },
  created() {},
};
</script>

<style></style>
