<template>
  <section class="quick-editor">
    <quick-editor-menu :card="card" :listId="listId"></quick-editor-menu>
  </section>
</template>

<script>
import QuickEditorMenu from './quick-editor-menu.vue'
export default {
    props:['card' , 'listId'],
    components:{
        QuickEditorMenu
    }
};
</script>

<style></style>
