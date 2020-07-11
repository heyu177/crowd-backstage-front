<template>
  <div>
    <el-container>
      <el-header>
        <h1>
          <a href="#" class="title">尚筹网-创意产品众筹平台</a>
        </h1>
      </el-header>
      <el-main>
        <el-form>
          <el-form-item>
            <h1><i class="el-icon-s-promotion"></i>用户登陆</h1>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入登陆账号" v-model="account" suffix-icon="el-icon-user-solid"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入登陆密码" show-password v-model="pwd" suffix-icon="el-icon-lock"></el-input>
          </el-form-item>
          <el-form-item class="register">
            <router-link to>我要注册</router-link>
          </el-form-item>
          <el-form-item>
              <el-button type="success">登陆</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Vue from "vue";
import { Container, Header, Main, Form, Input, FormItem,Button } from "element-ui";

Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Button)

export default {
  data() {
    return {
      account: "",
      pwd: ""
    };
  }
};
</script>

<style lang="less" scoped>
.el-header {
  background: #222;
  padding: 0 50px;
  h1 {
    margin: 0;
    height: 100%;
    .title {
      color: #9d9d9d;
      text-decoration: none;
      display: inline-block;
      height: 100%;
      line-height: 60px;
      font-size: 32px;
      &:hover {
        color: #fff;
      }
    }
  }
}
.el-form {
  width: 500px;
  margin: 0 auto;
  .el-form-item {
    &.register {
      text-align: right;
      a {
        text-decoration: none;
        color: #337ab7;
        &:hover {
          text-decoration: underline;
          color: #23527c;
        }
      }
    }
    h1 {
      margin: 0 auto;
      text-align: left;
      font-size: 30px;
      font-weight: normal;
    }
    .el-button{
        width: 100%;
    }
  }
}
</style>