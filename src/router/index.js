import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [{
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/user/:name',
    name: 'user',
    component: () => import('../views/User/User.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchList.vue'),
    props: route => ({
      query: route.query.value
    })
  },
  {
    path: '/tool/:name',
    name: 'tool',
    component: () => import('../views/card/CardPage.vue')
  },
  

]

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  next()
})

export default router