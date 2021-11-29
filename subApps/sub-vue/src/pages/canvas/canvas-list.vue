<template>
  <div></div>
</template>
<script>
import axios from 'axios';
import GlobalServer from '../../global-server';

export default {
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
