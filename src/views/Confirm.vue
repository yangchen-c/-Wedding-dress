<template>
  <div class="confirm">
    <div class="bg">
      <div class="bgt">待预约</div>
      <div class="bgb">请您在15分钟内完成预约</div>
    </div>
    <div class="card">
      <div class="btn">
        <van-icon name="shop" size="0.45rem" />
        <span style="margin-left:0.3rem;">唐山清鑫摄影店 ></span>
      </div>
      <div class="content">
        <div class="img">
          <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt />
        </div>
        <div class="text">
          <span class="textt">【格蕾丝系列】三天拍摄+样片级团队 一对一服务</span>
          <span class="textb">￥6000</span>
        </div>
      </div>
    </div>
    <div class="form">
      <van-form @submit="onSubmit">
        <div style="margin-bottom:0.5rem">
          <span class="vertical"></span>
          <span class="vertical1">填写信息</span>
        </div>
        <van-field
          v-model="username"
          name="用户名"
          label="姓名"
          placeholder="点击输入"
          :rules="[{ required: true, message: '请填写姓名' }]"
        />
        <van-field
          v-model="password"
          name="电话"
          label="电话"
          placeholder="点击输入"
          :rules="[{ required: true, message: '请填写电话号码' }]"
        />
        <van-field v-model="birthday" type="date" name="生日" label="生日" placeholder="点击选择" />
        <van-field v-model="address" type="address" name="住址" label="住址" placeholder="点击输入" />
        <van-field v-model="hdate" type="date" name="婚期" label="婚期" placeholder="点击选择" />
        <van-field
          v-model="wechat"
          type="wechat"
          name="微信号"
          label="微信号"
          placeholder="点击输入"
          :rules="[{ required: true, message: '请填写微信号' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="warning" native-type="submit">确认预约</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      birthday: '',
      address: '',
      hdate: '',
      wechat: ''
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
      this.$router.push('./advance')
    }
  }
}
</script>

<style lang="less" scoped>
.confirm {
  font-size: 0.44rem;
  position: relative;
  background-color: #f4f1f4;
  height: 22rem;
  .bg {
    box-sizing: border-box;
    height: 6.155rem;
    width: 100%;
    background-image: url("../assets/roundbg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-left: 0.3rem;
    padding-top: 1.02rem;
  }
  .bgt {
    font-size: 0.54rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }
  .bgb {
    font-size: 0.44rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    margin-top: 0.3rem;
  }
  .card {
    // background-color: red;
    background-color: #fff;
    width: 10.65rem;
    height: 4.78rem;
    margin-left: 0.3rem;
    position: absolute;
    top: 3.26rem;
    box-sizing: border-box;
    padding: 0.5rem;
  }
  .btn {
    height: 0.8rem;
    font-size: 0.44rem;
    border-bottom: 0.01rem dashed #ccc;
  }
  .content {
    display: flex;
  }
  .img {
    width: 2.3rem;
    height: 2.3rem;
    margin-top: 0.5rem;
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
    margin-top: 0.5rem;
  }
  .textb {
    display: block;
    font-size: 0.6rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(236, 1, 1, 1);
    right: 0rem;
    bottom: 0.3rem;
    margin-top: 0.5rem;
    position: absolute;
  }
  .form {
    box-sizing: border-box;
    padding: 0.3rem;
    position: absolute;
    top: 8.34rem;
    width: 11.25rem;
    // height: 9.82rem;
  }
  .vertical {
    display: inline-block;
    width: 0.1rem;
    height: 0.51rem;
    background: rgba(255, 132, 0, 1);
    border-radius: 0.05rem;
  }
  .vertical1 {
    font-size: 0.54rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(255, 132, 0, 1);
    margin-left: 0.3rem;
  }
}
</style>
