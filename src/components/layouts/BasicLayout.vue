<template>
  <a-layout>
    <a-layout-sider class="sider" v-model="collapsed">
      <logo/>
      <side-menu :menus="menus"/>
    </a-layout-sider>
    <a-layout :style="{minHeight: '100vh'}">
      <global-header :collapsed="collapsed" @toggle="toggle"/>
      <a-layout-content>
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from '@/components/SideMenu'
import Logo from '@/components/Logo'
import GlobalHeader from '@/components/GlobalHeader'
import { mapState } from 'vuex'
export default {
  components: {
    SideMenu,
    Logo,
    GlobalHeader
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
  },
  methods:{
	  toggle(){
		   this.collapsed = !this.collapsed
	  }
  }
}
</script>

<style lang="scss" scoped>
.sider {
  min-height: 100vh;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}
</style>

