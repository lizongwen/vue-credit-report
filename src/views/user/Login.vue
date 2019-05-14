<template>
  <div class="login">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
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
          <a-input
            size="large"
            type="text"
            placeholder="帐户名"
            v-decorator="[
                'username',
                {rules: [{ required: true, message: '请输入帐户名' }], validateTrigger: 'blur'}
              ]"
          >
            <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            size="large"
            type="password"
            autocomplete="false"
            placeholder="密码"
            v-decorator="[
                'password',
                {rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}
              ]"
          >
            <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox v-decorator="['rememberMe']">自动登录</a-checkbox>
        </a-form-item>
        <a-form-item style="margin-top:24px">
          <a-button size="large" type="primary" htmlType="submit" class="login-button">确定</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
import { mapActions } from 'vuex'
export default {
  components: {},
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  created() { },
  methods: {
    ...mapActions(['Login']),
    handleSubmit(e) {
      e.preventDefault();
      const { form: { validateFields }, Login } = this
      validateFields(['username', 'password'], { force: true }, (err, values) => {
        if (!err) {
          console.log('表单正确', values);
          values.password = md5(values.password)
          Login(values).then((res) => {
            this.loadSuccess(res)
          })
        } else {
          console.log('表单错误')
        }
      })
    },
    loadSuccess(res) {
      this.$router.push({
        path: "/home"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  background-image: url("../../img/login-bg.jpg");
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
.main {
  min-width: 260px;
  width: 450px;
  margin: 0 auto;
  padding: 30px 50px;
  background: #fff;
  position: absolute;
  border-radius: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .login-head {
    padding: 10px 0;
    font-size: 19px;
    text-align: center;
  }
  .user-layout-login {
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
