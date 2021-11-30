<template>
  <div class="card-wrapper">
    <div class="card-content">
      <img :src="cardInfo && cardInfo.preview" />
      <div>{{ cardInfo && cardInfo.name }}</div>
    </div>
    <div>{{ cardInfo && cardInfo.desc }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: { cardInfo: Object },
};
</script>
<style>
.card-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.card-content {
}
</style>
