<template>
  <section class="modal edit dates flex column">
    <!-- <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a day">
    </el-date-picker> -->
    <date-picker
      v-model="time"
      :inline="true"
      :default-value="new Date()"
      format="MMM D"
      valueType="format"
      style="margin: 0"
    ></date-picker>
    <button @click="addDate">Save</button>
    <button @click="removeDate">Remove</button>
  </section>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
  props: ['card', 'listId'],
  data() {
    return {
      time: null,
    };
  },
  methods: {
    saveCard(cardToSave) {
      this.$store.dispatch({
        type: 'saveCard',
        card: cardToSave,
        listId: this.listId,
      });

        this.$emit('handleMenu', null);

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
    addDate() {
      const cardToSave = this.card;
      cardToSave.dueDate = this.time;
      this.saveCard(cardToSave)
    },
    removeDate() {
      const cardToSave = this.card;
      cardToSave.dueDate = null;
      this.saveCard(cardToSave)
    },
  },
  components: {
    DatePicker,
  },
};
</script>

<style></style>
