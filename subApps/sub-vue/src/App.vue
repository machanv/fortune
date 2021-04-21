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
    <router-view></router-view>
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

</style>
