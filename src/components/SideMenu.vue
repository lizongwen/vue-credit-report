<template>
  <a-menu mode="inline" v-model="keyArr" @click="goPage" theme="dark" :collapsible="true" :defaultSelectedKeys="['home']">
    <template v-for="item in menus">
      <a-menu-item :key="item.name" v-if="!item.children">
        <router-link :to="item.path">
			<a-icon :type="item.meta.icon"/>
			<span>{{ item.meta.title }}</span>
        </router-link>
      </a-menu-item>
      <a-sub-menu :key="item.name" v-else>
        <span slot="title">
          <a-icon :type="item.meta.icon"/>
          <span>{{ item.meta.title }}</span>
        </span>
        <a-menu-item :key="child.name" v-for="child in item.children">
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
