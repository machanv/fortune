<template>
  <div class="water-fall-wrapper">
    <div v-for="item of data" v-bind:key="item.id" class="list-item" ref="listItem">
      <div class="image" v-bind:style="{height:item.height}">
        <img v-bind:src="item.img"/>
      </div>
      <div class="info">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "water-fall",
  props: {
    dataList: {type: Array, require: true}
  },
  data: () => {
    return {
      data: Array
    }
  },
  mounted() {
    this.waterFall()
  },
  methods: {
    waterFall() {
      //todo
      let arr = [],
          list = [];
      arr = this.dataList.map(item => item.content);
      arr.forEach(node => {
        list = list.concat(node.infoList);
      })
      const items = this.$refs.listItem;
      console.log(items);
    }
  }
}
</script>

<style scoped>
.water-fall-wrapper {
  position: relative;
}

.list-item {

}

.image {
}

.info {

}
</style>
