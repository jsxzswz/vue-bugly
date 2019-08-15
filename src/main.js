// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import store from './vuex/store';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Mock from './mock'

Mock.init()
Vue.use(ElementUI)
NProgress.configure({ showSpinner: false })

router.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
});
