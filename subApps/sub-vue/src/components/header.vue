<template>
  <header>
    <ul>
      <li v-for="link of navList" v-bind:key="link.id">
        <router-link v-bind:to="link.to">{{ link.name }}</router-link>
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
    getRouterLinks() {
      axios.get(GlobalServer + '/nav-list').then(res => {
        if (res && res.data) {
          console.log(res);
        }
      })
    },
  },
};
</script>
<style>
header {
  height: 50px;
}
</style>
