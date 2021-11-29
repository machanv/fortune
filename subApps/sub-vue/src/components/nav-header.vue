<template>
  <header>
    <div class="logo-wrapper">
      <router-link to="/home/index">
        <img :src="logo" class="logo" />
      </router-link>
    </div>
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
import logoImg from '../../public/images/logo.png';

export default {
  data() {
    return {
      navList: Array,
      logo: logoImg,
    };
  },
  created() {
    this.getRouterLinks();
  },
  methods: {
    async getRouterLinks() {
      await axios.get(GlobalServer + '/nav-list').then((res) => {
        if (res && res.data) {
          this.navList = res.data.data;
        }
      });
    },
  },
};
</script>
<style>
header {
  height: 50px;
  display: grid;
  grid-template-columns: 4.5rem auto;
}
.logo-wrapper {
  padding: 1rem;
}
.logo {
  width: 2.5rem;
}
header ul {
}
header ul li {
  display: inline-flex;
  padding: 1rem;
}
</style>
