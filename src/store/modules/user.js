import { login } from '@/api/login'
const user = {
	state: {
		token: ''
	},
	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token
		},
	},
	actions: {
		Login({ commit }, userInfo) {
			console.log(555)
			// return new Promise((resolve, reject) => {
			// 	login(userInfo).then(response => {
			// 		const result = response.result
			// 		Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
			// 		commit('SET_TOKEN', result.token)
			// 		resolve()
			// 	}).catch(error => {
			// 		reject(error)
			// 	})
			// })
		}
	}
};
export default user