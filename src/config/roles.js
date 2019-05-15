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
			'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
			'actionEntitySet': [
				{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'query',
					'describe': '查询',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				},
				{
					'action': 'update',
					'describe': '修改',
					'defaultCheck': false
				},
				{
					'action': 'delete',
					'describe': '删除',
					'defaultCheck': false
				}
			],
			'actionList': null,
			'dataAccess': null
		},
		{
			'roleId': 'admin',
			'permissionId': 'home1',
			'permissionName': '主页1',
			'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
			'actionEntitySet': [
				{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'query',
					'describe': '查询',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				},
				{
					'action': 'update',
					'describe': '修改',
					'defaultCheck': false
				},
				{
					'action': 'delete',
					'describe': '删除',
					'defaultCheck': false
				}
			],
			'actionList': null,
			'dataAccess': null
		},
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
			'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
			'actionEntitySet': [
				{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'query',
					'describe': '查询',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				},
				{
					'action': 'update',
					'describe': '修改',
					'defaultCheck': false
				},
				{
					'action': 'delete',
					'describe': '删除',
					'defaultCheck': false
				}
			],
			'actionList': null,
			'dataAccess': null
		},
		{
			'roleId': 'admin',
			'permissionId': 'member',
			'permissionName': '会员管理',
			'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
			'actionEntitySet': [
				{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'query',
					'describe': '查询',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				}
			],
			'actionList': null,
			'dataAccess': null
		},
		{
			'roleId': 'admin',
			'permissionId': 'menu',
			'permissionName': '菜单管理',
			'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"}]',
			'actionEntitySet': [
				{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'import',
					'describe': '导入',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				}
			],
			'actionList': null,
			'dataAccess': null
		},
		{
			'roleId': 'admin',
			'permissionId': 'order',
			'permissionName': '订单管理',
			'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
			'actionEntitySet': [
				{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'query',
					'describe': '查询',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				},
				{
					'action': 'update',
					'describe': '修改',
					'defaultCheck': false
				}
			],
			'actionList': null,
			'dataAccess': null
		},
		{
			'roleId': 'admin',
			'permissionId': 'permission',
			'permissionName': '权限管理',
			'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
			'actionEntitySet': [
				{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				},
				{
					'action': 'update',
					'describe': '修改',
					'defaultCheck': false
				}
			],
			'actionList': null,
			'dataAccess': null
		},
		{
			'roleId': 'admin',
			'permissionId': 'role',
			'permissionName': '角色管理',
			'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
			'actionEntitySet': [
				{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'update',
					'describe': '修改',
					'defaultCheck': false
				},
				{
					'action': 'delete',
					'describe': '删除',
					'defaultCheck': false
				}
			],
			'actionList': null,
			'dataAccess': null
		},
		{
			'roleId': 'admin',
			'permissionId': 'test',
			'permissionName': '测试权限',
			'actions': '[]',
			'actionEntitySet': [],
			'actionList': null,
			'dataAccess': null
		},
		{
			'roleId': 'admin',
			'permissionId': 'user',
			'permissionName': '用户管理',
			'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
			'actionEntitySet': [
				{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'import',
					'describe': '导入',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				},
				{
					'action': 'update',
					'describe': '修改',
					'defaultCheck': false
				}
			],
			'actionList': null,
			'dataAccess': null
		}
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
			'permissionName': '评论管理',
			'actions': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
			'actionEntitySet': [
				{
					'action': 'query',
					'describe': '查询',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				}
			],
			'actionList': null,
			'dataAccess': null
		},
		{
			'roleId': 'user',
			'permissionId': 'company',
			'permissionName': '营销管理',
			'actions': '[]',
			'actionEntitySet': [],
			'actionList': null,
			'dataAccess': null
		}
	]
}]
export default roles