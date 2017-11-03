<template>
  <div class="h-menu">
    <el-menu
      default-active="0"
      class="el-menu-vertical-demo">
      <template v-for="(menuItem, index) in menuList">
        <el-menu-item :index="index + ''" @click="loadMenuContent(menuItem)">
          <i :class="menuItem.icon"></i>
          <span slot="title">{{menuItem.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import {menuList} from './menuList'

export default {
  name: 'home',
  data () {
    return {
      menuList,
      isCollapse: false
    }
  },

  methods: {
    loadMenuContent (menuItem) {
      if (menuItem.url) {
        // 导航菜单跳转
        this.$router.push(menuItem.url)
      }
    }
  }
}
</script>

<style scoped>
  .h-menu {
    overflow: hidden;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    min-height: 400px;
  }
</style>
