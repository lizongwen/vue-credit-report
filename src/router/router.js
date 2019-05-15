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
  },
  {
    path: '/company',
    name: 'company',
    component: () =>
      import(/* webpackChunkName: "company" */ '@/views/Company.vue'),
    children: [
      {
        path: 'base',
        name: 'base',
        component: () =>
          import(/* webpackChunkName: "base" */ '@/views/company/BaseInfo.vue')
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
				meta: { permission: 'home' }
			},
			{
				path: 'home1',
				name: 'home1',
				component: () => import(/* webpackChunkName: "Home1" */ '@/views/Home1.vue'),
				meta: { permission: 'home1' }
			},
			{
				path: 'home2',
				name: 'home2',
				component: () => import(/* webpackChunkName: "Home2" */ '@/views/Home2.vue'),
				meta: { permission: 'home2' }
			},
			{
				path: 'company',
				name: 'company',
				component: () => import(/* webpackChunkName: "Company" */ '@/views/Company.vue'),
				meta: { permission: 'company' },
				children: [
					{
						path: 'base',
						name: 'base',
						component: () => import(/* webpackChunkName: "BaseInfo" */ '@/views/company/BaseInfo.vue'),
						meta: { permission: 'company' }
					}
				]
			}
		]
	}
]
