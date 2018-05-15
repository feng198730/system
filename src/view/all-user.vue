<template>
  <div>
    <el-row>
      <el-button plain icon="el-icon-plus" style="border:none">添加</el-button>
      <el-button plain icon="el-icon-close" style="border:none">删除</el-button>
      <el-button plain icon="el-icon-edit" style="border:none">修改</el-button>
      <el-button plain icon="el-icon-error" style="border:none">批量删除</el-button>
    </el-row>
    <el-table
      ref="multipleTable"
      :data="tableData3"
      max-height="300"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      border>
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column prop="name" label="用户名" width=""></el-table-column>
      <el-table-column prop="cname" label="中文名" width=""></el-table-column>
      <el-table-column prop="limit" label="权限" width=""></el-table-column>
      <el-table-column prop="leader" label="所属人" width=""></el-table-column>
      <el-table-column prop="group" label="所属组" width=""></el-table-column>
    </el-table>
    <div class="block" style="text-align: center;padding: 20px 0;">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="5"
        :total="10">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    export default {
      name: "table1",
      data(){
        let arr = [
          {
            name: "xuelb",
            cname: "张三",
            limit:'超级管理员',
            leader: "xuelb",
            group: "秘书"
          },
          {
            name: "xuelb",
            cname: "张三",
            limit:'超级管理员',
            leader: "xuelb",
            group: "秘书"
          }, 
          {
            name: "xuelb",
            cname: "张三",
            limit:'超级管理员',
            leader: "xuelb",
            group: "秘书"
          },
          {
            name: "xuelb",
            cname: "张三",
            limit:'超级管理员',
            leader: "xuelb",
            group: "秘书"
          },
          {
            name: "xuelb",
            cname: "张三",
            limit:'超级管理员',
            leader: "xuelb",
            group: "秘书"
          }
        ]
        return{
          tableData3: arr,
          multipleSelection: []
        }
      },
      methods: {
        toggleSelection(rows) {
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row);
            });
          } else {
            this.$refs.multipleTable.clearSelection();
          }
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        }
      }
    }
</script>

<style scoped>

</style>
