<template>
  <div class="canvas-container">
    {{ message }}
    <canvas id="canvas" width="500px" height="400px"></canvas>
  </div>
</template>
<script>
export default {
  name: "IndexCanvas",
  data() {
    return {
      message: "Hello World",
    };
  },
  computed: {
    //   initCanvas()
  },
  methods: {
    initCanvas: function() {
      const canvas = document.getElementById("canvas");
      const cxt = canvas.getContext("2d");
      cxt.fillStyle = "#ffff00";
      cxt.fillRect(0, 0, 150, 75);
    },
  },
};
</script>
<style>          
.canvas-container {
}
</style>
