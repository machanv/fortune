<template>
  <header>
    <ul>
      <li v-for="item of navList" :key="item.id">
        <router-link :to="item.link">{{ item.name }}</router-link>
      </li>
    </ul>
  </header>
</template>
<script>
import axios from 'axios';
import GlobalServer from '../global-server';

export default {
  data() {
    return {
      navList: Array,
    };
  },
  created() {
    this.getRouterLinks();
  },
  methods: {
    async getRouterLinks() {
      await axios.get(GlobalServer + '/nav-list').then((res) => {
        if (res && res.data) {
          this.navList = res.data;
        }
      });
    },
  },
};
</script>
<style>
header {
  height: 50px;
}
header ul {
}
header ul li {
  display: inline-flex;
  padding: 1rem;
}
</style>
