<template>
  <div class="">
    <neon-light v-bind:button-text="buttonText"></neon-light>
  </div>
</template>

<script>
import NeonLight from '../../components/btns/neon-light';

export default {
  name: "effect-list",
  components: {NeonLight},
  data: () => {
    return {
      buttonText: 'Neon Button'
    }
  }
}
</script>

<style scoped>

</style>
