<template>
  <div class="shopdetail">
    <div class="top">
      <!-- style="margin-top:0.5rem;margin-left:0.3rem;" -->
      <div class="img">
        <van-image round width="1.32rem" height="1.32rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div class="btn">
        <van-button style="width:9.03rem;margin-left:0.3rem;" round icon="shop">唐山清鑫摄影店 ></van-button>
      </div>
    </div>
    <div class="content">
      <div class="img1">
        <span class="textt">婚纱摄影拍摄</span>
        <span class="textm">一生一次，一生精彩</span>
        <span class="textb" @click="jump">
          了解详情
          <img src="../assets/right.png" alt />
        </span>
        <span class="soldd"></span>
      </div>
      <div class="img2">
        <span class="textt">宝宝摄影拍摄</span>
        <span class="textm">留住美丽，从小照起</span>
        <span class="textb" @click="jump">
          了解详情
          <img src="../assets/right.png" alt />
        </span>
        <span class="soldd"></span>
      </div>
      <div class="img3">
        <span class="textt">写真摄影拍摄</span>
        <span class="textm">一个POSE，一生回忆</span>
        <span class="textb" @click="jump">
          了解详情
          <img src="../assets/right.png" alt />
        </span>
        <span class="soldd"></span>
      </div>
      <div class="img4">
        <span class="textt">全家福摄影拍摄</span>
        <span class="textm">和睦一家，幸福美满</span>
        <span class="textb" @click="jump">
          了解详情
          <img src="../assets/right.png" alt />
        </span>
        <span class="soldd"></span>
      </div>
    </div>
    <div class="foot">
      <van-tabbar v-model="active" active-color="#F85B3E" inactive-color="#000">
        <van-tabbar-item icon="wap-home" replace to="/shopDetails">清鑫优品</van-tabbar-item>
        <van-tabbar-item icon="label" replace to="/order">订单列表</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
      // icon: {
      //   active: 'https://img.yzcdn.cn/vant/user-active.png',
      //   inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      // }
    }
  },
  methods: {
    jump () {
      this.$router.push('/setList')
    }
  }
}
</script>

<style lang="less" scoped>
.shopdetail {
  font-size: 0.44rem;
  height: 138vh;
  span {
    display: block;
    margin-left: 0.81rem;
  }
  .top {
    // background: green;
    height: 2.32rem;
    display: flex;
    padding-left: 0.3rem;
    padding-top: 0.5rem;
    box-sizing: border-box;
  }
  .btn {
    font-size: 0.44rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }
  .content {
    margin-left: 0.3rem;
  }
  .img1 {
    background-image: url("../assets/1.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 10.65rem;
    height: 3.8rem;
    margin-bottom: 0.3rem;
    padding-top: 0.79rem;
  }
  .textt {
    font-size: 0.48rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }
  .textm {
    font-size: 0.36rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    margin-top: 0.3rem;
  }
  .textb {
    font-size: 0.4rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    margin-top: 0.77rem;
    position: relative;
    img {
      width: 0.44rem;
      height: 0.44rem;
      position: absolute;
      left: 1.7rem;
      bottom: 0.02rem;
    }
  }
  .soldd {
    width: 2.19rem;
    height: 0.04rem;
    background-color: #fff;
    margin-top: 0.17rem;
  }
  .img2 {
    background-image: url("../assets/2.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 10.65rem;
    height: 3.8rem;
    padding-top: 0.79rem;
    margin-bottom: 0.3rem;
  }
  .img3 {
    background-image: url("../assets/3.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 10.65rem;
    height: 3.8rem;
    padding-top: 0.79rem;
    margin-bottom: 0.3rem;
  }
  .img4 {
    background-image: url("../assets/4.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 10.65rem;
    height: 3.8rem;
    padding-top: 0.79rem;
    margin-bottom: 0.3rem;
  }
}
</style>
