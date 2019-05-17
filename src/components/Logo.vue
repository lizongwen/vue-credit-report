<template>
  <div class="logo">
    <router-link :to="{name:'home'}">
      <LogoSvg alt="logo"/>
      <h1 v-if="showTitle">{{ title }}</h1>
    </router-link>
  </div>
</template>
<script>
import LogoSvg from '@/img/logo.svg?inline'
export default {
  name: 'Logo',
  components: {
    LogoSvg
  },
  props: {
    title: {
      type: String,
      default: '惠国征信',
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  }
}
</script>


<style lang="scss" scoped>
.logo {
  position: relative;
  height: 64px;
  padding-left: 24px;
  overflow: hidden;
  line-height: 64px;
  background: #002140;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  img,
  svg {
    height: 32px;
    width: 32px;
    display: inline-block;
    vertical-align: middle;
  }
  h1 {
    display: inline-block;
    vertical-align: middle;
    color: #fff;
    font-size: 20px;
    margin: 0 0 0 12px;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    font-weight: 600;
    vertical-align: middle;
  }
}
</style>
