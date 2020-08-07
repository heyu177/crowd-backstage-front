<template>
  <el-collapse>
    <el-collapse-item>
      <template slot="title">
        <h3>
          <i class="el-icon-aim"></i> 控制面板
        </h3>
      </template>
    </el-collapse-item>
    <el-collapse-item>
      <template slot="title">
        <h3>
          <i class="el-icon-s-unfold"></i> 权限管理
          <el-badge :value="3" class="mark"></el-badge>
        </h3>
      </template>
      <el-menu>
        <el-menu-item index="1">
          <i class="el-icon-user-solid"></i>用户维护
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-s-check"></i>角色维护
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-s-goods"></i>菜单维护
        </el-menu-item>
      </el-menu>
    </el-collapse-item>
     <el-collapse-item>
      <template slot="title">
        <h3>
          <i class="el-icon-check"></i> 业务审核
          <el-badge :value="3" class="mark"></el-badge>
        </h3>
      </template>
      <el-menu>
        <el-menu-item index="1">
          <i class="el-icon-folder-checked"></i>实名认证审核
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-folder-checked"></i>广告审核
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-folder-checked"></i>项目审核
        </el-menu-item>
      </el-menu>
    </el-collapse-item>
    <el-collapse-item>
      <template slot="title">
        <h3>
          <i class="el-icon-menu"></i> 业务管理
          <el-badge :value="7" class="mark"></el-badge>
        </h3>
      </template>
      <el-menu>
        <el-menu-item index="1">
          <i class="el-icon-picture"></i>资质维护
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-s-data"></i>分类管理
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-d-arrow-right"></i>流程管理
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-s-marketing"></i>广告管理
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-s-comment"></i>消息模板
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-s-operation"></i>项目分类
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-s-flag"></i>项目标签
        </el-menu-item>
      </el-menu>
    </el-collapse-item>
    <el-collapse-item>
      <template slot="title">
        <h3>
          <i class="el-icon-s-order"></i> 参数管理
        </h3>
      </template>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
import Vue from "vue";
import { Collapse, Menu, Badge } from "element-ui";

Vue.use(Collapse);
Vue.use(Menu);
Vue.use(Badge);

export default {};
</script>

<style lang="less" scoped>
.el-collapse-item {
  h3 {
    font-size: 15px;
    font-weight: normal;
  }
  &:nth-child(1) {
    h3 {
      color: #338acc;
    }
  }
  &:nth-child(5) {
    h3 {
      color: #338acc;
    }
  }
}
</style>>