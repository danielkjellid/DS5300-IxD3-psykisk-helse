import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Article from '@/views/article.vue'
import LogIn from '@/views/log-in.vue'
import Account from '@/views/account.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/articles/:article',
    name: 'Article',
    component: Article
  },
  {
    path: '/logg-inn',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/min-konto',
    name: 'Account',
    component: Account,
  },
]

const router = new VueRouter({
  routes
})

export default router
