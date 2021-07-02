<template>
  <div class="container">
    <div class="">
      <card-content v-for="item of indexList" v-bind:content="item" v-bind:key="item.id"></card-content>
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
    getInfoList() {
      this.indexList = [
        {
          id: 0, contentTitle: 'canvas', desc: 'canvas', infoList: [
            {id: '01', title: '霓虹灯效果按钮', img: ''},
            {id: '02', title: 'er456265', img: ''},
            {id: '03', title: 'er456265', img: ''},
            {id: '04', title: 'er456265', img: ''},
            {id: '05', title: 'er456265', img: ''},
            {id: '06', title: 'er456265', img: ''},
          ]
        }, {
          id: 2, contentTitle: '3D', desc: '', infoList: [
            {id: '01', title: '霓虹灯效果按钮', img: ''},
            {id: '02', title: 'er456265', img: ''},
            {id: '03', title: 'er456265', img: ''},
          ]
        }
      ]
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
