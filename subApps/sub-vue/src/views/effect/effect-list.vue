<template>
  <div class="">
    <neon-light v-bind:button-text="buttonText"></neon-light>
  </div>
</template>

<script>
import NeonLight from './button/neon-light';

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
