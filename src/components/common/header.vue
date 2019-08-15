<template>
  <header class="main-header">
    <div class="top-bar clearfix">
      <div class="topbar-nav-left">
        <ul class="nav-wrap">
          <li class="nav">
            <router-link to="/">Bugly</router-link>
          </li>
        </ul>
      </div>
      <nav class="topbar-nav-right">
        <ul>
          <li class="nav" v-for="(item, index) in items">
            <router-link :to="'/pages/' + item.ad">{{item.name}}</router-link>
          </li>
          <li class="nav">
            <el-dropdown>
              <router-link class="el-dropdown-link" to="/pages/echarts/bar">图表</router-link>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <router-link to="/pages/echarts/bar">柱状图</router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link to="/pages/echarts/pie">饼图</router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link to="/pages/echarts/map">地图</router-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li class="nav" v-if="loginStatus">
            <router-link to="/pages/upload">上传</router-link>
          </li>
          <li class="nav" v-if="loginStatus">
            <el-dropdown>
              <router-link class="el-dropdown-link" to="/pages/book/list">列表</router-link>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <router-link to="/pages/book/list">图书列表</router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link to="/pages/user/list">用户列表</router-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li class="nav" v-if="!loginStatus">
            <router-link to="/pages/login/codeLogin" style="margin-left: 10px;">登录</router-link>
          </li>
          <li class="userinfo" v-else>
            <el-dropdown>
              <span class="el-dropdown-link userinfo-inner">
              <i class="iconfont icon-user"></i>{{userInfo.name}}
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <router-link to="/pages/user/profile">个人信息</router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link to="/pages/user/changePwd">修改密码</router-link>
                </el-dropdown-item>
                <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      items: [
        { name: '首页', ad: 'index' },
        { name: '走马灯', ad: 'carousel' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'loginStatus',
      'userInfo'
    ])
  },
  methods: {
    ...mapActions({ setSignOut: 'setSignOut' }),
    logout() {
      this.$confirm('确认退出吗?', '提示', {
        //type: 'warning'
      }).then(() => {
        this.setSignOut()
        this.$router.replace('/')
      }).catch(() => {

      });
    }
  },
  mounted() {
    // let user = sessionStorage.getItem('userInfo');
    // console.log(user);
    // if (user) {
    //   user = JSON.parse(user);
    //   this.userName = user.username || '';
    // }
  }
}

</script>
<style scoped>
@import '../../assets/css/main.css';
@import '../../assets/fonts/iconfont.css';

.el-dropdown>a {
  margin: 0 5px;
}

</style>
