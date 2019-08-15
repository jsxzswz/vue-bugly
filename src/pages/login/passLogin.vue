<template>
  <!-- <div class="login_form">
    <form id="pass_login_form" action="" method="">
      <input class="inputstyle" type="text" name="username" v-model="username" placeholder="支持手机号/邮箱登录">
      <input class="inputstyle" type="password" name="password" v-model="password" placeholder="请输入密码">
      <input class="login_btn" type="button" @click="_login" value="登录">
    </form>
  </div> -->
  <div class="login_form">
    <header class="passlogin_form_header">
      <div>帐号密码登录</div>
      <p>推荐使用</p>
      <router-link to="/pages/login/codeLogin">快速安全登录</router-link>
      <p>，防止盗号。</p>
    </header>
    <el-form id="pass_login_form" ref="AccountFrom" :model="account" :rules="rules" label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <el-form-item prop="username" style="width:100%;">
        <el-input type="text" v-model="account.username" auto-complete="off" placeholder="请输入用户名" icon="close" :on-icon-click="deleteInput"></el-input>
      </el-form-item>
      <el-form-item prop="pwd" style="width:100%;">
        <el-input :type="inputType" v-model="account.pwd" auto-complete="off" placeholder="请输入密码" icon="view" :on-icon-click="showPwd"></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin" :loading="logining">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import api from '../../fetch/api'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default {   

  data() {
    return {
      inputType: 'password',
      isPwd: false,
      logining: false,
      account: {
        username: '',
        pwd: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 2, max: 4, message: '用户名长度为2到4位', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 8, max: 16, message: '密码长度在8到16个字符', trigger: 'blur' }
        ]
      },
      checked: true
    };
  },
  methods: {
    ...mapActions({ setUserInfo: 'setUserInfo' }),

    deleteInput() {
      this.account.username = '';
    },
    showPwd() {
      let isPwd = this.isPwd;
      if (!isPwd) {
        this.inputType = 'text';
        this.isPwd = !this.isPwd;
      } else {
        this.inputType = 'password';
        this.isPwd = !this.isPwd
      }
    },
    handleLogin() {
      this.$refs.AccountFrom.validate((valid) => {
        if (valid) {
          this.logining = true;
          NProgress.start();
          var loginParams = { username: this.account.username, password: this.account.pwd };
          api.reqLogin(loginParams).then((res) => {
            console.log(res);
            let {code,msg,user} =res; 
            if (code !== 200) {
              this.$message({
                message: msg,
                type: 'error'
              });
              this.logining = false;
              NProgress.done();
            } else {
              delete(user['password']);
              this.setUserInfo(user);
              this.$router.replace('/pages/book/list');
            }
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
  mounted() {
    this.$notify.info({
      title: '消息',
      message: '用户名:swz 密码：swz123456',
      offset: 50
      // duration: 0
    });
  }
}

</script>
<style scoped>
@import '../../assets/css/login.css';

</style>
