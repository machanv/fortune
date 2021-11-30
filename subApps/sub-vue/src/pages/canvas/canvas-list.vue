<template>
  <div>
    <div v-for="item in canvasList" :key="item.id">
      <CardComponent v-bind="item" />
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import GlobalServer from '../../global-server';
import CardComponent from '../../components/card.vue';
export default {
  components: {
    CardComponent,
  },
  data() {
    return {
      canvasList: Array,
    };
  },
  created() {
    this.getCanvasList();
  },
  methods: {
    async getCanvasList() {
      await axios.get(GlobalServer + '/canvas/find').then((res) => {
        if (res && res.data) {
          this.canvasList = res.data.data;
        }
      });
    },
  },
};
</script>
