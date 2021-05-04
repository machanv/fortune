import THREE from 'three';

export class Stage {
  create = function () {
    const scene = new THREE.Scene();
    return scene;
  }

  perspectiveCamera = function (fov, aspect, near, far) {
    return new THREE.PerspectiveCamera(fov, aspect, near, far);
  }

}
