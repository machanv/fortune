<template>
  <div class="container">
    <ul>
      <li v-on:click="toggleWaterFall(true)">water fall</li>
      <li v-on:click="toggleWaterFall(false)">list</li>
    </ul>
    <div class="" v-if="!showWaterFall">
      <card-content v-for="item of indexList" v-bind:content="item.content" v-bind:key="item.id"></card-content>
    </div>
    <div class="" v-if="showWaterFall">
      <water-fall v-bind:dataList="indexList"></water-fall>
    </div>
  </div>
</template>

<script>
import CardContent from '../components/card-content';
import WaterFall from '../components/water-fall/water-fall';

export default {
  name: 'home',
  components: {CardContent, WaterFall},
  data: () => {
    return {
      indexList: [],
      showWaterFall: true
    }
  },
  created() {
    this.getInfoList();
  },
  methods: {
    getInfoList: function () {
      const url = 'http://localhost:8080/values/index-list.json';
      this.$http.get(url).then(res => {
        if (res) {
          this.indexList = res;
        }
      })
    },
    toggleWaterFall(show) {
      this.showWaterFall = show;
    }
  }
}
</script>
<style scoped>
@media screen and (min-width: 1200px) {
  .container {
    margin: 0 auto;
    width: 1200px;
  }
}

</style>
