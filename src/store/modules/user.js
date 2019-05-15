import Vue from 'vue'
import { login } from '@/api/login'
import { ACCESS_TOKEN } from '@/store/mutation-types'
const user = {
  state: {
    token: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(response => {
            console.log(response)
            const result = response.result
            Vue.ls.set(ACCESS_TOKEN, result.token, 2 * 60 * 60 * 1000)
            commit('SET_TOKEN', result.token)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}
export default user
