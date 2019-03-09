<template>
  <div>
    <div>
      <el-input :placeholder="title" v-model="title">
        <template slot="prepend">友链名</template>
      </el-input>
      <el-input :placeholder="url" v-model="url">
        <template slot="prepend">友链地址</template>
      </el-input>
      <el-input :placeholder="content" v-model="content">
        <template slot="prepend">友链简介</template>
      </el-input>

      <el-button type="primary" @click="save()">保存</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "editfriend",
  data() {
    return {
      id: "",
      title: "",
      url: "",
      content: "",
    };
  },
  beforeCreate() {
    if (this.$route.query.friendId) {
      this.id = this.$route.query.friendId;
      // console.log(this.id);
      axios({
        method: "post",
        url: "/api/friend/edit",
        data: {
          id: this.id
        }
      }).then(res => {
        // console.log(md5(res.data.friend.url));
        this.title = res.data.friend.title;
        this.url = res.data.friend.url;
        this.content = res.data.friend.content;
      });
    }
  },
  methods: {
    save() {
      if (
        this.title == "" ||
        this.url == "" ||
        this.content == ""
      ) {
        alert("请输入内容，不能为空");
      } else {
        if (this.$route.query.friendId) {
          axios({
            method: "post",
            url: "/api/friend/edit",
            data: {
              title: this.title,
              url: this.url,
              content: this.content,
              id: this.$route.query.friendId,
              mean: 0
            }
          }).then(res => {
            this.$router.push({ path: "/friend" });
          });
        } else {
          axios({
            method: "post",
            url: "/api/friend/add",
            data: {
              title: this.title,
              url: this.url,
              content: this.content
            }
          }).then(res => {
            this.$router.push({ path: "/friend" });
          });
        }
      }
    }
  }
};
</script>

<style>
</style>

