<template>
  <div class="h-web">
    <!-- 头部 -->
    <div class="h-header">
      <div class="h-header__logo">
        <img src="./assets/logo.png" alt="">
      </div>
      <div class="h-header__nav">
        <div class="nav-item nav-item-seach">
          <el-input placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
        </div>
        <div class="nav-item">
          <header-bar></header-bar>
        </div>
      </div>
    </div>
    <!-- body -->
    <div class="h-main">
      <el-row>
        <el-col :span="6">
          <menu-bar></menu-bar>
        </el-col>
        <el-col :span="18">
          <div id="app">
            <router-view/>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>

import MenuBar from './commons/menus/index'
import HeaderBar from './commons/menus/headerMenu'

export default {
  name: 'app',

  components: {
    MenuBar,
    HeaderBar
  }
}
</script>

<style>
html body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.h-web {
  font: normal 14px/1.5em 'Microsoft YaHei', '微软雅黑', arial, helvetica, sans-serif;
  overflow: hidden;
}
.h-header {
  height: 80px;
  width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  /*border: 1px solid #ddd;*/
}
.h-main {
  height: 100%;
  width: 1140px;
  margin: 0 auto;
  /*border: 1px solid #ddd;*/
}
#app {
}

.h-header__logo {
  width: 25%;
  line-height: 80px;
  float: left;
  margin: 0;
  display: flex;
  align-items: center;
}
.h-header__logo>img {
  width: 64px;
  height: 64px;
}
.h-header__nav {
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav {
  float: right;
  height: 100%;
  line-height: 80px;
  background: transparent;
  padding: 0;
  margin: 0;
}
.nav-item {
  display: inline-block;
  margin-left: 15px;
}
</style>
