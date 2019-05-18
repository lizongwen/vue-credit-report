import Vue from 'vue'
import { login, getInfo, logout } from '@/api/login'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import roles from '@/config/roles'
import { uniqueArrAndConcat } from '@/utils/util'
const user = {
	state: {
		token: '',
		roles: [],
		info: {},
		name: '',
		username: ''
	},
	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token
		},
		SET_ROLES: (state, roles) => {
			state.roles = roles
		},
		SET_INFO: (state, info) => {
			state.info = info
		},
		SET_NAME: (state, name) => {
			state.name = name
		},
		SET_USERNAME: (state, username) => {
			state.username = username
		},
	},
	actions: {
		//登录
		Login({ commit }, userInfo) {
			return new Promise((resolve, reject) => {
				login(userInfo).then(response => {
					const result = response.result
					Vue.ls.set(ACCESS_TOKEN, result.token, 2 * 60 * 60 * 1000)
					commit('SET_TOKEN', result.token)
					resolve()
				}).catch(error => {
					reject(error)
				})
			})
		},
		// 获取用户信息
		GetInfo({ commit }) {
			return new Promise((resolve, reject) => {
				getInfo().then(response => {
					const result = response.result; let res = []
					if (result.roles.length) {
						res = roles.filter(item => {
							return result.roles.includes(item.id)
						})
					}
					result.role = {
						permissions: uniqueArrAndConcat(res.map((item) => {
							return [...item.permissions]
						}).flat().map((item) => {
							delete item.roleId
							return item
						}))
					}
					if (result.role && result.role.permissions.length > 0) {
						const role = result.role
						role.permissions = result.role.permissions
						role.permissionList = role.permissions.map(permission => { return permission.permissionId })
						commit('SET_ROLES', result.role)
						commit('SET_INFO', result)
					} else {
						reject(new Error('getInfo: roles must be a non-null array !'))
					}
					commit('SET_NAME', result.name);
					commit('SET_USERNAME', result.username);
					resolve(response)
				}).catch(error => {
					reject(error)
				})
			})
		},
		// 登出
		Logout({ commit, state }) {
			return new Promise((resolve) => {
				commit('SET_TOKEN', '')
				commit('SET_ROLES', [])
				Vue.ls.remove(ACCESS_TOKEN)
				logout(state.username).then(() => {
					resolve()
				}).catch(() => {
					resolve()
				})
			})
		}
	}
}
export default user
