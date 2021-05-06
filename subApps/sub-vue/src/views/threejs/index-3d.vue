<template>
  <div class="container">
    <!--    <button v-on:click="mangerView">修改视角</button>-->
    <button v-on:click="drwaLine">画线</button>
    <div id="threeContainer" class="three-container"></div>
  </div>
</template>
<script>
import * as THREE from 'three';
// const THREE = require('three');
import {WEBGL} from 'three/examples/jsm/WebGL.js';
// import * as three from '../../common/three';

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
      shaderMaterial: THREE.ShaderMaterial,
      line: THREE.Line
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
      this.scene = new THREE.Scene();
      // this.scene = three.create();
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
    },
    mangerView() { // 修改视角，目前貌似有点问题
      this.camera.position.set(0, 0, 100);
      this.camera.lookAt(0, 0, 0);

      this.renderer.render(this.scene, this.camera);
    },
    drwaLine() {
      this.material = new THREE.LineBasicMaterial({color: 0x0000ff});
      this.geometry = new THREE.BufferGeometry();

      const vertices = new Float32Array([
        -1.0, -1.0, 1.0,
        1.0, -1.0, 1.0,
        1.0, 1.0, 1.0,

        1.0, 1.0, 1.0,
        -1.0, 1.0, 1.0,
        -1.0, -1.0, 1.0
      ]);
      this.geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      // this.geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
      // this.geometry.vertices.push(new THREE.Vector3(0, 10, 0));
      // this.geometry.vertices.push(new THREE.Vector3(10, 0, 0));

      this.line = new THREE.Line(this.geometry, this.material);

      this.scene.add(this.line);
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
