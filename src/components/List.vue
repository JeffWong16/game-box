<template>
<div>
  <ul class="result-list">
    <transition-group name="list">
      <li v-for="item in lists" :key="item.href"><a :href="item.href">{{item.text}}</a></li>
    </transition-group>
  </ul>
</div>
</template>
<script>

export default {
  props: {
    lists: {
      type: Array,
      default: function() {
        return []
      },
    }
  },
}
</script>
<style scoped>
.result-list {
  width: 1000px;
  margin: 0 auto;
  text-align: center;
  list-style: none;
}
.result-list a {
  color: #42B983;
  line-height: 28px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  transition: all 1s;
}
</style>

