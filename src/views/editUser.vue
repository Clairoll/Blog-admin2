<template>
  <div>
    <div>
      <el-input :placeholder="username" v-model="username">
        <template slot="prepend">名称</template>
      </el-input>
      <el-input :placeholder="password" v-model="password">
        <template slot="prepend">密码(加密哦)</template>
      </el-input>
      <el-input :placeholder="mobile" v-model="mobile">
        <template slot="prepend">手机号</template>
      </el-input>
      <el-input :placeholder="email" v-model="email">
        <template slot="prepend">邮件</template>
      </el-input>

      <el-button type="primary" @click="save()">保存</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import md5 from "md5";
export default {
  name: "editUser",
  data() {
    return {
      id: "",
      username: "",
      password: "",
      mobile: "",
      email: ""
    };
  },
  beforeCreate() {
    if (this.$route.query.userId) {
      this.id = this.$route.query.userId;
      // console.log(this.id);
      axios({
        method: "post",
        url: "/api/user/edit",
        data: {
          id: this.id
        }
      }).then(res => {
        console.log(md5(res.data.user.password));
        this.username = res.data.user.username;
        this.password = md5(res.data.user.password);
        this.mobile = res.data.user.mobile;
        this.email = res.data.user.email;
      });
    }
  },
  methods: {
    save() {
      if (
        this.username == "" ||
        this.password == "" ||
        this.mobile == "" ||
        this.email == ""
      ) {
        alert("请输入内容，不能为空");
      } else {
        if (this.$route.query.userId) {
          axios({
            method: "post",
            url: "/api/user/edit",
            data: {
              username: this.username,
              password: this.password,
              mobile: this.mobile,
              email: this.email,
              id: this.$route.query.userId,
              mean: 0
            }
          }).then(res => {
            this.$router.push({ path: "/user" });
          });
        } else {
          axios({
            method: "post",
            url: "/api/user/add",
            data: {
              username: this.username,
              password: this.password,
              mobile: this.mobile,
              email: this.email,
            }
          }).then(res => {
            this.$router.push({ path: "/user" });
          });
        }
      }
    }
  }
};
</script>

<style>
</style>

