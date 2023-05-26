import * as THREE from 'three'

export default class ThreeEUtils {
  id: string = ''
  el: HTMLElement | null = null
  constructor(id: string) {
    this.id = id
    if (this.id) {
      this.el = document.getElementById(this.id)
    }
  }
  // 创建场景
  initScene() {
    // return new THREE.createScene()
  }

  // 创建摄像头
  createCamera() {}

  // 创建灯光
  createLight() {}
}
