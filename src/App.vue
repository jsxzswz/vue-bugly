<template>
  <div id="app">
    <!-- 头部 -->
    <my-head></my-head>
    <!-- 主体页面 -->
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- 底部 -->
    <my-foot></my-foot>
  </div>
</template>
<script>
import myHead from './components/common/header';
import myFoot from './components/common/footer';

export default {
  name: 'app',
  components: {
    myHead,
    myFoot
  },
  computed: {
    
  }
}

</script>
<style>
@import './assets/css/main.css';
/*fade*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
/*slide-dade*/
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
