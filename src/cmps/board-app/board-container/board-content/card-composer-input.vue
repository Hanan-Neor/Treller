<template>
  <!-- <section v-if="cardComposerState" class="card-composer-input"> -->
  <section class="card-composer-input">
    <!-- <form> -->
    <textarea-autosize
      ref="textarea1"
      @keydown.enter.prevent.native="handleEnter"
      v-model="cardTitle"
      class="textarea1"
      dir="auto"
      placeholder="Enter a title for this card…"
      rows="3"
      style="
        overflow: hidden;
        overflow-wrap: break-word;
        resize: none;
        width: 100%;
      "
    ></textarea-autosize>
    <!-- </form> -->
    <div class="compose-input-buttons flex justify-between">
      <div class="left-side">
        <button class="compose-add-button" @click="addCard">Add card</button>
        <button class="compose-cancel-button" @click="hideCardComposerInput">
          ⨉
        </button>
      </div>
      <div><button>...</button></div>
    </div>
  </section>
</template>

<script>
import { boardService } from './../../../../services/board.service';
export default {
  props: ['cardComposerState', 'listId'],
  data() {
    return {
      // element:false
      // created:false
      cardTitle: null,
    };
  },

  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.$emit('hideCardComposerInput');
      }
    },
    handleEnter(){
      // if(!this.cardTitle) return
      this.addCard()
    },
    addCard() {
      document.querySelector('.textarea1').focus();
      
      if (!this.cardTitle) return;
      // console.log(this.cardTitle)
      let newCard = boardService.getEmptyCard();
      newCard.title = this.cardTitle;
      newCard.createdAt = Date.now();
      // console.log(newCard);
      this.$store.dispatch({ type: 'addCard', newCard, listId: this.listId });

      // setTimeout(() => {
        // this.$store.dispatch({ type: "saveBoard" });
      // }, 100);

      this.cardTitle = null;
      // document.querySelector(".textarea1").focus()
    },
    hideCardComposerInput() {
      this.$emit('hideCardComposerInput');
    },
  },
  computed: {
    isRTL(s) {
      var ltrChars =
          'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF' +
          '\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF',
        rtlChars = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC',
        rtlDirCheck = new RegExp('^[^' + ltrChars + ']*[' + rtlChars + ']');

      return rtlDirCheck.test(s);
    },
  },
  mounted() {
    document.querySelector('.textarea1').focus();
    // this.$refs['textarea1'].focus()
    document.addEventListener('mousedown', this.close);
    // document.addEventListener("mouseup", this.close);
  },
  beforeDestroy() {
    document.removeEventListener('mousedown', this.close);
    // document.removeEventListener("mouseup", this.close);
  },
  created() {},
};
</script>
