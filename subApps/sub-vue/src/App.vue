<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/2d">2D动画</router-link>
      </li>
      <li>
        <router-link to="/3d">3D动画</router-link>
      </li>
    </ul>
    <div class="vue-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

export default {
  name: "App",
  components: {},
};
</script>

<style scoped>
@import '../src/assets/styles/style.scss';

#app {
  position: absolute;
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app ul li {
  display: inline-block;
}

#app ul li a {
  padding: 1rem;
  line-height: 2.5;
}

.vue-container {
  position: relative;
  width: 100%;
  height: calc(100% - 3.5rem);
}
</style>
