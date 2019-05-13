<template>
  <a-layout class="main">
    <a-layout-header :style="{height:'100px',background:'#fff',borderBottom:'1px solid #d9d9d9'}">XXX有限公司</a-layout-header>
    <a-layout>
      <a-layout-sider theme="light" width="256px">
        <side-menu></side-menu>
      </a-layout-sider>
      <a-layout-content style="padding: 20px;">
		    <router-view/>
	    </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue'
export default {
  components: {
    SideMenu
  },
  data() {
    return {
      rootSubmenuKeys: ["sub1", "sub2", "sub4"],
      openKeys: ["sub1"]
    };
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
	},
	goPage(){
		this.$router.push({
			path:'/company/base'
		})
	}
  }
};
</script>

<style lang="scss" scoped>
.main {
  background: #f5f5f5;
  min-height: 100%;
  
}
</style>

