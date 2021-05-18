<template>
  <div class="container">
    <div>
      <p> {{ count }}</p>
      <button v-on:click="increment">+</button>
      <button v-on:click="decrement">-</button>
    </div>
    <div><p>输入每次变化的数值：</p><input type="number" v-model="num"/></div>
    <div>
      <p>{{ username }}</p>
      <input type="text" v-model="username" v-bind:input="valueChanged"/>
    </div>
    <div>
      <button v-on:click="doAction">action</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex';

export default {
  name: 'home',
  data: () => {
    return {
      username: 'voila',
      num: 1,
    }
  },
  computed: {
    ...mapState({
      count: 'count', num: 'num'
    })
  },
  methods: {
    ...mapActions({
      add: 'incrementBy'
    }),
    ...mapMutations({
      increment: 'increment',
      decrement: 'decrement',
      getUsername: 'getUsername'
    }),
    /** 在文本框中输入数值，点击+、- 按钮，增加或者删除对应的数值
     * */
    valueChanged() {
      this.$store.commit('getUsername', this.name);
      // this.name = this.returnValue('username');
    },
    doAction() {
      this.$store.dispatch('actionA').then(res => {
        if (res) {
          console.log(res);
        }
      })
    }
    /* returnValue(value) {
       return this.$store.state[value];
     }*/
  }
}
</script>
