import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Article from '@/components/Article'
import Follow from '@/components/Follow'
import Column from '@/components/Column'
import User from '@/components/User'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/home',component:Home},
    {path:'/',redirect:'/home'},
    {path:'/article/:id',component:Article},
    {path:'/follow',component:Follow},
    {path:'/user-infor',component:User},
    {path:'/column',component:Column},
  ]
})
