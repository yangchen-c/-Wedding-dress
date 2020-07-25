// 产品详情
<template>
  <div class="productDetails">
    <div class="swipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      <!-- <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/2</div>
      </template>-->
    </div>
    <div class="content">
      <div class="top">
        <div class="text">【格蕾丝系列】三天拍摄+样片级团队一对一服务</div>
        <div class="text1">
          <div>
            <span class="textt">一生一次，一生精彩</span>
            <span class="textb">浏览 999999</span>
          </div>
          <div class="tred">￥6000</div>
        </div>
      </div>
      <!-- 案例展示 -->
      <div class="case">
        <div>
          <span class="vertical"></span>
          <span class="vertical1">案例展示</span>
          <span class="vertical2" @click="more">更多>></span>
        </div>
        <div class="caseImg">
          <!-- <img @click="jump" src="https://img.yzcdn.cn/vant/cat.jpeg" alt />
          <img @click="jump" src="https://img.yzcdn.cn/vant/cat.jpeg" alt />-->
          <img src="../assets/lu.jpg" alt />
          <img src="../assets/yc.jpg" alt />
        </div>
      </div>
      <!-- 服务项目 -->
      <div class="service">
        <div>
          <span class="vertical"></span>
          <span class="vertical1">服务项目</span>
        </div>
        <div class="contentext">
          <!-- 造型 -->
          <div class="pose">
            <div class="thead">造型</div>
            <div class="alltext">造型数量：4</div>
            <div
              class="alltext"
            >套服装说明：男女各4套服装，VIP区域服装任选。（女士：Mark Alpha Oerma、男士：Fraprete、Tumela等绅士礼服任选）</div>
            <div
              class="alltext"
            >造型说明：男女各4组整体妆面造型。国际彩妆一线品牌，全场通用（Chanel、Dior、Givenchy、YSL、TF、MAC、Bobbi Brown...）</div>
          </div>
          <van-divider />
          <!-- 场景 -->
          <div>
            <div class="thead">场景</div>
            <div class="alltext">场景搭配：内外景搭配</div>
            <div class="alltext">内景数量：2 个</div>
            <div class="alltext">内景说明：蔓瑞自然光互动空间内景任选。</div>
            <div class="alltext">外景数量：3 个</div>
            <div
              class="alltext"
            >外景说明：东：梵尔赛马场、圣主教堂、古城等； 南：南湖公园、兆丰山、君熙太和、惠丰湖等； 西：启新1899、盘山公路、天桥等； 北：桃花源； 中：银石、咖啡馆等。</div>
          </div>
          <van-divider />
          <!-- 拍摄 -->
          <div>
            <div class="thead">拍摄</div>
            <div class="alltext">拍摄天数：1 天</div>
            <div class="alltext">拍摄张数：100 张</div>
            <div class="alltext">精修张数：42 张</div>
            <div class="alltext">入册张数：40 张</div>
          </div>
          <van-divider />
          <!-- 成品 -->
          <div>
            <div class="thead">成品</div>
            <div class="alltext">相册数量：2 本</div>
            <div class="alltext">相册说明：赠送情誓18寸定制相册一本（10P） 赠送情誓12寸定制相册一本（10P）</div>
            <div class="alltext">相框数量：6 个</div>
            <div class="alltext">相框说明：110x50cm情誓相框一幅</div>
            <div class="alltext">76x30cm情誓相框一幅</div>
            <div class="alltext">40x30cm情誓相框二幅</div>
            <div class="alltext">17x17cm情誓摆台一幅</div>
            <div class="alltext">20x15cm情誓摆台一幅</div>
            <div class="alltext">其他成品：钥匙扣1对万元护照品质保障卡</div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn">
      <van-button type="warning" round block @click="run">立即预约</van-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Lazyload } from 'vant'
Vue.use(Lazyload)
export default {
  data () {
    return {
      current: 0,
      images: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595505488854&di=bea6c4c8ee7ced69d0d35ca763ec0139&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D306763617%2C522692118%26fm%3D214%26gp%3D0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595505528703&di=11278dc8a762e92195060d557d2a0b39&imgtype=0&src=http%3A%2F%2Fimg.yxad.cn%2Fimages%2F20200208%2Fbdcd15e9e7bd46a688c048eb1ca840d6.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595505488623&di=495462d81f1cc9b322d1eadc548e9c82&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201612%2F11%2F20161211060228_zaYhi.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595505552584&di=f9488e16afa3d8fa1e4074d2f3a52b63&imgtype=0&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2827977916%2C2642311273%26fm%3D214%26gp%3D0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595505566259&di=c0aed104bf47e93b24bec7b65a4ea70a&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2670030773%2C3413000702%26fm%3D214%26gp%3D0.jpg'
      ]
    }
  },
  methods: {
    more () {
      this.$router.push('/home')
    },
    jump () {
      this.$router.push('/show')
    },
    run () {
      this.$router.push('/confirm')
    }
  }
}
</script>

<style lang="less" scoped>
.productDetails {
  font-size: 0.44rem;
  background-color: #f4f1f4;
  // position: relative;
  .swipe {
    width: 11.25rem;
    height: 11.25rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  // 内容区域
  .content {
    box-sizing: border-box;
    width: 10.65rem;
    height: 38.56rem;
    // background-color: red;
    background-color: #ffffff;
    border-radius: 0.5rem;
    margin-left: 0.3rem;
    padding-left: 0.48rem;
    padding-top: 0.88rem;
    padding-right: 0.48rem;
    // position: absolute;
  }
  // 顶部文字
  .top {
    height: 2.8rem;
    border-bottom: 0.01rem #e6e6e6 solid;
  }
  .text {
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
  .text1 {
    display: flex;
    position: relative;
  }
  .textt {
    display: block;
    margin-top: 0.3rem;
    font-size: 0.36rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(174, 174, 174, 1);
  }
  .textb {
    display: block;
    margin-top: 0.49rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(174, 174, 174, 1);
    font-size: 0.36rem;
  }
  .tred {
    font-size: 0.6rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(236, 1, 1, 1);
    position: absolute;
    right: 0.01rem;
    top: 0.76rem;
  }
  // 案例展示
  .case {
    box-sizing: border-box;
    padding-top: 0.5rem;
    position: relative;
    border-bottom: 0.01rem #e6e6e6 solid;
    height: 4.11rem;
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
  .vertical2 {
    font-size: 0.36rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    position: absolute;
    right: 0;
  }
  // 案例展示图片
  .caseImg img {
    width: 3.3rem;
    height: 2.3rem;
    margin-right: 0.3rem;
    margin-top: 0.2rem;
  }
  // 服务项目
  .service {
    box-sizing: border-box;
    padding-top: 0.5rem;
  }
  .pose {
    margin-top: 0.5rem;
  }
  .thead {
    font-size: 0.54rem;
    font-weight: bold;
  }
  .alltext {
    line-height: 0.8rem;
  }
  .btn {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    margin-top: 0.3rem;
    padding-bottom: 0.3rem;
  }
}
</style>
