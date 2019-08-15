<template>
  <article class="login_content_article">
    <figure class="login_content_figure">
      <img src="../../assets/images/o_mylove.jpg" alt="img">
    </figure>
    <span class="login_content_span"></span>
    <div class="login_div">
     <!--  <header class="login_form_header">
        <nav>
          <li v-for="(item, index) in items">
            <router-link :to="'/pages/login/' + item.ad">{{item.name}}</router-link>
          </li>
        </nav>
      </header> -->
      <article class="login_form_article">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </article>
      <footer class="login_form_footer">
        <nav class="login_form_nav">
          <router-link to="/pages/login/passLogin">帐号密码登录</router-link>
          <span>|</span>
          <!-- <a href="https://ssl.zc.qq.com" target="_blank">注册新帐号</a> -->
          <router-link to="/pages/login/register">注册新帐号</router-link>
          <span>|</span>
          <!-- <a href="https://support.qq.com/products/14800" target="_blank">意见反馈</a> -->
          <router-link to="/pages/login/feedBack">意见反馈</router-link>
        </nav>
      </footer>
    </div>
  </article>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { name: '快速安全登录', ad: 'codeLogin' },
        { name: '帐号密码登录', ad: 'passLogin' }
      ]
    };
  },
  computed: {}
}

</script>
<style scoped>
@import '../../assets/css/login.css';

</style>
