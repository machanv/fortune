<template>
  <div></div>
</template>
<script>
export default {
  name: "common-canvas",
  props: {
    info: Object,
    initCounter: Number,
    author: Person,
  },
  data: () => {
    return {
      counter: this.initCounter,
    };
  },
  computed: {},
  method: {},
};

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
</script>
