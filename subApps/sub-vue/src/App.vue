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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* ul {
    li {
      display: inline-block;
      a {
        padding: 10px;
      }
    }
  } */
}

</style>
