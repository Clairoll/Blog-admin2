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
  name: "editArticle",
  data() {
    return {
      id: "",
      title: "",
      content: "",
      // categoryId: ""
    };
  },
  beforeCreate() {
    this.id = this.$route.query.articleId;
    axios({
      method: "post",
      url: "/api/article/edit",
      data: {
        id: this.id
      }
    }).then(res => {
      // console.log(res.data)
      this.title = res.data.article.title;
      this.content = res.data.article.content;
      // this.categoryId = res.data.category.id;
      // console.log(this.categoryId);
    });
  },
  methods: {
    save(){
      axios({
      method: "post",
      url: "/api/article/edit",
      data: {
        content:this.content,
        title:this.title,
        id:this.$route.query.articleId,
        mean:0
      }
    }).then(res => {
      this.$router.push({path: '/article'});
    });
    }
  }
};
</script>

<style>
</style>

