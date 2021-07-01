<template>
  <div class="card-list">
    <card-item v-for="item of infoList"></card-item>
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
  display: grid;
  grid-template-columns: 150px;
}
</style>
