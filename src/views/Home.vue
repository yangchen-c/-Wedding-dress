<template>
  <div class="home">
    <div class="top">
      <div class="boxl">
        <div class="img" @click="jump">
          <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        </div>
        <div class="font">
          <span class="textt">杨小羊先生和李鹏飞女士恭喜发财</span>
          <span class="textb">2020/06/30</span>
        </div>
      </div>
      <div class="boxl">
        <div class="img" @click="jump">
          <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        </div>
        <div class="font">
          <span class="textt">杨小羊先生和李鹏飞女士恭喜发财</span>
          <span class="textb">2020/06/30</span>
        </div>
      </div>
    </div>
    <div class="top">
      <div class="boxl">
        <div class="img" @click="jump">
          <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        </div>
        <div class="font">
          <span class="textt">杨小羊先生和李鹏飞女士恭喜发财</span>
          <span class="textb">2020/06/30</span>
        </div>
      </div>
      <div class="boxl">
        <div class="img" @click="jump">
          <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        </div>
        <div class="font">
          <span class="textt">杨小羊先生和李鹏飞女士恭喜发财</span>
          <span class="textb">2020/06/30</span>
        </div>
      </div>
    </div>
    <div class="top">
      <div class="boxl">
        <div class="img" @click="jump">
          <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        </div>
        <div class="font">
          <span class="textt">杨小羊先生和李鹏飞女士恭喜发财</span>
          <span class="textb">2020/06/30</span>
        </div>
      </div>
      <div class="boxl">
        <div class="img" @click="jump">
          <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        </div>
        <div class="font">
          <span class="textt">杨小羊先生和李鹏飞女士恭喜发财</span>
          <span class="textb">2020/06/30</span>
        </div>
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
      this.$router.push('/show')
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  background-color: #f2f2f2;
  .top {
    display: flex;
    padding-top: 0.3rem;
  }
  .boxl {
    width: 5.17rem;
    height: 6.45rem;
    margin-left: 0.3rem;
  }
  .img {
    background-color: #fff;
  }
  img {
    width: 5.17rem;
    height: 3.6rem;
  }
  .font {
    font-size: 0.44rem;
    background-color: #fff;
  }
  .textt {
    display: inline-block;
    padding: 0.2rem 0.51rem;
    font-size: 0.44rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }
  .textb {
    display: inline-block;
    margin-left: 2.59rem;
    font-size: 0.36rem;
    color: rgba(51, 51, 51, 1);
    font-family: PingFang SC;
    font-weight: 500;
  }
}
</style>
