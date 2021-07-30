export class Arrow {
  x = 0;
  y = 0;
  rotation = 0;
  color = '#4a5533';

  draw = (context) => {
    context.save();
    context.translaste(this.x, this.y);
    context.rotate(this.rotation);
    context.lineWidth = 5;
    context.fillStyle = this.color;
    context.beginPath();
    context.moveTo(-50, -25);
    context.lineTo(0, -25);
    context.lineTo(0, -50);
    context.lineTo(50, 0);
    context.lineTo(0, 50);
    context.lineTo(0, 25);
    context.lineTo(-50, 25);
    context.closePath();
    context.stroke();
    context.fill();
    context.restore();
  };
}
