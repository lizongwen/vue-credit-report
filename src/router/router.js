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
				component: () =>
					import(/* webpackChunkName: "login" */ '@/views/user/Login.vue')
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
		redirect: '/home',
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
				meta: { title: '首页', icon: 'home', permission: 'home' }
			},
			{
				path: '/home1',
				name: 'home1',
				component: () => import(/* webpackChunkName: "Home1" */ '@/views/Home1.vue'),
				meta: { title: '首页1', icon: 'home', permission: 'home1' }
			},
			{
				path: '/home2',
				name: 'home2',
				component: () => import(/* webpackChunkName: "Home2" */ '@/views/Home2.vue'),
				meta: { title: '首页2', icon: 'home', permission: 'home2' }
			},
			{
				path: '/company',
				name: 'company',
				component: () => import(/* webpackChunkName: "Company" */ '@/views/Company.vue'),
				meta: { title: '公司主页', icon: 'home', permission: 'company' },
				redirect: '/company/base',
				children: [
					{
						path: '/company/base',
						name: 'base',
						component: () => import(/* webpackChunkName: "BaseInfo" */ '@/views/company/BaseInfo.vue'),
						meta: { title: '公司主页1', permission: 'company' }
					}
				]
			}
		]
	}
]
