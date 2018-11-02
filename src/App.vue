<template>
  <div id="app">
    <div class="first"></div>
    <div class="">
      <img :src="logo" alt="" class="logo" :class="{'logo-active': this.searched }">
      <input class="search-input" :class="{'search-input-active':this.searched }" type="text" v-model="search">
      <div class="source">数据来源：<a href="http://renxufeng.ys168.com/">http://renxufeng.ys168.com/</a></div>   
      <div class="result-count" v-if="this.searched">共<span>{{lists.length}}</span>条结果</div>
      <List :lists="lists"/>
    </div>
    <div class="second"></div>
  </div>
</template>

<script>
import lists from './data.js';
import List from './components/List.vue';
import logo from './assets/logo.png'
export default {
  name: 'app',
  data() {
    return {
      search: '',
      searched: false,
      logo,
    }
  },
  components: {
    List,
  },
  methods: {
  },
  computed: {
    lists() {
      return this.search? lists.filter(d => d.text.indexOf(this.search)> -1): this.searched? lists :[];
    }
  },
  watch: {
    search: function(val) {
      if (val) {
        this.searched = true;
      }
    }
  },
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.logo {
  display: block;
  margin: 0 auto 20px;
  width: 555px;
  transition: width 1s, margin-bottom 1s;
}
.logo-active {
  width: 430px;
  margin-bottom: 15px;
  transition: width 1s, margin-bottom 1s;
}
.first {
  flex-grow: 4;
}
.second {
  flex-grow: 6;
}

.search-input {
  width: 584px;
  height: 44px;
  padding: 5px 20px;
  box-sizing: border-box;
  border-radius: 4px;
  border: #7F8C8D 1px solid;
  margin:  0 auto;
  display: block;
  transition: width 1s, height 1s;
}
.search-input-active {
  width: 450px;
  height: 40px;
  transition: width 1s, height 1s;
}
.search-input:focus {
  border: #42B983 1px solid;
  outline: none;
}
.source {
  text-align: center;
  font-size: 12px;
  color: #42B983;
  margin-top: 5px;
}
.source a {
  color: #42B983;
}
.result-count {
  text-align: center;
  color: #7F8C8D;
  line-height: 40px;
  margin-bottom: 10px;
}
.result-count  span {
  color: #3FAB89;
}
</style>
