<template>
  <section class="carousel_section">
    <el-carousel indicator-position="outside" :interval="3000" height="500px">
      <el-carousel-item v-for="(item, index) in items" :key="item">
        <h3>
          <img v-bind:src="item.imgurl">
        </h3>
      </el-carousel-item>
    </el-carousel>
  </section>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { name: 'img1', imgurl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2622791851,3413682450&fm=11&gp=0.jpg' },
        { name: 'img2', imgurl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2458723410,2414587313&fm=11&gp=0.jpg' },
        { name: 'img3', imgurl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=707768351,1585138445&fm=11&gp=0.jpg' },
        { name: 'img4', imgurl: 'http://ownp933hs.bkt.clouddn.com/Fga-asjD6DCIGCdMdjQoKqHf7Qc2' }
      ]
    }
  },
  methods: {

  }
}

</script>
<style>
.carousel_section {
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

.el-carousel {
  width: 100%;
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 500px;
  margin: 0;
}

.el-carousel__item h3>img {
  width: 100%;
  height:100%;
}


.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

</style>
