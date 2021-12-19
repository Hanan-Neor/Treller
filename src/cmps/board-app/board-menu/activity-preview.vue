<template>
  <section class="activity-preview flex">
    <img
      :src="activity.byMember.imgUrl"
      style="object-fit: cover; height: 28px; width: auto; border-radius: 3rem"
    />
    <div>
      <span style="font-weight: 700">{{ activity.byMember.fullname }}</span>
      <!-- {{ isMenu ? activity.txt.menu : activity.txt.details }} -->

      <span v-if="activity.action === 'ADD_CARD' && isMenu">
        added
        <span
          style="text-decoration: underline; cursor: pointer"
          @click="openCardDetails"
          >{{ activity.actPayload.card.title }}</span
        >
        to {{ activity.actPayload.currList.title }}</span
      >
      <!-- <span v-if="activity.action === 'ADD_CARD' && isMenu">
        added {{ cardTitle }} to {{ listTitle }}</span
      > -->
      <span v-else-if="activity.action === 'ADD_CARD'">
        added this card to {{ activity.actPayload.currList.title }}</span
      >
      <!-- <span v-else-if="activity.action === 'ADD_CARD'">
        added this card to {{ listTitle }}</span
      > -->
      <span v-else-if="activity.action === 'REMOVE_CARD'">
        deleted {{ activity.actPayload.card.title }} from
        {{ activity.actPayload.currList.title }}</span
      >
      <!-- <span v-else-if="activity.action === 'REMOVE_CARD'">
        deleted {{ activity.actPayload.card.title }} from {{ listTitle }}</span
      > -->

      <span v-else-if="activity.action === 'MOVE_CARD' && isMenu">
        moved
        <span
          style="text-decoration: underline; cursor: pointer"
          @click="openCardDetails"
          >{{ activity.actPayload.card.title }}</span
        >
        from {{ activity.actPayload.prevList.title }} to
        {{ activity.actPayload.currList.title }}</span
      >
      <span v-else-if="activity.action === 'MOVE_CARD'">
        moved this card from
        {{ activity.actPayload.prevList.title }}
        to {{ activity.actPayload.currList.title }}</span
      >

      <span v-else-if="activity.action === 'ADD_LIST'">
        added
        {{ activity.actPayload.currList.title }} to this board</span
      >
      <span v-else-if="activity.action === 'REMOVE_LIST'">
        deleted list
        {{ activity.actPayload.currList.title }}</span
      >

      <span
        v-else-if="
          activity.action === 'ADD_MEMBER' &&
          isMenu &&
          activity.byMember._id === activity.actPayload.member._id
        "
      >
        added himself to  <span
          style="text-decoration: underline; cursor: pointer"
          @click="openCardDetails"
          >{{ activity.actPayload.card.title }}</span></span
      >

      <span v-else-if="activity.action === 'ADD_MEMBER' && isMenu">
        added
        <span style="font-weight: 700">{{
          activity.actPayload.member.fullname
        }}</span>
        to  <span
          style="text-decoration: underline; cursor: pointer"
          @click="openCardDetails"
          >{{ activity.actPayload.card.title }}</span></span
      >

      <span
        v-else-if="
          activity.action === 'ADD_MEMBER' &&
          activity.byMember._id === activity.actPayload.member._id
        "
      >
        added himself to this card</span
      >
      <span v-else-if="activity.action === 'ADD_MEMBER'">
        added
        <span style="font-weight: 700">{{
          activity.actPayload.member.fullname
        }}</span>
        to this card</span
      >

      <span
        v-else-if="
          activity.action === 'REMOVE_MEMBER' &&
          isMenu &&
          activity.byMember._id === activity.actPayload.member._id
        "
      >
        removed himself from  <span
          style="text-decoration: underline; cursor: pointer"
          @click="openCardDetails"
          >{{ activity.actPayload.card.title }}</span></span
      >
      <span v-else-if="activity.action === 'REMOVE_MEMBER' && isMenu">
        removed
        <span style="font-weight: 700">{{
          activity.actPayload.member.fullname
        }}</span>
        from  <span
          style="text-decoration: underline; cursor: pointer"
          @click="openCardDetails"
          >{{ activity.actPayload.card.title }}</span></span
      >
      <span
        v-else-if="
          activity.action === 'REMOVE_MEMBER' &&
          activity.byMember._id === activity.actPayload.member._id
        "
      >
        removed himself from this card</span
      >
      <span v-else-if="activity.action === 'REMOVE_MEMBER'">
        removed
        <span style="font-weight: 700">{{
          activity.actPayload.member.fullname
        }}</span>
        from this card</span
      >

      <!-- {{activity}} -->
      <div style="font-size: 0.75rem; color: #5e6c84">{{ timeToShow }}</div>
      <!-- <div>{{ timeToShow2 }}</div> -->
    </div>
  </section>
</template>

<script>
import moment from './../../../../node_modules/moment';
export default {
  props: ['activity', 'isMenu'],
  data() {
    return {
      time: Date.now(),
    };
  },
  created() {
    // console.log(this.isMenu);
  },

  watch: {
    currTime(newVal) {
      this.time = newVal;
    },
  },
  methods: {
    openCardDetails() {
      //       const list = this.$store.getters.board.lists.find(
      //   (list) => list.id === this.activity.actPayload.currList.id
      // );
      const list = this.$store.getters.board.lists.find((list) =>
        list.cards.find((card) => card.id === this.activity.actPayload.card.id)
      );
      const card = list.cards.find(
        (card) => card.id === this.activity.actPayload.card.id
      );

      this.$store.dispatch({
        type: 'setCurrCard',
        card,
        pos: '',
        listId: list.id,
        elWidth: '',
      });
      this.$store.dispatch({ type: 'openCardDetails' });
      // this.$nextTick(() => {
      this.$store.dispatch({ type: 'toggleScreen' });
    },
  },
  computed: {
    currTime() {
      return this.$store.getters.time;
    },
    cardTitle() {
      const list = this.$store.getters.board.lists.find(
        (list) => list.id === this.activity.actPayload.currList.id
      );
      const card = list.cards.find(
        (card) => card.id === this.activity.actPayload.card.id
      );
      return card.title;
    },
    listTitle() {
      const list = this.$store.getters.board.lists.find(
        (list) => list.id === this.activity.actPayload.currList.id
      );
      return list.title;
    },
    prevListTitle() {
      const prevList = this.$store.getters.board.lists.find(
        (list) => list.id === this.activity.actPayload.prevList.id
      );
      return prevList.title;
    },
    timeToShow() {
      // const relativeTime = Date.now() - this.activity.createdAt;
      const relativeTime = this.time - this.activity.createdAt;
      let createdTimeHours = new Date(this.activity.createdAt).getHours();
      let createdTimeMinutes = new Date(this.activity.createdAt).getMinutes();
      let currTimeHours = new Date(this.time).getHours();
      let hours = Math.floor(relativeTime / 1000 / 60 / 60);
      let minutes = Math.floor(relativeTime / 1000 / 60);
      let seconds = Math.floor(relativeTime / 1000);
      // if(relativeTime < 8640000 ){
      if (hours <= currTimeHours) {
        if (hours < 1) {
          if (minutes < 1) {
            if (seconds < 7) {
              return 'Just now';
            } else {
              return 'a few seconds ago';
            }
          } else if (minutes === 1) return '1 minute ago';
          else return minutes + ' minutes ago';
        } else {
          return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
        }

        // return  `${hours} hours ago`
      } else if (hours <= currTimeHours + 24) {
        if (createdTimeHours > 12) {
          return (
            'Yestrday at ' +
            // new Date(this.activity.createdAt).toLocaleTimeString()
            (createdTimeHours - 12) +
            ':' +
            String(createdTimeMinutes).padStart(2, '0') +
            ' PM'
          );
        } else {
          return (
            'Yestrday at ' +
            // new Date(this.activity.createdAt).toLocaleTimeString()
            createdTimeHours +
            ':' +
            String(createdTimeMinutes).padStart(2, '0') +
            ' AM'
          );
        }
      } else {
        let createdDate = new Date(this.activity.createdAt).getMonth();
        let createdDay = new Date(this.activity.createdAt).getDate();
        switch (createdDate) {
          case 1:
            createdDate = 'Jan';
            break;
          case 2:
            createdDate = 'Feb';
            break;
          case 3:
            createdDate = 'Mar';
            break;
          case 4:
            createdDate = 'Apr';
            break;
          case 5:
            createdDate = 'May';
            break;
          case 6:
            createdDate = 'Jun';
            break;
          case 7:
            createdDate = 'Jul';
            break;
          case 8:
            createdDate = 'Aug';
            break;
          case 9:
            createdDate = 'Sep';
            break;
          case 10:
            createdDate = 'Oct';
            break;
          case 11:
            createdDate = 'Nov';
            break;
          case 12:
            createdDate = 'Dec';
            break;
        }
        if (createdTimeHours > 12) {
          return (
            createdDate +
            ' ' +
            createdDay +
            ' at ' +
            (createdTimeHours - 12) +
            ':' +
            String(createdTimeMinutes).padStart(2, '0') +
            ' PM'
          );
        } else {
          return (
            createdDate +
            ' ' +
            createdDay +
            ' at ' +
            createdTimeHours +
            ':' +
            String(createdTimeMinutes).padStart(2, '0') +
            ' AM'
          );
        }
      }
    },

    timeToShow2() {
      // return moment(new Date(this.activity.createdAt), "YYYYMMDD").fromNow();
      // return moment(new Date(this.activity.createdAt), "YYYYMMDD").startOf('day').fromNow()
      // return moment(new Date(this.activity.createdAt), "YYYYMMDD").calendar()
      return moment(new Date(this.activity.createdAt), 'YYYYMMDD')
        .startOf('hour')
        .fromNow();
    },
  },
  created() {
    //    const relativeTime = Date.now() - this.activity.createdAt;
    // let hours = Math.floor(relativeTime / 1000 / 60 / 60);
    // let minutes = Math.floor(relativeTime / 1000 / 60);
    // console.log(hours+' : '+minutes);
  },
};
</script>

<style></style>
