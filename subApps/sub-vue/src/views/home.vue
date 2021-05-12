<template>
  <div>
    {{ count }}
  </div>
</template>

<script>
export default {
  name: 'home',
  data: () => {
    return {
      count: 0
    }
  }, methods: {
    increment() {
      this.count++;
    }
  }
}
</script>
