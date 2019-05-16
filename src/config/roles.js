const roles = [
	{
		'id': 'admin',
		'name': '管理员',
		'describe': '管理员拥有所有权限',
		'status': 1,
		'creatorId': 'system',
		'createTime': 1497160610259,
		'deleted': 0,
		'permissions': [
			{
				'roleId': 'admin',
				'permissionId': 'home',
				'permissionName': '主页',
				'actionList': ['add', 'edit', 'query', 'delete']
			},
			{
				'roleId': 'admin',
				'permissionId': 'home1',
				'permissionName': '主页1',
				'actionList': ['add', 'edit']
			},
		]
	},

	{
		'id': 'user',
		'name': '普通会员',
		'describe': '普通用户，只能查询',
		'status': 1,
		'creatorId': 'system',
		'createTime': 1497160610259,
		'deleted': 0,
		'permissions': [
			{
				'roleId': 'user',
				'permissionId': 'home1',
				'permissionName': '主页1',
				'actionList': ['query']
			},
			{
				'roleId': 'user',
				'permissionId': 'company',
				'permissionName': '营销管理',
				'actionList': ['add', 'edit', 'query', 'delete'],
			}
		]
	},
	{
		'id': 'svip',
		'name': 'SVIP',
		'describe': '超级会员',
		'status': 1,
		'creatorId': 'system',
		'createTime': 1532417744846,
		'deleted': 0,
		'permissions': [
			{
				'roleId': 'admin',
				'permissionId': 'comment',
				'permissionName': '评论管理',
				'actionList': []
				
			},
			{
				'roleId': 'admin',
				'permissionId': 'member',
				'permissionName': '会员管理',
				'actionList': []
				
			},
			{
				'roleId': 'admin',
				'permissionId': 'menu',
				'permissionName': '菜单管理',
				'actionList': []
				
			},
			{
				'roleId': 'admin',
				'permissionId': 'order',
				'permissionName': '订单管理',
				'actionList': []
				
			},
			{
				'roleId': 'admin',
				'permissionId': 'permission',
				'permissionName': '权限管理',
				'actionList': []
				
			},
			{
				'roleId': 'admin',
				'permissionId': 'role',
				'permissionName': '角色管理',
				'actionList': []
				
			},
			{
				'roleId': 'admin',
				'permissionId': 'test',
				'permissionName': '测试权限',
				'actionList': []
				
			},
			{
				'roleId': 'admin',
				'permissionId': 'user',
				'permissionName': '用户管理',
				'actionList': []
				
			}
		]
	}]
export default roles