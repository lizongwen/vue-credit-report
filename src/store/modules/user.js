import Vue from 'vue'
import { login, getInfo } from '@/api/login'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import roles from '@/config/roles'
const user = {
	state: {
		token: '',
		roles: [],
		info: {}
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
		}
	},
	actions: {
		Login({ commit }, userInfo) {
			return new Promise((resolve, reject) => {
				login(userInfo).then(response => {
					console.log(response)
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
					const result = response.result; let res = [];
					if (result.roles.length) {
						res = roles.filter(item => {
							return result.roles.includes(item.id)
						})
					}
					result.roles = res;
					console.log(result)
					if(result.roles.length){
						result.roles.forEach(role => {
							if (role && role.permissions.length > 0) {
								role.permissions.map(per => {
									if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
										const action = per.actionEntitySet.map(action => { return action.action })
										per.actionList = action
									}
								})
								role.permissionList = role.permissions.map(permission => { return permission.permissionId })
							} else {
								reject(new Error('getInfo: roles must be a non-null array !'))
							}
						});
						commit('SET_ROLES', result.roles)
						commit('SET_INFO', result)
					}
					
					resolve(response)
				}).catch(error => {
					reject(error)
				})
			})
		},
	}
};
export default user