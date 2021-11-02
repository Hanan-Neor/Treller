<template>
  <section v-if="!cardComposerState" class="card-composer-button">
    <!-- <div @click="toggleCardComposer">+ Add a card</div> -->
    <div>+ Add a card</div>
  </section>
</template>

<script>
export default {
  props: ['cardComposerState'],
  methods: {},
  computed: {},
};
</script>

<style></style>
