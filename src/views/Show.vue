<template>
  <div class="show">
    <div class="font">
      <span class="textt">杨小羊先生和李鹏飞女士恭喜发财</span>
      <span class="textm">2020/06/30</span>
      <span class="textb">月老牵线，喜结良缘，今日佳节，亲朋欢聚，共祝新人：新婚快乐，生活幸福，早生贵子，百年好合！</span>
    </div>
    <div class="img">
      <div class="imgt">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595481735089&di=cc9867c72fb6630df8baae33b04fb517&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Flarge%2F85ccde71gw1faskt9i55sj20hn0eeq3a.jpg"
        />
      </div>
      <div class="imgt">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595481735089&di=cc9867c72fb6630df8baae33b04fb517&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Flarge%2F85ccde71gw1faskt9i55sj20hn0eeq3a.jpg"
        />
      </div>
      <div class="imgt">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595481735089&di=cc9867c72fb6630df8baae33b04fb517&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Flarge%2F85ccde71gw1faskt9i55sj20hn0eeq3a.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.show {
  .font {
    font-size: 0.44rem;
    margin-top: 0.84rem;
    // margin-left: 0.3rem;
    padding: 0 0.3rem;
    display: flex;
    flex-direction: column;
  }
  .textt {
    display: inline-block;
    font-size: 0.54rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
  .textm {
    display: inline-block;
    margin-left: auto;
    margin-top: 0.79rem;
    font-size: 0.44rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }
  .textb {
    display: inline-block;
    font-size: 0.44rem;
    margin-top: 0.8rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }
  .img {
    margin-top: 0.47rem;
  }
  .imgt {
    width: 10.65rem;
    height: 5.5rem;
    padding: 0 0.3rem;
    margin-bottom: 0.3rem;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
