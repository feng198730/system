<template>
  <div>
    <el-row>
      <el-button plain icon="el-icon-plus" @click="dialogFormVisible = true" style="border:none">添加</el-button>
      <el-button plain icon="el-icon-close" @click="deleteUser" style="border:none">删除</el-button>
    </el-row>
    <el-table
      ref="multipleTable"
      :data="tableData3"
      max-height="465"
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
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
    <el-dialog title="添加所属人" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="所属人：" :label-width="formLabelWidth">
          <el-input v-model="form.leader" placeholder="请添加所属人" class="border" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addLeader">确认添加</el-button>
      </div>
    </el-dialog>
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
          multipleSelection: [],
          dialogTableVisible: false,
          dialogFormVisible: false,
          dialogFormEdit:false,
          form: {
            leader:''
          },
          formLabelWidth: '120px'
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
        },
        addLeader(){
          this.dialogFormVisible = false;
          console.log(111)
        },
        deleteUser(){
          var checkedUser = this.multipleSelection;
          if(checkedUser.length == 1){
            this.$confirm('确定要删除此用户吗?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          }else{
            this.$message({
              showClose: true,
              message: '请选中一个对象进行删除操作',
              type: 'warning'
            });
          }
        },
        handleSizeChange(val) {
          console.log('每页'+val+'条');
        },
        handleCurrentChange(val) {
          console.log('当前页'+val);
        }
      }
    }
</script>

<style scoped>
  .border{
    border: 1px solid #e0e0e0;
  }
</style>
