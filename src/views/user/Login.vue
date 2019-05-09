<template>
  <div class="main">
    <div class="login-head">账号密码登录</div>
    <a-form
      id="formLogin"
      class="user-layout-login"
      ref="formLogin"
      :form="form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input size="large" type="text" placeholder="帐户名">
          <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input size="large" type="password" autocomplete="false" placeholder="密码">
          <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-checkbox v-decorator="['rememberMe']">自动登录</a-checkbox>
        <router-link
          :to="{ name: 'recover', params: { user: 'aaa'} }"
          class="forge-password"
          style="float: right;"
        >忘记密码</router-link>
      </a-form-item>

      <a-form-item style="margin-top:24px">
        <a-button size="large" type="primary" htmlType="submit" class="login-button">确定</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import Vue from "vue";
import { ACCESS_TOKEN } from "@/store/mutation-types";
export default {
  components: {},
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  created() {},
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      Vue.ls.set(ACCESS_TOKEN, 123456789, 7 * 24 * 60 * 60 * 1000);
      this.$router.push({
        path: "/home"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  min-width: 260px;
  width: 500px;
  margin: 0 auto;
  padding: 30px 50px;
  border: 1px solid #55b7f7;
  //   background: #55b7f7;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .login-head {
    padding: 10px 0;
    font-size: 19px;
    text-align: center;
    // background: #fff;
  }
  .user-layout-login {
    //   background: #fff;
    //   padding:30px;
    label {
      font-size: 14px;
    }

    .forge-password {
      font-size: 14px;
    }

    button.login-button {
      padding: 0 15px;
      font-size: 16px;
      height: 40px;
      width: 100%;
    }
  }
}
</style>
