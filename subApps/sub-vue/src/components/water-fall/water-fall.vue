<template>
  <div class="water-fall-wrapper" ref="container">
    <div v-for="item of data" v-bind:key="item.id" class="list-item" ref="listItem">
      <div class="item-container">
        <div class="image" v-bind:style="{height:item.height}">
          <img v-bind:src="item.img"/>
        </div>
        <div class="info">{{ item.title }}</div>
      </div>
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
  created() {
    this.formatData()
  },
  mounted() {
    this.waterFall()
  },
  methods: {
    formatData() {
      let arr = [],
          list = [];
      arr = this.dataList.map(item => item.content);
      arr.forEach(node => {
        list = list.concat(node.infoList);
      })
      this.data = [...list];
    },
    waterFall() {
      const container = this.$refs.container;
      const items = this.$refs.listItem;
      if (container && items) {
        const containerWidth = container.clientWidth;
        const split = containerWidth / items[0].clientWidth;
        const heightArr = new Array(split).fill(0);
        let imgIndex = 0;
        items.forEach((item, index) => {
          const width = item.clientWidth;
          const height = item.clientHeight;
          imgIndex = 0;
          if (index >= split) {
            let min = heightArr[0];

            for (let i = 0; i < heightArr.length; i++) {
              let cur = heightArr[i];
              if (min > cur) {
                min = cur;
                imgIndex = i;
              }
            }

            item.style.top = min + 20 + 'px';
            item.style.left = imgIndex * width + 'px';
            console.log('最小值:', min, imgIndex);
          } else {
            imgIndex = index % split;
            item.style.left = imgIndex * width + 'px';
          }

          heightArr[imgIndex] = heightArr[imgIndex] + height;
        })
      }
    }
  }
}
</script>

<style scoped>
@import "../../assets/styles/style.less";

.water-fall-wrapper {
  position: relative;
}

.list-item {
  position: absolute;
  width: 24rem;
  margin: 1rem;
  padding-right: 2rem;
  transition: 1s;
}

.list-item .item-container {
  border-radius: 0.75rem;
  box-shadow: 0 0 0.1rem 0.1rem #eeeeee;
  overflow: hidden;
}

.item-container:hover {
  border: 1px dashed #e2a5ad;
  box-shadow: 0 0 0.5rem 0.5rem #eeeeee;
}

.image {
  width: 100%;
}

.image img {
  width: 100%;
  height: auto;
  cursor: pointer;
}

.info {
  width: 100%;
  padding: 0.5rem 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 2;
}
</style>
