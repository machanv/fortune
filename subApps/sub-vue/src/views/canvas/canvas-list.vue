<template>
  <div class="page-container">
    <ul>
      <li>
        <router-link to="loading">进度条</router-link>
      </li>
      <li>
        <router-link to="3d">...</router-link>
      </li>
    </ul>
    <div class="canvas-wrapper">
      <router-view></router-view>
    </div>
    <loadingEffect></loadingEffect>
  </div>
</template>
<script>
import loadingEffect from './loading-effect.vue';
export default {
  name: 'canvas-list',
  components: {
    loadingEffect,
  },
  data() {
    return {
      message: 'Hello World',
    };
  },
  computed: {
    //   initCanvas()
  },
  methods: {
    initCanvas: function() {
      const canvas = document.getElementById('canvas');
      const cxt = canvas.getContext('2d');
      cxt.fillStyle = '#ffff00';
      cxt.fillRect(0, 0, 150, 75);
    },
  },
};
</script>
<style>
.page-container {
  position: relative;
  width: 100%;
}
</style>
