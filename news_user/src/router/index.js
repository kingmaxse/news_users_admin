import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// import component
import Home from '@/components/MyHome.vue'

// import component
import Articles from '@/components/menus/MyArticles.vue'

// import component
import Topics from '@/components/menus/MyTopics.vue'

// import component
import Comments from '@/components/menus/MyComments.vue'

// import component
import Thumbups from '@/components/menus/MyThumbups.vue'

import Subscriptions from '@/components/menus/MySubscriptions.vue'

// import component
import Collects from '@/components/menus/MyCollects.vue'

// import component
import Funds from '@/components/menus/MyFunds.vue'

// import component
import Info from '@/components/menus/MyInfo.vue'
// import component

import Rights from '@/components/menus/MyRights.vue'
// import component
import Suggesstions from '@/components/menus/MySuggestions.vue'

// import component
import UserDetail from '@/components/user/MyUserDetail.vue'

Vue.use(VueRouter)

// const routes = []

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      redirect: '/home/topics',
      component: Home,
      children: [
        { path: '/home/articles', component: Articles },
        { path: '/home/topics', component: Topics },
        { path: '/home/comments', component: Comments },
        { path: '/home/thumbups', component: Thumbups },
        { path: '/home/subscriptions', component: Subscriptions },
        { path: '/home/collects', component: Collects },
        { path: '/home/funds', component: Funds },
        { path: '/home/info', component: Info },
        { path: '/home/rights', component: Rights },
        { path: '/home/suggestions', component: Suggesstions },
        { path: '/home/userinfo/:id', component: UserDetail, props: true } // 点击进入详情页的模块，为实现跳转，下一步的计划
      ]
    }
  ]
})

// 配置路由守卫
router.beforeEach((to, from, next) => {
  const pathArr = [
    '/home',
    '/home/articles',
    '/home/topics',
    '/home/comments',
    '/home/thumbups',
    '/home/subscriptions',
    '/home/Collects',
    '/home/Funds',
    '/home/info',
    '/home/rights',
    '/home/suggestions'
  ]
  if (pathArr.indexOf(to.path) != -1) {
    const token = 'Bearer xxgsggsg'
    // const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/home')
    }
  } else {
    next()
  }
})

export default router
