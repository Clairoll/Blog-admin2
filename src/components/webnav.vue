<template>
  <div class="nav">
    <el-row>
      <el-col :span="24">
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          mode="vertical"
          :router="true"
        >
          <el-menu-item index="/" :class="this.$route.path == '/' ? 'active': ''">
            <span slot="title">
              <i class="iconfont icon-homepage"></i>首页
            </span>
          </el-menu-item>
          <el-menu-item index="/article" :class="this.$route.path == '/article' ? 'active': ''">
            <span slot="title">
              <i class="iconfont icon-other"></i>所有文章
            </span>
          </el-menu-item>
          <el-menu-item index="/writearticle" :class="this.$route.path == '/writearticle' ? 'active': ''">
            <span slot="title">
              <i class="iconfont icon-editor"></i>写文章
            </span>
          </el-menu-item>
          <el-menu-item index="/comment" :class="this.$route.path == '/comment' ? 'active': ''">
            <span slot="title">
              <i class="iconfont icon-interactive"></i>评论
            </span>
          </el-menu-item>
          <el-menu-item index="/criticism" :class="this.$route.path == '/criticism' ? 'active': ''">
            <span slot="title">
              <i class="iconfont icon-message"></i>留言
            </span>
          </el-menu-item>
          <el-menu-item index="/time">
            <span slot="title">
              <i class="iconfont icon-time" :class="this.$route.path == '/time' ? 'active': ''"></i>时光轴
            </span>
          </el-menu-item>
          <el-menu-item index="/category" :class="this.$route.path == '/category' ? 'active': ''">
            <span slot="title">
              <i class="iconfont icon-manage"></i>分类
            </span>
          </el-menu-item>
          <el-menu-item index="/User" :class="this.$route.path == '/User' ? 'active': ''">
            <span slot="title">
              <i class="iconfont icon-people"></i>用户管理
            </span>
          </el-menu-item>
          <el-menu-item index="/friend" :class="this.$route.path == '/friend' ? 'active': ''">
            <span slot="title">
              <i class="iconfont icon-people"></i>友情链接
            </span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "webnav"
};
</script>

<style>
.nav i{
  margin-right: 3px;
}
.nav span{
  margin-left: 15px;
  font-size: 14px;
}
.active {
  color: rgb(255, 208, 75) !important;
}
</style>

