import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Show from '../views/Show.vue'
import ShopDetails from '../views/ShopDetails.vue'
import SetList from '../views/SetList.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Order from '../views/Order.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Shop',
    component: Shop,
    mata: {
      title: '选择店铺'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    mata: {
      title: '案例展示'
    }
  },
  {
    path: '/show',
    name: 'Show',
    component: Show
  },
  {
    path: '/shopDetails',
    name: 'ShopDetails',
    component: ShopDetails
  },
  {
    path: '/setList',
    name: 'SetList',
    component: SetList
  },
  // 产品详情
  {
    path: '/productDetails',
    name: 'ProductDetails',
    component: ProductDetails,
    mata: {
      title: '产品详情'
    }
  },
  // 我的订单
  {
    path: '/order',
    name: 'Order',
    component: Order
  }
]

const router = new VueRouter({
  routes
})

export default router
