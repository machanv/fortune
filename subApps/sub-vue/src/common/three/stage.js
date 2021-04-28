import THREE from 'three';

export default {
  install(Vue) {
    Vue.property.create = function () {
      const scene = new THREE.Scene();
      return scene;
    }

    Vue.property.perspectiveCamera = function (fov, aspect, near, far) {
      return new THREE.PerspectiveCamera(fov, aspect, near, far);
    }
  }
}
