<template>
<div>
  <ul class="result-list">
    <transition-group name="list"     v-bind:css="false" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave">
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
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, height: '28px' },
          { complete: done }
        );
      }, delay);
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        );
      }, delay);
    }
  }
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
/* .list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
} */
</style>

