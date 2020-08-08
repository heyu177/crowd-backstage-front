<template>
  <div>
    <el-row>
      <el-col>
        <h1>控制面板</h1>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <div>200×200</div>
        <p>Label</p>
        <p>Something else</p>
      </el-col>
      <el-col :span="6">
        <div>200×200</div>
        <p>Label</p>
        <p>Something else</p>
      </el-col>
      <el-col :span="6">
        <div>200×200</div>
        <p>Label</p>
        <p>Something else</p>
      </el-col>
      <el-col :span="6">
        <div>200×200</div>
        <p>Label</p>
        <p>Something else</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from "vue";
import { Row, Col } from "element-ui";

Vue.use(Row);
Vue.use(Col);

export default {};
</script>

<style lang="less" scoped>
.el-row {
  &:nth-child(1) {
    border-bottom: 2px solid #eee;
    h1 {
      font-size: 40px;
      font-weight: normal;
      margin: 0 0 0 15px;
      padding-bottom: 10px;
    }
  }
  &:nth-child(2) {
    margin-top: 20px;
    .el-col {
      div {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        font-weight: bold;
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin: 0;
        &:nth-of-type(1){
            font-size: 20px;
        }
        &:nth-of-type(2){
            font-family: "仿宋";
        }
      }
      &:nth-child(2n-1) {
        div {
          background: #0d8fdb;
          color: #fff;
        }
      }
      &:nth-child(2n) {
        div {
          background: #39dbac;
        }
      }
    }
  }
}
</style>>