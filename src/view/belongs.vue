<template>
  <div>
    <el-row>
      <el-button plain icon="el-icon-plus" style="border:none">添加</el-button>
      <el-button plain icon="el-icon-close" style="border:none">删除</el-button>
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
      <el-table-column prop="id" label="id" width=""></el-table-column>
      <el-table-column prop="leader" label="所属人" width=""></el-table-column>
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
        name: "table2",
      data(){
        let arr = [
          {
            id: "1",
            leader: "xuelb"
          },
          {
            id: "2",
            leader: "xuelb"
          },
          {
            id: "3",
            leader: "xuelb"
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
