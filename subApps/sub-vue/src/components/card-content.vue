<template>
  <div class="card-content">
    <h2>{{ content.contentTitle }}</h2>
    <div class="desc">
      <p>{{ content.desc || '暂无内容' }}</p>
    </div>
    <card-list v-bind:infoList="content.infoList"></card-list>
  </div>
</template>

<script>
import CardList from './card-list';

export default {
  name: "card-content",
  components: {CardList},
  props: {
    content: Object
  }
}
</script>

<style scoped>
.card-content {
  margin-bottom: 2rem;
}

.desc p {
  text-indent: 2rem;
  line-height: 2;
}
</style>
