<template>
  <div id="app">
    <div class="main-contanier">
      <navHeader></navHeader>
    </div>
    <div class="vue-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import store from './store';
export default {
  name: 'App',
  store,
  data: () => {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
@import 'assets/styles/style.less';

#app {
  position: absolute;
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
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
