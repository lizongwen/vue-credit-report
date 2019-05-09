<template>
  <a-layout class="main">
    <a-layout-header :style="{height:'100px',background:'#fff',borderBottom:'1px solid #d9d9d9'}">XXX有限公司</a-layout-header>
    <a-layout>
      <a-layout-sider theme="light" width="256px">
        <a-menu mode="inline" :openKeys="openKeys" @openChange="onOpenChange" style="width: 256px">
          <a-sub-menu key="sub1">
            <span slot="title">
              <a-icon type="mail"/>
              <span>基本信息</span>
            </span>
            <a-menu-item key="1" @click="goPage">基本信息 1</a-menu-item>
            <a-menu-item key="2" @click="goPage">基本信息 2</a-menu-item>
            <a-menu-item key="3" @click="goPage">基本信息 3</a-menu-item>
            <a-menu-item key="4" @click="goPage">基本信息 4</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title">
              <a-icon type="appstore"/>
              <span>扩展信息</span>
            </span>
            <a-menu-item key="5" @click="goPage">扩展信息 5</a-menu-item>
            <a-menu-item key="6" @click="goPage">扩展信息 6</a-menu-item>
            <a-sub-menu key="sub3" title="扩展信息7">
              <a-menu-item key="7" @click="goPage">扩展信息 7-1</a-menu-item>
              <a-menu-item key="8" @click="goPage">扩展信息 7-2</a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
          <a-sub-menu key="sub4">
            <span slot="title">
              <a-icon type="setting"/>
              <span>更多信息</span>
            </span>
            <a-menu-item key="9" @click="goPage">更多信息 9</a-menu-item>
            <a-menu-item key="10" @click="goPage">更多信息 10</a-menu-item>
            <a-menu-item key="11" @click="goPage">更多信息 11</a-menu-item>
            <a-menu-item key="12" @click="goPage">更多信息 12</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout-content>
		  <router-view/>
	  </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
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

