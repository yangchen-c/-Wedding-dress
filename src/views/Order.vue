// 我的订单
<template>
  <div class="order">
    <van-tabs v-model="activeName">
      <van-tab title="预约订单" name="a">
        <div class="card">
          <div class="btn">
            <van-button
              @click="jump"
              style="width:9.03rem;margin-left:0.3rem;"
              icon="shop"
            >唐山清鑫摄影店 ></van-button>
          </div>
          <div class="content">
            <div class="img">
              <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt />
            </div>
            <div class="text">
              <span class="textt">【格蕾丝系列】三天拍摄+样片级团队 一对一服务</span>
              <span class="textb">￥6000</span>
              <span class="foot">
                <van-button plain size="small" round type="warning" @click="dialog">取消预约</van-button>
              </span>
            </div>
          </div>
        </div>
        <van-divider />
        <div class="card">
          <div class="btn">
            <van-button @click="jump" style="width:9.03rem;margin-left:0.3rem;" icon="shop">杨小羊摄影店 ></van-button>
          </div>
          <div class="content">
            <div class="img">
              <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt />
            </div>
            <div class="text">
              <span class="textt">【格蕾丝系列】三天拍摄+样片级团队 一对一服务</span>
              <span class="textb">￥6000</span>
              <span class="foot">
                <van-button plain size="small" round type="warning" @click="dialog">取消预约</van-button>
              </span>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="拍摄订单" name="b">
        <div class="card">
          <div class="btn1">
            <van-icon name="shop" />
            <span @click="jump" style="margin-left:0.3rem;">唐山清鑫摄影店 ></span>
            <span style="color:#259AE4;margin-left:3.1rem">电子预约单</span>
          </div>
          <div class="content">
            <div class="img">
              <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt />
            </div>
            <div class="text">
              <span class="textt">【格蕾丝系列】三天拍摄+样片级团队 一对一服务</span>
              <span class="textb">￥6000</span>
              <span class="foot">
                <span @click="look" style="color:#FF8400;">查看进度 ></span>
              </span>
            </div>
          </div>
        </div>
        <van-divider />
        <div class="card">
          <div class="btn1">
            <van-icon name="shop" />
            <span @click="jump" style="margin-left:0.3rem;">杨小羊摄影店 ></span>
            <span style="color:#259AE4;margin-left:3.1rem">电子预约单</span>
          </div>
          <div class="content">
            <div class="img">
              <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt />
            </div>
            <div class="text">
              <span class="textt">【格蕾丝系列】三天拍摄+样片级团队 一对一服务</span>
              <span class="textb">￥6000</span>
              <span class="foot">
                <span @click="look" style="color:#FF8400;">查看进度 ></span>
              </span>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <div class="foot">
      <van-tabbar v-model="active" active-color="#F85B3E" inactive-color="#000">
        <van-tabbar-item icon="wap-home" replace to="/shopDetails">清鑫优品</van-tabbar-item>
        <van-tabbar-item icon="label" replace to="/order">订单列表</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  data () {
    return {
      activeName: 'a',
      active: 1
    }
  },
  methods: {
    dialog () {
      Dialog.confirm({
        message: '您确定取消预约吗'
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        })
    },
    jump () {
      this.$router.push('/shopDetails')
    },
    look () {
      this.$router.push('/progress')
    }
  }
}
</script>

<style lang="less" scoped>
.order {
  font-size: 0.44rem;
  .card {
    // background-color: green;
    width: 10.65rem;
    height: 4.78rem;
    margin-left: 0.3rem;
    margin-top: 0.3rem;
  }
  .btn {
    margin-left: 0.25rem;
  }
  .btn1 {
    margin-left: 0.5rem;
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
    margin-left: 0.51rem;
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
    right: 0.5rem;
    bottom: 0.51rem;
    margin-top: 0.5rem;
  }
  .foot {
    position: absolute;
    right: 0.5rem;
    bottom: 0.1rem;
  }
}
</style>
