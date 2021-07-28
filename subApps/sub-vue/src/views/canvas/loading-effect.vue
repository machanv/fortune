<template>
  <div class="canvas-container">
    <canvas id="canvas" width="500px" height="400px"></canvas>
  </div>
</template>

<script>
export default {
  name: 'loading-effect',
  data: () => {
    return {
      canvas: document.getElementById('canvas'),
      context: '',
      centerX: '',
      centerY: '',
      rad: (Math.PI * 2) / 100,
      speed: 0.1,
    };
  },
  mounted() {
    let _self = this;
    this.initCanvas();
    if (this.canvas) {
      (function drawFrame() {
        window.requestAnimationFrame(drawFrame, _self.canvas);
        _self.context.clearRect(0, 0, _self.canvas.width, _self.canvas.height);
        _self.whiteCircle();
        _self.text(_self.speed);
        _self.blueCircle(_self.speed);
        if (_self.speed > 100) _self.speed = 0;
        _self.speed += 0.1;
      })();
    }
  },
  methods: {
    initCanvas() {
      this.canvas = document.getElementById('canvas');
      this.context = this.canvas.getContext('2d');
      this.centerX = this.canvas.width / 2;
      this.centerY = this.canvas.height / 2;
      this.rad = (Math.PI * 2) / 100;
      this.speed = 0.1;
    },
    blueCircle(n) {
      this.context.save();
      this.context.beginPath();
      this.context.strokeStyle = '#49f';
      this.context.lineWidth = 12;
      this.context.arc(
        this.centerX,
        this.centerY,
        100,
        -Math.PI / 2,
        -Math.PI / 2 + n * this.rad,
        false
      );
      this.context.stroke();
      this.context.restore();
    },
    whiteCircle() {
      this.context.save();
      this.context.beginPath();
      this.context.strokeStyle = '#A5DEF1';
      this.context.lineWidth = 12;
      this.context.arc(this.centerX, this.centerY, 100, 0, Math.PI * 2, false);
      this.context.stroke();
      this.context.closePath();
      this.context.restore();
    },
    text(n) {
      this.context.save();
      this.context.fillStyle = '#F47C7C';
      this.context.font = '40px Arial';
      this.context.textAlign = 'center';
      this.context.textBaseline = 'middle';
      this.context.fillText(n.toFixed(0) + '%', this.centerX, this.centerY);
      this.context.restore();
    },
  },
};
</script>

<style scoped></style>
