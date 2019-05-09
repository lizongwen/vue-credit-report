import Vue from 'vue'
import {
	message,
	Rate,
	Button,
	Breadcrumb,
	Icon,
	Pagination,
	Modal,
	Form,
	Input,
	Checkbox
} from 'ant-design-vue'

Vue.use(Rate).use(Button).use(Breadcrumb).use(Icon).use(Pagination).use(Modal).use(Form).use(Input).use(Checkbox)

Vue.prototype.$message=message
