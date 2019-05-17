<template>
  <a-menu mode="inline" v-model="keyArr" @click="goPage" theme="dark" :collapsible="true">
    <template v-for="item in menus">
      <a-menu-item :key="item.path" v-if="!item.children">
        <router-link :to="item.path">
        <a-icon :type="item.meta.icon"/>
        <span>{{ item.meta.title }}</span>
        </router-link>
      </a-menu-item>
      <a-sub-menu :key="item.path" v-else>
        <span slot="title">
          <a-icon :type="item.meta.icon"/>
          <span>{{ item.meta.title }}</span>
        </span>
        <a-menu-item v-for="child in item.children" :key="child.name">
          <router-link :to="child.path">
          <span>{{ child.meta.title }}</span>
          </router-link>
        </a-menu-item>
      </a-sub-menu>
    </template>
  </a-menu>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array
    }
  },
  data() {
    return {
      keyArr: ['about']
    }
  },
  mounted() {
    console.log(this.menus)
    this.keyArr = [this.$router.currentRoute.name]
  },
  methods: {
    goPage(item) {
		// console.log(item)
    //   this.$router.push({ path: item.key })
    }
  }
}
</script>

<style></style>
