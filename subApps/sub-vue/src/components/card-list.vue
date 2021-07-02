<template>
  <div class="card-list">
    <card-item v-for="item of infoList" v-bind:infoObject="item" v-bind:key="item.id"></card-item>
  </div>
</template>

<script>
import CardItem from './card-item';

export default {
  name: "card-list",
  components: {CardItem},
  props: {
    infoList: Array
  }
}
</script>

<style scoped>
.card-list {
  position: relative;
  width: 100%;
}
</style>
