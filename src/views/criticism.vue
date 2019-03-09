<template>
  <div class="criticism">
    <el-tabs>
      <el-tab-pane label="所有留言">
        <div class="table">
          <table border="1" cellpadding="0" cellspacing="0" width="100%">
            <thead>
              <tr>
                <th>序号</th>
                <th>留言人</th>
                <th>留言内容</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(criticism, index) in criticism" :key="index">
                <td ref="articleId">{{criticism.id}}</td>
                <td>{{criticism.username}}</td>
                <td>{{criticism.content}}</td>
                <td>
                  <button class="el-button el-button--danger" @click="Delete(criticism.id)">删除</button>
                </td>
              </tr>
              <tr>
                <td colspan="9">
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="criticism.length"
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
      criticism: [] // 评论
    };
  },
  beforeCreate() {
    axios({
      method: "post",
      url: "/api/criticism"
    }).then(res => {
      this.criticism = res.data.criticism;
      // console.log(this.criticism)
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
        url: "/api/criticism",
        data: {
          id: id
        }
      }).then(res => {
       this.criticism = res.data.criticism;
        console.log(res.data);
      });
    }
  }
};
</script>

<style>
.criticism .table table tr td,
.criticism .table table tr th {
  width: 10%;
  height: 68px;
  border-color: #eee;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.criticism .table table td:last-child,
.criticism .table table th:last-child {
  width: 20%;
}
.criticism .table .table img {
  width: 50px;
  height: 50px;
}
</style>

