<template>
  <div id="app">
    <div class="main-contanier">
      <ul>
        <li v-for="link of routerLinks" v-bind:key="link.id">
          <router-link v-bind:to="link.to">{{ link.name }}</router-link>
        </li>
      </ul>
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
  components: {},
  data: () => {
    return {
      routerLinks: Array,
    };
  },
  created() {
    this.getRouterLinks();
  },
  methods: {
    getRouterLinks() {
      this.routerLinks = [
        { id: 0, name: '首页', to: '/' },
        { id: 1, name: '2D动画', to: '/2d' },
        { id: 2, name: '3D动画', to: '/3d' },
        { id: 3, name: 'CSS样式', to: '/css-effect' },
      ];
    },
  },
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
