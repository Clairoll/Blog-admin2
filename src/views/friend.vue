<template>
  <div class="friend">
    <el-tabs>
      <el-tab-pane label="友情链接">
        <div class="table">
          <table border="1" cellpadding="0" cellspacing="0" width="100%">
            <thead>
              <tr>
                <th>序号</th>
                <th>友链名</th>
                <th>友链地址</th>
                <th>友链简介</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(friend, index) in friend" :key="index">
                <td>{{friend.id}}</td>
                <td>{{friend.title}}</td>
                <td>{{friend.url}}</td>
                <td>{{friend.content}}</td>
                <td>
                  <button class="el-button el-button--primary" @click="edit(friend.id)">编辑</button>
                  <button class="el-button el-button--danger" @click="Delete(friend.id)">删除</button>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <el-button type="primary" plain @click="add()">添加友情链接</el-button>
                </td>
                <td colspan="7">
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="friend.length"
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
import md5 from "md5";
export default {
  name: "friend",
  data() {
    return {
      currentPage: 1, // 初始页
      pagesize: 10, // 每页的数据
      friend: ""
    };
  },
  beforeCreate() {
    axios({
      method: "post",
      url: "/api/friend"
    }).then(res => {
      this.friend = res.data.friend;
      // console.log(this.friend)
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
    edit(id){
     this.$router.push({path: '/editFriend', query:{friendId: id}})
    //  console.log(id)
    },
    Delete(id) {
      axios({
        method: "post",
        url: "/api/friend",
        data: {
          id: id
        }
      }).then(res => {
       this.friend = res.data.friend;
        console.log(res.data);
      });
    },
    add() {
      this.$router.push({path: '/editfriend'})
    }
  }
};
</script>

<style>
.friend .table table tr td,
.friend .table table tr th {
  width: 10%;
  height: 68px;
  border-color: #eee;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.friend .table table td:last-child,
.friend .table table th:last-child {
  width: 20%;
}
.friend .table .table img {
  width: 50px;
  height: 50px;
}
</style>

