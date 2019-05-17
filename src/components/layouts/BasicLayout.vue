<template>
  <a-layout>
    <a-layout-sider class="sider" v-model="collapsed">
      <logo/>
      <side-menu :menus="menus"/>
    </a-layout-sider>
    <a-layout :style="{minHeight: '100vh'}">
      <a-layout-content>
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from '@/components/SideMenu'
import Logo from '@/components/Logo'
import { mapState } from 'vuex'
export default {
  components: {
    SideMenu,
    Logo
  },
  data() {
    return {
      collapsed: false,
      menus: []
    }
  },
  computed: {
    ...mapState({
      // 动态主路由
      mainMenu: state => state.permission.addRouters
    })
  },
  created() {
    this.menus = this.mainMenu.find(item => item.path === '/').children
  }
}
</script>

<style lang="scss" scoped>
.sider {
  min-height: 100vh;
}
</style>

