<template>
  <section class="changePwd_section">
    <el-row class="warp">
      <el-col :span="24" class="warp-breadcrum">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>
          <el-breadcrumb-item>设置</el-breadcrumb-item>
          <el-breadcrumb-item>修改密码</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="24" class="warp-main">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
          <el-form-item label="原密码" prop="oldPwd">
            <el-input type="password" v-model="ruleForm.oldPwd" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPwd">
            <el-input type="password" v-model="ruleForm.newPwd" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="confirmPwd">
            <el-input type="password" v-model="ruleForm.confirmPwd" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </section>
</template>
<script>
export default {
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.confirmPwd !== '') {
          this.$refs.ruleForm.validateField('confirmPwd');
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.newPwd) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        oldPwd: '',
        newPwd: '',
        confirmPwd: ''
      },
      rules: {
        oldPwd: [
          { validator: validatePass, trigger: 'blur' },
          { min: 8, max: 16, message: '密码长度在8到16个字符', trigger: 'blur' }
        ],
        newPwd: [
          { validator: validatePass, trigger: 'blur' },
          { min: 8, max: 16, message: '密码长度在8到16个字符', trigger: 'blur' }
        ],
        confirmPwd: [
          { min: 8, max: 16, message: '密码长度在8到16个字符', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: "该功能正在完善！",
            type: 'success',
            duration: 2000 //默认3s太长
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}

</script>
<style>
.changePwd_section {
  position: relative;
  margin-top: 60px;
  width: 100%;
  height: auto !important;
  min-height: 600px;
  display: flex;
  align-items: center;
  /*垂直居中*/
  justify-content: center;
  /*水平居中*/
}
.warp {
  width: 60%;
}

</style>
