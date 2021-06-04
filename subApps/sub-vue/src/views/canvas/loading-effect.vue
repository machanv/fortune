<template>
  <div class="canvas-container">
    <canvas id="canvas" width="500px" height="400px"></canvas>
  </div>
</template>

<script>
export default {
  name: "LoadingEffect",
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      let map = new Map();
      map.set('first', 'hello');
      map.set('second', 'world');

      for (let [key, value] of map) {
        console.log(key + ' is ' + value);
      }
    }
  }
}
</script>

<style scoped>

</style>
