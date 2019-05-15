import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

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
const whiteList = ['login', 'home', 'company', 'base'] // no redirect whitelist

router.beforeEach((to, from, next) => {
	if (Vue.ls.get(ACCESS_TOKEN)) {
		/*has token */
		console.log(to.path == '/user/login')
		if (to.path == '/user/login') {
			next({ path: '/home' })
		} else {
			if (store.getters.roles.length === 0) {
				store.dispatch('GetInfo').then(res=>{
					const roles=res.result.roles;
					store.dispatch('GenerateRoutes', { roles }).then(() => {
						//动态路由添加
						router.addRoutes(store.getters.addRouters);
					})
					next({path:to.path})
				})
			} else {
				next()
			}

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