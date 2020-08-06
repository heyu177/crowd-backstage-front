<template>
  <el-collapse>
    <el-collapse-item>
      <template slot="title">
        <h3>
          <i class="el-icon-aim"></i>控制面板
        </h3>
      </template>
    </el-collapse-item>
    <el-collapse-item>
      <template slot="title">
        <h3>
          <i class="el-icon-s-unfold"></i>权限管理 <el-badge :value="3" class="mark"></el-badge>
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
  </el-collapse>
</template>

<script>
import Vue from "vue";
import { Collapse, Menu,Badge} from "element-ui";

Vue.use(Collapse);
Vue.use(Menu);
Vue.use(Badge)

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
}
</style>>