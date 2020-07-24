<template>
  <div class="setList">
    <div class="card" @click="jump">
      <div class="img">
        <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt />
      </div>
      <div class="text">
        <span class="textt">巴厘岛{机票补贴}+送别墅酒店+送婚 纱+24接机</span>
        <span class="textb">￥6000</span>
      </div>
    </div>
    <div class="card" @click="jump">
      <div class="img">
        <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt />
      </div>
      <div class="text">
        <span class="textt">【格蕾丝系列】三天拍摄+样片级团队 一对一服务</span>
        <span class="textb">￥6000</span>
      </div>
    </div>
    <div class="card" @click="jump">
      <div class="img">
        <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt />
      </div>
      <div class="text">
        <span class="textt">【格蕾丝系列】三天拍摄+样片级团队 一对一服务</span>
        <span class="textb">￥6000</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    jump () {
      this.$router.push('/productDetails')
    }
  }
}
</script>

<style lang="less" scoped>
.setList {
  //   box-sizing: border-box;
  font-size: 0.44rem;
  padding-top: 0.3rem;
  padding-left: 0.3rem;
  background-color: #f4f1f4;
  height: 98.5vh;
  .card {
    box-sizing: border-box;
    width: 10.65rem;
    height: 3.3rem;
    background-color: #fff;
    padding: 0.51rem 0 0 0.51rem;
    display: flex;
    margin-bottom: 0.3rem;
  }
  .img {
    width: 2.3rem;
    height: 2.3rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text {
    position: relative;
  }
  .textt {
    display: block;
    font-size: 0.44rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin-left: 0.26rem;
    padding-right: 0.2rem;
  }
  .textb {
    display: block;
    font-size: 0.6rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(236, 1, 1, 1);
    position: absolute;
    right: 0.5rem;
    bottom: 0.51rem;
  }
}
</style>
