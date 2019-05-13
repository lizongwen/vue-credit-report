<template>
  <div class="sidemenu">
    <a-menu mode="inline" v-model="keyArr" @click="goPage">
      <template v-for="item in menus">
        <a-menu-item :key="item.key" v-if="!item.children">
          <a-icon :type="item.icon"/>
          <span>{{item.title}}</span>
        </a-menu-item>
        <a-sub-menu :key="item.key" v-else>
          <span slot="title">
            <a-icon :type="item.icon"/>
            <span>{{item.title}}</span>
          </span>
          <a-menu-item v-for="child in item.children" :key="child.key">
            <span>{{child.title}}</span>
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyArr: ["about"],
      menus: [
        { title: "仪表盘", icon: "dashboard", key: "index" },
        { title: "表单页", icon: "video-camera", key: "home" },
        {
          title: "表格页",
          icon: "area-chart",
          children: [
            { title: "地图组件", icon: "user", key: "map" },
            { title: "子菜单二", icon: "setting", key: "set" }
          ]
        },
        { title: "个人中心", icon: "lock",key: "base" }
      ]
    };
  },
  mounted() {
    this.keyArr = [this.$router.currentRoute.name];
  },
  methods: {
    goPage(item) {
      console.log(item)
      this.keyArr = [item.key];
      //这里如果使用name属性跳转的话，则当路由不存在时，404页面无法捕获到
      this.$router.push({ name: `${item.key}` });
    }
  }
};
</script>

<style>
</style>
