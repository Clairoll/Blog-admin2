<template>
  <div class="comment">
    <el-tabs>
      <el-tab-pane label="所有评论">
        <div class="table">
          <table border="1" cellpadding="0" cellspacing="0" width="100%">
            <thead>
              <tr>
                <th>序号</th>
                <th>评论人</th>
                <th>评论文章</th>
                <th>内容</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(comment, index) in comment" :key="index">
                <td ref="articleId">{{comment.id}}</td>
                <td>{{comment.username}}</td>
                <td>{{articletitle[index]}}</td>
                <td>{{comment.content}}</td>
                <td>
                  <button class="el-button el-button--danger" @click="Delete(comment.id)">删除</button>
                </td>
              </tr>
              <tr>
                <td colspan="9">
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="comment.length"
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
      comment: [] // 文章
    };
  },
  beforeCreate() {
    axios({
      method: "post",
      url: "/api/comment"
    }).then(res => {
      this.comment = res.data.comment;
      // this.username = res.data.username;
      this.articletitle = res.data.articletitle;
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
        url: "/api/comment",
        data: {
          id: id
        }
      }).then(res => {
        this.comment = res.data.comment;
        this.username = res.data.username;
        this.articletitle = res.data.articletitle;
        console.log(res.data);
      });
    }
  }
};
</script>

<style>
.comment .table table tr td,
.comment .table table tr th {
  width: 10%;
  height: 68px;
  border-color: #eee;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.comment .table table td:last-child,
.comment .table table th:last-child {
  width: 20%;
}
.comment .table .table img {
  width: 50px;
  height: 50px;
}
</style>

