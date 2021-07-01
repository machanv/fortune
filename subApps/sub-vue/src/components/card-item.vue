<template>
  <div class="card-item-container">
    <div class="img-content">
      <img v-bind:src="infoObject.img"/>
    </div>
    <div class="title">
      <p>{{ infoObject.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-item",
  props: {
    infoObject: Object
  }
}
</script>

<style scoped>
.card-item-container {
  box-shadow: 0 0 5px 5px #eeeeee;
}

.img-content {

}

.title {

}
</style>
