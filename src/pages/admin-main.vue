<template>
  <el-container>
    <el-header>
      <h1>众筹平台 - 控制面板</h1>
      <div class="button">
        <el-button type="danger"><i class="el-icon-question"></i>帮助</el-button>
      </div>
      <el-dropdown>
        <el-button type="success">
          <i class="el-icon-user-solid"></i>张三<i class="el-icon-caret-bottom"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="el-icon-s-tools"></i>个人设置</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-chat-dot-square"></i>消息</el-dropdown-item>
          <el-dropdown-item divided><i class="el-icon-switch-button"></i>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-input placeholder="查询" v-model="search"></el-input>
    </el-header>
    <el-container>
      <el-aside>bbb</el-aside>
      <el-main>ccc</el-main>
    </el-container>
  </el-container>
</template>

<script>
import Vue from "vue"
import {Container,Input,Dropdown,Button} from "element-ui"

Vue.use(Container)
Vue.use(Input)
Vue.use(Dropdown)
Vue.use(Button)

export default {
  data(){
    return {
      search:""
    }
  }
}
</script>

<style lang="less" scoped>
.el-header{
  background: #222;
  h1{
    color: #9d9d9d;
    margin:auto 0;
    height: 100%;
    line-height: 60px;
    font-size: 32px;
    font-weight: normal;
    float: left;
  }
  .el-input{
    float: right;
    width: 200px;
    height: 100%;
    line-height: 60px;
    margin: 0 5px;
  }
  .el-dropdown{
    float: right;
    margin: auto 5px;
    height: 100%;
    line-height: 60px;
  }
  .button{
    float: right;
    margin: auto 5px;
    height: 100%;
    line-height: 60px;
  }
}
</style>>