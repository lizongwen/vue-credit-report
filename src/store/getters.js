const getters = {
	roles: state => state.user.roles,
	addRouters: state => state.permission.addRouters,
	user: state => state.user.name,
}

export default getters
