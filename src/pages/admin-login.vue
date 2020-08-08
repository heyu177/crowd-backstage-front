<template>
    <el-container>
      <el-header>
        <h1>
          <a href="#" class="title">尚筹网-创意产品众筹平台</a>
        </h1>
      </el-header>
      <el-main>
        <el-form :rules="rules" :model="ruleForm" ref="form">
          <el-form-item>
            <h1>
              <i class="el-icon-s-promotion"></i>管理员登陆
            </h1>
          </el-form-item>
          <h3>{{message}}</h3>
          <el-form-item prop="loginAcct">
            <el-input
              placeholder="请输入登陆账号"
              v-model="ruleForm.loginAcct"
              suffix-icon="el-icon-user-solid"
            ></el-input>
          </el-form-item>
          <el-form-item prop="userPswd">
            <el-input
              placeholder="请输入登陆密码"
              show-password
              v-model="ruleForm.userPswd"
              suffix-icon="el-icon-lock"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="login" type="success">登陆</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
</template>

<script>
import Vue from "vue";
import {
  Container,
  Header,
  Main,
  Form,
  Input,
  FormItem,
  Button,
} from "element-ui";
import { adminLogin } from "../ajax/index.js";

Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Button);

export default {
  data() {
    return {
      ruleForm: {
        loginAcct: "",
        userPswd: "",
      },
      rules: {
        loginAcct: [
          { required: true, message: "账号不能为空", trigger: "blur" },
        ],
        userPswd: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
      },
      message: "",
    };
  },
  methods: {
    login() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          adminLogin({
            loginAcct: this.ruleForm.loginAcct,
            userPswd: this.ruleForm.userPswd,
          }).then((response) => {
            if (response.data.result == "success") {
              this.$router.push("/main");
            } else if (response.data.result == "failed") {
              this.message = response.data.message;
            }
          });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.el-container {
  background: #eee;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
      .el-button {
        width: 100%;
      }
    }
  }
}
</style>