<template>
  <a-layout-header :style="{ padding: '0' }">
    <div class="header">
      <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggle"/>
      <div class="user-wrap">
        <a-dropdown>
          <span class="action ant-dropdown-link user-dropdown-menu">
            <a-avatar class="avatar" size="small"/>
            <span>{{user()}}</span>
          </span>
          <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
            <a-menu-item key="0">
              <a href="javascript:;" @click="handleLogout">
                <a-icon type="logout"/>
                <span>退出登录</span>
              </a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
	  ...mapActions(['Logout']),
    ...mapGetters(['user']),
    toggle() {
      this.$emit('toggle')
    },
    handleLogout() {
      const that = this

      this.$confirm({
        title: '提示',
		content: '真的要注销登录吗 ?',
		okText:'确定',
		cancelText:'取消',
        onOk() {
          return that
            .Logout({})
            .then(() => {
              window.location.reload()
            })
            .catch(err => {
              that.$message.error({
                title: '错误',
                description: err.message
              })
            })
        },
        onCancel() {}
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 64px;
  padding: 0 12px 0 0;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .trigger {
    font-size: 20px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
  }
  .user-wrap {
    float: right;
    height: 100%;
    .action {
      cursor: pointer;
      padding: 0 12px;
      display: inline-block;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      height: 100%;
      color: rgba(0, 0, 0, 0.65);
      .avatar {
        margin: 20px 8px 20px 0;
        vertical-align: middle;
      }
    }
  }
}
</style>

