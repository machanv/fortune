<template>
  <div class="container">
    <div id="threeContainer" class="three-container"></div>
  </div>
</template>
<script>
// import * as THREE from 'three';
const THREE = require('three');
import {WEBGL} from 'three/examples/jsm/WebGL.js';

export default {
  name: 'Index3D',
  data: () => {
    return {
      element: HTMLElement,
      camera: THREE.PerspectiveCamera,
      scene: THREE.Scene,
      renderer: THREE.WebGL1Renderer,
      geometry: THREE.BoxGeometry,
      material: THREE.MeshBasicMaterial,
      cube: THREE.Mesh,
      shaderMaterial: THREE.ShaderMaterial
    }
  },
  created() {

  },
  mounted() {
    this.supportWebGl();
  },
  methods: {
    supportWebGl() {
      this.element = document.querySelector('#threeContainer');
      // this.scene = new THREE.Scene();
      this.scene = this.create();
      if (WEBGL.isWebGLAvailable()) {
        this.initThree();
      } else {
        var warning = WEBGL.getWebGLErrorMessage();
        this.element.appendChild(warning);
      }
    },
    initThree() {

      this.camera = new THREE.PerspectiveCamera(70, this.element.clientWidth / this.element.clientHeight, 0.1, 10);
      this.camera.position.z = 1;

      this.renderer = new THREE.WebGL1Renderer();
      this.renderer.setSize(this.element.clientWidth, this.element.clientHeight);
      this.element.appendChild(this.renderer.domElement);
      this.initObj();
    },
    initObj() {
      this.geometry = new THREE.BoxGeometry(1, 1, 1);
      this.material = new THREE.MeshBasicMaterial({color: 0x00ff00});
      this.cube = new THREE.Mesh(this.geometry, this.material);
      this.scene.add(this.cube);

      this.camera.position.z = 5;
      this.animate();
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
      this.renderer.render(this.scene, this.camera);
    }
  }
}
</script>
<style>
.container {
  position: relative;
  width: 100%;
  height: 100%;
}

.three-container {
  position: relative;
  width: 100%;
  height: 100%;
}

</style>
