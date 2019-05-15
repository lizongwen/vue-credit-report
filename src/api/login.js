import { axios } from '@/utils/request';
export function login(parameter) {
	return axios({
		url: '/auth/login',
		method: 'post',
		data: parameter
	})
}
export function getInfo() {
	return axios({
		url: '/user/info',
		method: 'get',
		headers: {
			'Content-Type': 'application/json;charset=UTF-8'
		}
	})
}