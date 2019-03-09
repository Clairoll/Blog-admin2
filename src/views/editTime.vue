<template>
  <div>
    <div>
      <el-input :placeholder="title" v-model="title">
        <template slot="prepend">标题</template>
      </el-input>
      <el-input type="textarea" v-model="content"></el-input>

      <el-button type="primary" @click="save()">保存</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "editTime",
  data() {
    return {
      id: "",
      title: "",
      content: ""
    };
  },
  beforeCreate() {
    if (this.$route.query.timeId) {
      this.id = this.$route.query.timeId;
      axios({
        method: "post",
        url: "/api/time/edit",
        data: {
          id: this.id
        }
      }).then(res => {
        console.log(res.data);
        this.title = res.data.time.title;
        this.content = res.data.time.content;
      });
    }
  },
  methods: {
    save() {
      if (this.content == "" || this.title == "") {
        alert("请输入内容，不能为空");
      } else {
        if (this.$route.query.timeId) {
          axios({
            method: "post",
            url: "/api/time/edit",
            data: {
              content: this.content,
              title: this.title,
              id: this.$route.query.timeId,
              mean: 0
            }
          }).then(res => {
            this.$router.push({ path: "/time" });
          });
        } else {
          axios({
            method: "post",
            url: "/api/time/add",
            data: {
              content: this.content,
              title: this.title,
            }
          }).then(res => {
            this.$router.push({ path: "/time" });
          });
        }
      }
    }
  }
};
</script>

<style>
</style>

