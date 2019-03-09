<template>
  <div>
    <el-tabs>
      <el-tab-pane label="分类管理">
        <div>
          <el-tree :data="dataTree">
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span>{{data.name}}</span>
              <span>
                <el-button type="text" size="mini" @click.stop="edit(data.id)">编辑分类</el-button>
                <el-button type="text" size="mini" @click.stop="remove(data.id)">删除分类</el-button>
              </span>
            </span>
          </el-tree>
          <el-button type="primary" plain @click="add()">添加分类</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "category",
  data() {
    return {
      data: [], // 默认接收地数据
      dataTree: [], // 处理过后的数据
    };
  },
  created() {
    axios({
      method: "post",
      url: "/api/category"
    }).then(res => {
      this.data = res.data.category;
      this.dataTree = this._tree(0);
      // console.log(this.dataTree);
    });
  },
  methods: {
    // 将数据处理为树形数据
    _tree(id) {
      let data = this.data.filter(item => item.pid == id);
      data.forEach(item => {
        item.children = this._tree(item.id);
      });
      return data;
    },
    // 增加分类
    add() {
      this.$router.push({ path: "/editCategory"});
    },
    // 编辑分类
    edit(id) {
      this.$router.push({ path: "/editCategory", query: { categoryId: id } });
    },
    // 删除分类
    remove(id) {
      axios({
        method: "post",
        url: "/api/category",
        data: {
          id
        }
      }).then(res => {
        this.data = res.data.category;
        this.dataTree = this._tree(0);
        // console.log(this.dataTree);
      });
    },
    
  }
};
</script>

<style>
.el-tree-node_content {
  padding: 10px;
}
.custom-tree-node {
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
}
</style>

