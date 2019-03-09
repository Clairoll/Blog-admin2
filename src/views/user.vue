<template>
  <div class="user">
    <el-tabs>
      <el-tab-pane label="用户管理">
        <div class="table">
          <table border="1" cellpadding="0" cellspacing="0" width="100%">
            <thead>
              <tr>
                <th>序号</th>
                <th>名称</th>
                <th>手机号</th>
                <th>邮件</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in user" :key="index">
                <td>{{user.id}}</td>
                <td>{{user.username}}</td>
                <td>{{user.mobile}}</td>
                <td>{{user.email}}</td>
                <td>
                  <button class="el-button el-button--primary" @click="edit(user.id)">编辑</button>
                  <button class="el-button el-button--danger" @click="Delete(user.id)">删除</button>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <el-button type="primary" plain @click="add()">添加用户</el-button>
                </td>
                <td colspan="7">
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="user.length"
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
  name: "user",
  data() {
    return {
      currentPage: 1, // 初始页
      pagesize: 10, // 每页的数据
      user: ""
    };
  },
  beforeCreate() {
    axios({
      method: "post",
      url: "/api/user"
    }).then(res => {
      this.user = res.data.user;
      // console.log(this.user)
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
     this.$router.push({path: '/editUser', query:{userId: id}})
    //  console.log(id)
    },
    Delete(id) {
      axios({
        method: "post",
        url: "/api/user",
        data: {
          id: id
        }
      }).then(res => {
       this.user = res.data.user;
        console.log(res.data);
      });
    },
    add() {
      this.$router.push({path: '/edituser'})
    }
  }
};
</script>

<style>
.user .table table tr td,
.user .table table tr th {
  width: 10%;
  height: 68px;
  border-color: #eee;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.user .table table td:last-child,
.user .table table th:last-child {
  width: 20%;
}
.user .table .table img {
  width: 50px;
  height: 50px;
}
</style>

