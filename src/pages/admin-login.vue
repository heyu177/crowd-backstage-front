<template>
  <div>
      <el-container>
          <el-header>
              <h1>
                  <a href="#" class="title">尚筹网-创意产品众筹平台</a>
              </h1>
          </el-header>
          <el-main></el-main>
      </el-container>
  </div>
</template>

<script>
import Vue from "vue"
import {Container,Header,Main} from "element-ui"

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)

export default {

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
</style>