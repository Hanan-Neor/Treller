<template>
  <section class="labels">
    <section class="flex column" style="gap: 4px">
      <div
        v-for="label in boardLabels"
        @click="addLabel(label)"
        :key="label.id"
        style="
          height: 2rem;
          border-radius: 3px;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 6px 12px;
          cursor: pointer;
        "
        :style="{ 'background-color': label.color }"
      >
        <span>
          {{ label.title }}
        </span>
        <!-- <span
          v-if="
            boardLabels.find((boardLabel) =>
              card.labelIds.find((labelId) => boardLabel.id === labelId)
            )
          " -->
        <span v-if="card.labelIds.find((labelId) => labelId === label.id)"
          >✔</span
        >
      </div>
    </section>
    <!-- <button @click="colorPicked('')">Remove cover</button> -->
  </section>
</template>

<script>
export default {
  props: ['card', 'boardLabels', 'value'],
  data() {
    return {
      //   color: this.value,
      //   label: this.value,
    };
  },
  methods: {
    addLabel(label) {
      this.label = label;
      this.$emit('input', this.label);
      //   console.log(this.color);
    },
  },
  computed: {
    isExistLabel(label) {
      // const isExistLabel = this.boardLabels.find((boardLabel) => {
      return this.boardLabels.find((boardLabel) => {
        //   return boardLabels.find((boardLabel) => {
        return boardLabel === label.id;
      });
      // return isExistLabel;
    },
  },
  created() {
    // console.log(this.boardLabels);
  },
};
</script>

<style></style>
