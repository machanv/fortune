<template>
  <div>
    <navHeader></navHeader>
    <router-view></router-view>
    <commonFooter></commonFooter>
  </div>
</template>
<script>
import navHeader from '../../components/nav-header.vue';
import commonFooter from '../../components/common-footer.vue';

export default {
  components: { navHeader, commonFooter },
};
</script>
