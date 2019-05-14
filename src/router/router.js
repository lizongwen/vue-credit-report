import { UserLayout, BasicLayout } from '@/components/layouts'
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

export const DynamicRouter = [
	{
		path: '/',
		name: 'index',
		meta: { title: '首页' },
		component: BasicLayout,
		children: [
			{
				path: 'home',
				name: 'home',
				component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
			},
			{
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
	}
]