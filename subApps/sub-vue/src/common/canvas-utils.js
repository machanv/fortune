export class CanvasUtils {
  captureMouse = function(element) {
    let mouse = { x: 0, y: 0 };
    element.addEventListener(
      'mousemove',
      function(event) {
        let x, y;
        if (event.pageX || event.pageY) {
          x = event.pageX;
          y = event.pageY;
        } else {
          y =
            event.clientX +
            document.body.scrollLeft +
            document.documentElement.scrollLeft;
          x =
            event.clientY +
            document.body.scrollTop +
            document.documentElement.scrollTop;
        }

        x -= element.scrollLeft;
        y -= element.scrollTop;

        mouse.x = x;
        mouse.y = y;
      },
      false
    );
    return mouse;
  };
}
