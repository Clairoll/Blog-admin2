<template>
  <div>
    <div>
      <el-input :placeholder="name" v-model="name">
        <template slot="prepend">类别</template>
      </el-input>
      <div style="margin: 10px 0">所属类别：
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in other" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </div>

      <el-button type="primary" @click="save()">保存</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "editCategory",
  data() {
    return {
      id: "",
      pid: "",
      name: "",
      other: "",
      value: ""
    };
  },
  beforeCreate() {
    if (this.$route.query.categoryId) {
      this.id = this.$route.query.categoryId;
      axios({
        method: "post",
        url: "/api/category/edit",
        data: {
          id: this.id,
          pid: 0
        }
      }).then(res => {
        this.name = res.data.category.name;
        this.other = res.data.category0;
        console.log(res.data);
      });
    } else {
      axios({
        method: "post",
        url: "/api/category/add",
        data: {
          pid: -1
        }
      }).then(res => {
        this.other = res.data.category0;
      });
    }
  },
  methods: {
    save() {
      if (this.value == "" || this.name == "") {
        alert("不能为空，请选择");
      } else {
        if (this.$route.query.categoryId) {
          axios({
            method: "post",
            url: "/api/category/edit",
            data: {
              mean: 0,
              pid: this.value,
              name: this.name,
              id: this.$route.query.categoryId
            }
          }).then(res => {
            this.$router.push({ path: "/category" });
          });
        } else {
          axios({
            method: "post",
            url: "/api/category/add",
            data: {
              pid: this.value,
              name: this.name
            }
          }).then(res => {
            this.$router.push({ path: "/category" });
          });
        }
      }
    }
  }
};
</script>

<style>
</style>

