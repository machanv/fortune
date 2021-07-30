<template>
  <div>
    <canvas id="canvas" width="500" height="500"></canvas>
  </div>
</template>
<script>
import { Arrow, CanvasUtils } from '../../common/canvas';

export default {
  name: 'arrow',
  data() {
    return {
      name: '',
      canvas: null,
      context: null,
    };
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      this.canvas = document.getElementById('canvas');
      this.context = this.canvas.getContext('2d');
      const arrow = new Arrow();
      const centerX = this.canvas.width / 2;
      const centerY = this.canvas.height / 2;

      const mouse = CanvasUtils.captureMouse(this.canvas);
      arrow.x = centerX;
      arrow.y = centerY;

      (function drawFrame() {
        window.requestAnimationFrame(drawFrame, this.canvas);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let dx = mouse.x - arrow.x,
          dy = mouse.y - arrow.y;

        arrow.rotation = Math.atan2(dx, dy);

        arrow.draw(this.context);
      })();
    },
  },
};
</script>
