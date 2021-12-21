<template>
  <header>
    <div class="logo-wrapper">
      <router-link to="/home">
        <img :src="logo" class="logo" />
      </router-link>
    </div>
    <ul>
      <li v-for="item of navList" :key="item.id">
        <router-link :to="item.link">{{ item.name }}</router-link>
      </li>
    </ul>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item :index="item.id" v-for="item of navList" :key="item.id">
        <router-link :to="item.link">{{ item.name }}</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">1</template>
        <el-menu-item index="2-1">2</el-menu-item>
        <el-menu-item index="2-2">3</el-menu-item>
        <el-menu-item index="2-3">4</el-menu-item>
      </el-submenu>
    </el-menu>
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
      activeIndex: '1',
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
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style>
/* header {
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
} */
</style>
