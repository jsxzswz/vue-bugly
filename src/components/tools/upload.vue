<template>
  <section class="upload_section">
    <el-upload
    drag
    action="http://upload.qiniup.com/"
    multiple
    list-type="picture"
    :before-upload="beforeAvatarUpload"
    :on-success="handleAvatarSuccess"
    :data="postData">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传JPG格式的文件，且不超过2MB</div>
    </el-upload>
  </section>
</template>
<script>
export default {
  data() {
    return {
      postData: {
        token: '2ZhBJMXQMKe7nhTlR062v9m0sespjrovrJBivYfI:-IpQEiYydgj3Ff0WgcL0PfeRHXc=:eyJzY29wZSI6ImJ1Y2tldDAyIiwiZGVhZGxpbmUiOjE2MDk0MzAzOTl9'
      }
    }
  },
  methods: {
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是JPG格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过2MB!');
      }
      return isJPG && isLt2M;
    },
    handleAvatarSuccess(res, file) { //上传成功后在图片框显示图片
      //this.imageUrl = 'http://oq34prjoz.bkt.clouddn.com/' + res.key
      this.$message.info('上传成功!');
      console.log(res);
      console.log(file);
    }
  }
}

</script>
<style>
.upload_section {
  position: relative;
  margin-top: 100px;
  width: 100%;
  height: auto !important;
  min-height: 600px;
  display: flex;
  /*align-items:center;/*垂直居中*/
  justify-content: center;
  /*水平居中*/
}

.el-upload-list__item-name {
  float: left;
}

</style>
