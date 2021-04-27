<template>
  <div class="container">
    <div id="threeContainer" class="three-container"></div>
  </div>
</template>
<script>
// import * as THREE from 'three';
const THREE = require('three');

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
      cube: THREE.Mesh
    }
  },
  created() {

  },
  mounted() {
    this.initThree();
    this.initObj();
    this.animate();
  },
  methods: {
    initThree: function () {
      this.element = document.querySelector('#threeContainer');
      this.camera = new THREE.PerspectiveCamera(70, this.element.clientWidth / this.element.clientHeight, 0.1, 10);
      this.camera.position.z = 1;

      this.scene = new THREE.Scene();

      this.renderer = new THREE.WebGL1Renderer();
      this.renderer.setSize(this.element.clientWidth, this.element.clientHeight);
      this.element.appendChild(this.renderer.domElement);
    },
    initObj() {
      this.geometry = new THREE.BoxGeometry(1, 1, 1);
      this.material = new THREE.MeshBasicMaterial({color: 0x00ff00});
      this.cube = new THREE.Mesh(this.geometry, this.material);
      this.scene.add(this.cube);

      this.camera.position.z = 5;
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
