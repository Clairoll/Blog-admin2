<template>
  <div class="article">
    <el-tabs>
      <el-tab-pane label="所有文章">
        <div class="table">
          <table border="1" cellpadding="0" cellspacing="0" width="100%">
            <thead>
              <tr>
                <th>序号</th>
                <th>标题</th>
                <th>作者</th>
                <th>内容</th>
                <th>图片</th>
                <th>分类</th>
                <th>点赞量</th>
                <th>阅读量</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(article, index) in articleList" :key="index">
                <td ref="articleId">{{article.id}}</td>
                <td>{{article.title}}</td>
                <td>{{username[index]}}</td>
                <td style="max-width: 300px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{article.content}}</td>
                <td>
                  <img :src="article.img" alt width="50" height="50" :onerror="defaultImg">
                  <!-- <img src="../assets/img/avator.jpg" alt width="50" height="50"> -->
                </td>
                <td>{{categoryname[index]}}</td>
                <td>{{article.innocuous}}</td>
                <td>{{article.read}}</td>
                <td>
                  <button class="el-button el-button--primary" @click="edit(article.id)">编辑</button>
                  <button class="el-button el-button--danger" @click="Delete(article.id)">删除</button>
                </td>
              </tr>
              <tr>
                <td colspan="9">
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="articleList.length"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                  ></el-pagination>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "webarticle",
  data() {
    return {
      currentPage: 1, // 初始页
      pagesize: 10, // 每页的数据
      articleList: [], // 文章
      userList: [],
      username: [],
      categoryname: [],
      defaultImg: 'this.src="' + require('../assets/img/avator.jpg') + '"'
    };
  },
  beforeCreate() {
    axios({
      method: "post",
      url: "/api/article"
    }).then(res => {
      this.articleList = res.data.articleList;
      this.username = res.data.username;
      this.categoryname = res.data.categoryname;
    });
  },
  methods: {
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange(size) {
      this.pagesize = size;
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
    },
    Delete(id) {
      axios({
        method: "post", 
        url: "/api/article",
        data: {
          id: id
        }
      }).then(res => {
        this.articleList = res.data.articleList;
        this.username = res.data.username;
        this.categoryname = res.data.categoryname;
        console.log(res.data);
      });
    },
    edit(id) { 
      this.$router.push({path: '/editArticle',query:{articleId: id}}); 
    }
  }
};
</script>

<style>
.article .table table tr td,
.article .table table tr th {
  width: 10%;
  height: 68px;
  border-color: #eee;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.article .table table td:last-child,
.article .table table th:last-child {
  width: 20%;
}
.article .table .table img {
  width: 50px;
  height: 50px;
}
</style>

