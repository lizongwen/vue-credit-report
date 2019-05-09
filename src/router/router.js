import { UserLayout } from '@/components/layouts'
/**
 * 基础路由
 */
export const BaseRouter = [
	{
		path: '/user',
		name: 'user',
		redirect: '/user/login',
		component: UserLayout,
		children: [
			{
				path: 'login',
				name: 'login',
				component: () => import(/* webpackChunkName: "login" */ '@/views/user/Login.vue')
			}
		]
	},
	{
		path: '/home',
		name: 'home',
		component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
	}, {
		path: '/company',
		name: 'company',
		component: () => import(/* webpackChunkName: "company" */ '@/views/Company.vue'),
		children: [
			{
				path: 'base',
				name: 'base',
				component: () => import(/* webpackChunkName: "base" */ '@/views/company/BaseInfo.vue')
			}
		]
	}
]
