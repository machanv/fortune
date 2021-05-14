<template>
  <div class="container">
    <div>
      <p> {{ count }}</p>
      <button v-on:click="increment">+</button>
      <button v-on:click="decrement">-</button>
    </div>
    <div>
      <p>{{ name }}</p>
      <input type="text" v-model="name" v-on:keypress="valueChanged"/>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'home',
  data: () => {
    return {}
  },
  computed: {
    ...mapState({
      count: 'count',
      name: 'username',

    })
  },
  methods: {
    increment() {
      this.$store.commit('increment');
      this.count = this.returnValue('name');
    },
    decrement() {
      this.$store.commit('decrement');
      this.count = this.returnValue('name');
    },

    returnValue(value) {
      return this.$store.state[value];
    }
  }
}
</script>
