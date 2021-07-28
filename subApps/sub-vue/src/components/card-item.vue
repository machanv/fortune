<template>
  <div class="card-item-container" v-on:click="itemClicked(infoObject)">
    <div class="img-content">
      <img v-bind:src="infoObject.img" />
    </div>
    <div class="title">
      <p>{{ infoObject.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-item',
  props: {
    infoObject: Object,
  },
  methods: {
    itemClicked(item) {
      if (item && item.url) {
        console.log(item);
        this.$router.push({ name: item.url });
      }
    },
  },
};
</script>

<style scoped>
.card-item-container {
  display: inline-grid;
  grid-template-columns: 24rem;
  grid-template-rows: 16rem;
  margin: 1rem;
  border: 1px solid #eeeeee;
  -moz-border-radius: 0.5rem;
  -webkit-border-radius: 0.5rem;
  border-radius: 0.5rem;
  transition: 0.5s;
  cursor: pointer;
}

.card-item-container:hover {
  border: #5410d0 1px dashed;
  box-shadow: 0 0 0.8rem 0.8rem #eeeeee;
}

.img-content {
  width: 100%;
  height: 15rem;
  background-color: #eeeeee;
}

.img-content img {
  width: 100%;
}

.title {
  padding: 1rem;
}
</style>
