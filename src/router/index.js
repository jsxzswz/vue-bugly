import Vue from 'vue';
import VueRouter from 'vue-router';
import Page404 from '@/pages/404';
import Bars from '@/pages/echarts/bar';
import Pies from '@/pages/echarts/pie';
import Maps from '@/pages/echarts/map';
import Upload from '@/components/tools/upload';
import Carousel from '@/components/tools/carousel';
import Index from '@/pages/home/index';
import Login from '@/pages/login/login';
import CodeLogin from '@/pages/login/codeLogin';
import PassLogin from '@/pages/login/passLogin';
import BookList from '@/pages/book/list';
import UserList from '@/pages/user/list';
import Profile from '@/pages/user/profile';
import ChangePwd from '@/pages/user/changePwd';

Vue.use(VueRouter);

const routes = [
  { path: '*', redirect: '/404', hidden: true },
  { path: '/404', component: Page404, hidden: true },
  { path: '/', redirect: '/pages/index' },
  { path: '/pages/index', component: Index },
  {
    path: '/pages/login',
    component: Login,
    children: [
      { path: 'codeLogin', component: CodeLogin },
      { path: 'passLogin', component: PassLogin }
    ]
  },
  { path: '/pages/echarts/bar', component: Bars },
  { path: '/pages/echarts/pie', component: Pies },
  { path: '/pages/echarts/map', component: Maps },
  { path: '/pages/upload', component: Upload },
  { path: '/pages/carousel', component: Carousel },
  { path: '/pages/book/list', component: BookList },
  { path: '/pages/user/list', component: UserList },
  { path: '/pages/user/profile', component: Profile },
  { path: '/pages/user/changePwd', component: ChangePwd }
]

export default new VueRouter({
  mode: 'history',
  base: 'Bugly',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
