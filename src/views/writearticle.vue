<template>
  <div>
    <el-input :placeholder="title" v-model="title">
      <template slot="prepend">标题</template>
    </el-input>
    <el-input :placeholder="img" v-model="img">
      <template slot="prepend">图片路径</template>
    </el-input>
    <div ref="editor" style="text-align:left;height:100%"></div>
    分类：
    <select id="sel" class="sel">
      <option v-for="item in category" :value="item.id">{{item.name}}</option>
    </select>
    作者：
    <select id="user" class="sel">
      <option value="1">风雅</option>
      <option value="2">Carioll</option>
    </select>
    <button class="btn" @click="getContent()">保存</button>
  </div>
</template>

<script>
import E from "wangeditor";
import axios from "axios";
export default {
  name: "editor",
  data() {
    return {
      content: "",
      title: "",
      img: "",
      category: [],
      categoryId: "",
      userId: ""
    };
  },
  created() {
    axios({
      method: "post",
      url: "/api/category"
    }).then(res => {
      this.category = res.data.category;
      // console.log(this.category)
    });
  },
  methods: {
    getContent() {
      this.categoryId = document.getElementById("sel").value; //获取分类id
      this.userId = document.getElementById("user").value; //获取分类id
      // console.log(this.content);
      axios({
        method: "post",
        url: "/api/writeArticle",
        data: {
          title: this.title,
          img: this.img,
          content: this.content,
          categoryId: this.categoryId,
          userId: this.userId
        }
      }).then(res => {
        this.title = "";
        this.content = "";
        this.$router.push({path: '/article'});
      });
    }
  },
  mounted() {
    var editor = new E(this.$refs.editor);
    editor.customConfig.onchange = html => {
      this.content = html;
    };
    editor.create();
  }
};
</script>

<style>
.w-e-text-container {
  height: 100% !important;
}
.btn {
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
  display: block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 5px auto;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.sel {
  padding: 8px 12px;
}
</style>
