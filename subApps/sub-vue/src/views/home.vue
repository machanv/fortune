<template>
  <div class="container">
    <div class="">
      <card-content v-for="item of indexList" v-bind:content="item.content" v-bind:key="item.id"></card-content>
    </div>
  </div>
</template>

<script>
import CardContent from '../components/card-content';

export default {
  name: 'home',
  components: {CardContent},
  data: () => {
    return {
      indexList: Array
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
