import axios from 'axios'
import qs from 'qs'
import {Message} from 'element-ui'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:8085/Bugly/';

// 传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  if (config.method === 'get') {
    config.params = { ...config.params }
  }
  return config;
}, (error) => {
  Message.error({message: '请求超时!'});
  return Promise.reject(error);
});

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  if (res.status && res.status == 200 && res.data.status == 'error') {
    Message.error({message: res.data.msg});
    return;
  }
  return res;
}, (err) => {
  if (err.response.status == 504||err.response.status == 404) {
    Message.error({message: '服务器被吃了⊙﹏⊙∥'});
  } else if (err.response.status == 403) {
    Message.error({message: '权限不足,请联系管理员!'});
  }else {
    Message.error({message: '未知错误!'});
  }
  return Promise.reject(error);
});

// 返回一个Promise(发送post请求)
const fetch_post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

// 返回一个Promise(发送get请求)
const fetch_get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: params })
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

//获取图书(get方式)
const reqGetBookListPage1 = params => fetch_get('/book/list', params)
//获取图书（post方式）
const reqGetBookListPage = params => fetch_post('/book/list', params)
// 删除图书
const reqDeleteBook = params => fetch_get('/book/delete', params)
// 编辑图书
const reqEditBook = params => fetch_get('/book/edit', params)
// 批量删除图书
const reqBatchDeleteBook = params => fetch_get('/book/batchdelete', params)
// 添加图书
const reqAddBook = params => fetch_get('/book/add', params)
//获取用户列表
const reqGetUserListPage = params => fetch_get('/user/list', params)
//修改个人信息
const reqSaveUserProfile = params => fetch_get('/user/profile', params)
//登录
const reqLogin = params => fetch_post('/login', params)

export default {
  reqGetBookListPage1,
  reqGetBookListPage,
  reqDeleteBook,
  reqEditBook,
  reqBatchDeleteBook,
  reqAddBook,
  reqGetUserListPage,
  reqSaveUserProfile,
  reqLogin
}