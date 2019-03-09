<template>
  <div id="app">
    <el-container>
      <el-header>
        <h1 class="h1 fl">
          后台管理
        </h1>
        <el-dropdown class="fr">
          <span class="el-dropdown-link">Admin
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-container>
        <el-aside width="200px">
          <v-nav></v-nav>
        </el-aside>

        <el-main>
          <router-view v-if="isRouterAlive"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import webnav from './components/webnav.vue';
export default { 
  components: {
    'v-nav':webnav
  },
   data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style>
html,
body,
#app,
.el-container {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
}

.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix:after {
  display: block;
  content: "";
  clear: both;
}
.mt10 {
  margin-top: 10px !important;
}

.el-header {
  background: #545c64;
}
.el-aside {
  background-color: rgba(84, 92, 100, 1);
}

.el-main {
  background-color:#f8f9fb;;
}

.h1 {
  margin: 0;
  padding: 0 20px 0 0;
  text-align: center;
  width: 160px;
  height: 60px;
  font-size: 20px;
  line-height: 60px;
  color: rgb(255, 208, 75);
}
.h1 i {
  margin-right: 20px;
  font-size: 40px;
}
.el-dropdown-link {
  color: white;
  line-height: 60px;
}
</style>
