<template>
  <section class="content-activities">
    <h3>activities</h3>
    <activity-list :activities="activities" :isMenu="false"></activity-list>
  </section>
</template>

<script>
import activityList from '../../../board-app/board-menu/activity-list.vue';
export default {
  components: { activityList },
  props: ['card'],
  data() {
    return {
      activities: null,
    };
  },
  watch: {
    card: function (newVal, oldVal) {
      this.filterActivities();
    },
    updatedActivities() {
      // alert('hi')
      this.filterActivities();
    },
  },
  methods: {
    filterActivities() {
      this.activities = this.$store.getters.board.activities.filter(
        (activity) => activity.actPayload.card.id === this.card.id
      );
    },
  },
  computed: {
    updatedActivities() {
      return this.$store.getters.updatedActivities;
    },
    // activities(){
    //   return this.$store.getters.board.activities.filter(activity => activity.task.id === this.card.id)
    // }
  },
  created() {
    this.filterActivities();
  },
};
</script>

<style></style>
