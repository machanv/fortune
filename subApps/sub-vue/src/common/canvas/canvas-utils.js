const CanvasUtils = {};
CanvasUtils.install = function(Vue) {
  // options
  Vue.captureMouse = function(element) {
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

  Vue.captureTap = function(element) {
    let touch = {
      x: null,
      y: null,
      isPressed: false,
      event: null,
    };
    let body_scrollLeft = document.body.scrollLeft,
      element_scrollLeft = document.documentElement.scrollLeft,
      body_scrollTop = document.body.scrollTop,
      element_scrollTop = document.documentElement.scrollTop,
      offsetLeft = element.offsetLeft,
      offsetTop = element.offsetTop;

    element.addEventListener('touchstart', function(event) {
      touch.isPressed = true;
      touch.event = event;
    });

    element.addEventListener('touchend', function(event) {
      touch.isPressed = false;
      touch.x = null;
      touch.y = null;
      touch.event = event;
    });

    element.addEventListener(
      'touchmove',
      function(event) {
        let x,
          y,
          touch_event = event.touches[0];
        if (touch_event.pageX || touch_event.pageY) {
          x = touch_event.pageX;
          y = touch_event.pageY;
        } else {
          x = touch_event.clientX + body_scrollLeft + element_scrollLeft;
          y = touch_event.clientY + body_scrollTop + element_scrollTop;
        }
        x -= offsetLeft;
        y -= offsetTop;

        touch.x = x;
        touch.y = y;

        touch.event = event;
      },
      false
    );

    return touch;
  };
};
