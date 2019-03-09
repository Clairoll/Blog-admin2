<template>
  <div class="home">
    <div class="banner">
      <h1>风雅的个人博客</h1>
      <span>自己选的路，自己走</span>
      <br>
      <router-link to="/writearticle" tag="button">写文章</router-link>
    </div>
    <div class="statistics">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>站长统计</span>
        </div>
        <div class="text item">{{articleList}}篇文章</div>
        <div class="text item">{{commentList}}条评论</div>
        <div class="text item">{{criticismList}}条留言</div>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data(){
    return {
      articleList: 0, // 文章数量
      commentList:0 , //评论数量
      criticismList: 0 // 留言数量
    }
  },
  beforeCreate() {
    axios({
      method: "get",
      url: "/api/home",
    }).then(res => {
      this.articleList = res.data.articleList.length;
      this.commentList = res.data.commentList.length;
      this.criticismList = res.data.criticismList.length;
    });
  },
};
</script>

<style>
.home .banner {
  width: 100%;
  height: 300px;
  background: #eee;
  text-align: center;
  margin-top: -10px;
}
.home .banner h1 {
  padding-top: 75px;
}
.home .banner button {
  color: #ffffff;
  background-color: #40586d;
  border-color: #374b5d;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
  margin-top: 25px;
}
.home .statistics{
  margin-top: 35px;
  width: 35%;
  height: 200px;
}
</style>

