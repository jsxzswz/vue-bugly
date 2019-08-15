<template>
  <article class="user_content_article">
    <el-row class="warp">
      <el-col :span="24" class="warp-main">
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
          <el-form :inline="true" :model="filters">
            <el-form-item>
              <el-input v-model="filters.name" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" v-on:click="getUsers">查询</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <!--列表-->
        <el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column type="index" width="60"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
          <el-table-column prop="sex" label="性别" width="100" :formatter="formatSex"></el-table-column>
          <el-table-column prop="age" label="年龄" width="100" sortable></el-table-column>
          <el-table-column prop="birth" label="生日" width="120" sortable></el-table-column>
          <el-table-column prop="addr" label="地址" min-width="180" sortable></el-table-column>
        </el-table>
        <!--工具条-->
        <el-col :span="24" class="toolbar">
          <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="10" :total="total" style="float:right;">
          </el-pagination>
        </el-col>
      </el-col>
    </el-row>
  </article>
</template>
<script>
import util from '../../util/util'
import api from '../../fetch/api'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default {
  data() {
    return {
      filters: {
        name: ''
      },
      users: [],
      total: 0,
      page: 1,
      listLoading: false,
      sels: [], //列表选中列
    }
  },
  methods: {
    //性别显示转换
    formatSex: function(row, column) {
      return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getUsers();
    },
    //获取用户列表
    getUsers() {
      let para = {
        page: this.page,
        name: this.filters.name
      };
      this.listLoading = true;
      NProgress.start();
      api.reqGetUserListPage(para).then((res) => {
        console.log(res);
        let {total,users}= res;
        this.total = total;
        this.users = users;
        this.listLoading = false;
        NProgress.done();
      })
    },
    selsChange: function(sels) {
      this.sels = sels;
    }
  },
  mounted() {
    this.getUsers();
  }
}

</script>
<style scoped>
.user_content_article {
  position: relative;
  margin-top: 80px;
  margin-bottom: 30px;
  width: 100%;
  height: auto !important;
  min-height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.warp {
  height: auto !important;
  min-height: 520px;
}

.warp-breadcrum {
  padding: 10px 0px;
  margin-bottom: 20px;
  border-bottom: 1px solid #efefef;
}

.toolbar {
  margin-top: 10px;
}

.demo-table-expand label {
  font-weight: bold;
}

</style>
