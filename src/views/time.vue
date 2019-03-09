<template>
  <div class="time">
    <el-tabs>
      <el-tab-pane label="时光轴">
        <div class="table">
          <table border="1" cellpadding="0" cellspacing="0" width="100%">
            <thead>
              <tr>
                <th>序号</th>
                <th>主题</th>
                <th>内容</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(time, index) in time" :key="index">
                <td>{{time.id}}</td>
                <td>{{time.title}}</td>
                <td>{{time.content}}</td>
                <td>
                  <button class="el-button el-button--primary" @click="edit(time.id)">编辑</button>
                  <button class="el-button el-button--danger" @click="Delete(time.id)">删除</button>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <el-button type="primary" plain @click="add()">添加时光轴</el-button>
                </td>
                <td colspan="7">
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="time.length"
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
      time: [] // 评论
    };
  },
  beforeCreate() {
    axios({
      method: "post",
      url: "/api/time"
    }).then(res => {
      this.time = res.data.time;
      // console.log(this.time)
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
      this.$router.push({path: '/editTime',query:{timeId: id}}); 
    },
    Delete(id) {
      axios({
        method: "post",
        url: "/api/time",
        data: {
          id: id
        }
      }).then(res => {
       this.time = res.data.time;
        console.log(res.data);
      });
    },
    add() {
      this.$router.push({path: '/editTime'})
    }
  }
};
</script>

<style>
.time .table table tr td,
.time .table table tr th {
  width: 10%;
  height: 68px;
  border-color: #eee;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.time .table table td:last-child,
.time .table table th:last-child {
  width: 20%;
}
.time .table .table img {
  width: 50px;
  height: 50px;
}
</style>

