import Vue from 'vue'
import Router from 'vue-router'
import VueStorage from 'vue-ls'
import { BaseRouter } from './router'
import { ACCESS_TOKEN } from '@/store/mutation-types'

Vue.use(Router)
Vue.use(VueStorage, {
	namespace: 'credit__', // key prefix
	name: 'ls', // name variable Vue.[ls] or this.[$ls],
	storage: 'local' // storage name session, local, memory
})

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: BaseRouter
})
const whiteList = ['login', 'register', 'registerResult'] // no redirect whitelist
router.beforeEach((to, from, next) => {
	if (Vue.ls.get(ACCESS_TOKEN)) {
		if (to.path == '/') {
			next({ path: '/user/login', query: { redirect: to.fullPath } })
		} else {
			next()
		}
	} else {
		if (whiteList.includes(to.name)) {
			// 在免登录白名单，直接进入
			next()
		} else {
			next({ path: '/user/login', query: { redirect: to.fullPath } })
		}
	}

})

export default router;