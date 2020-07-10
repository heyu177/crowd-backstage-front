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
                      <h1>用户登陆</h1>
                  </el-form-item>
                  <el-form-item>
                      <el-input placeholder="请输入登陆账号" v-model="account"></el-input>
                  </el-form-item>
                  <el-form-item>
                      <el-input placeholder="请输入登陆密码" show-password v-model="pwd"></el-input>
                  </el-form-item>
              </el-form>
          </el-main>
      </el-container>
  </div>
</template>

<script>
import Vue from "vue"
import {Container,Header,Main,Form,Input,FormItem} from "element-ui"

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)

export default {
    data(){
        return {
            account:"",
            pwd:""
        }
    }
}
</script>

<style>
.el-header{
    background: #222;
    padding: 0 50px;
}
.el-header h1{
    margin: 0;
    height: 100%;
}
.el-header h1 .title{
    color: #9d9d9d;
    text-decoration: none;
    display: inline-block;
    height: 100%;
    line-height: 60px;
    font-size: 32px;
}
.el-header h1 .title:hover{
    color: #fff;
}
.el-form{
    text-align: center;
}
.el-form-item h1{
    width: 500px;
    margin: 0 auto;
    text-align: left;
    font-size: 30px;
}
.el-input{
    width: 500px;
}
</style>