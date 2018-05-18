<template>
  <div>
    <el-row>
      <el-button plain icon="el-icon-plus" @click="dialogFormVisible = true" style="border:none">添加</el-button>
      <el-button plain icon="el-icon-close" @click="deleteFestival" style="border:none">删除</el-button>
      <el-button plain icon="el-icon-edit"  @click="editFestival" style="border:none">修改</el-button>
      <el-button plain icon="el-icon-error" @click="multicleDelFestival" style="border:none">批量删除</el-button>
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
      <el-table-column prop="name" label="节日名称" width=""></el-table-column>
      <el-table-column prop="date" label="日期" width=""></el-table-column>
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
    <el-dialog title="编辑用户信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="节日名称：" :label-width="formLabelWidth">
          <el-input v-model="form.name" placeholder="请输入节日名称" class="border" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="节日日期：" :label-width="formLabelWidth">
          <el-input v-model="form.date" class="border" placeholder="请输入中文名" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="节日类型：" :label-width="formLabelWidth">
          <el-select v-model="form.type" class="border">
            <el-option v-for="item in type" :key="item.name" :label="item.name" :value="item.name"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addFestival">确认添加</el-button>
      </div>
    </el-dialog>
    <el-dialog title="编辑用户信息" :visible.sync="dialogFormEdit">
      <el-form :model="editFestivalMsg">
        <el-form-item label="节日名称：" :label-width="formLabelWidth">
          <el-input v-model="editFestivalMsg.name" placeholder="请输入节日名称" class="border" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="节日日期：" :label-width="formLabelWidth">
          <el-input v-model="editFestivalMsg.date" class="border" placeholder="请输入节日日期" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="节日类型：" :label-width="formLabelWidth">
          <el-select v-model="form.type" class="border">
            <el-option v-for="item in type" :key="item.name" :label="item.name" :value="item.name"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="editFestivalBtn">确认修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "table3",
      data(){
        let arr = [
          {
            name: "休",
            date: "20170101"
          },
          {
            name: "休",
            date: "20170101"
          },
          {
            name: "休",
            date: "20170101"
          },
          {
            name: "休",
            date: "20170101"
          },
          {
            name: "班",
            date: "20170101"
          },
          {
            name: "休",
            date: "20170101"
          },
          {
            name: "休",
            date: "20170101"
          },
          {
            name: "休",
            date: "20170101"
          },
          {
            name: "休",
            date: "20170101"
          },
          {
            name: "休",
            date: "20170101"
          }
        ]
        return{
          tableData3: arr,
          multipleSelection: [],
          dialogTableVisible: false,
          dialogFormVisible: false,
          dialogFormEdit:false,
          form: {
            name: '',
            date: '',
            type: ''
          },
          editFestivalMsg:{
            name: '',
            date: '',
            type: ''
          },
          type:[
            {
              name:'法定节假日'
            },
            {
              name:'公司节日'
            },
            {
              name:'分（子）公司成立日'
            }
          ],
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
        addFestival(){
          this.dialogFormVisible = false;
          console.log(111)
        },
        deleteFestival(){
          var checkedUser = this.multipleSelection;
          if(checkedUser.length == 1){
            this.$confirm('确定要删除此节日吗?', '提示', {
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
        editFestival(){
          var checkedUser = this.multipleSelection;
          if(checkedUser.length == 1){
            console.log(checkedUser)
            this.editFestivalMsg.name = checkedUser[0].name;
            this.editFestivalMsg.date = checkedUser[0].date;
            this.dialogFormEdit = true;
          }else{
            this.$message({
              showClose: true,
              message: '请选中一个对象进行修改操作',
              type: 'warning'
            });
          }
        },
        editFestivalBtn(){
          this.dialogFormEdit = false;
          this.$message({
            message: '节日信息修改成功！',
            type: 'success'
          });
        },
        multicleDelFestival(){
          var checkedUser = this.multipleSelection;
          if(checkedUser.length){
            this.$confirm('确定要删除这些节日吗?', '提示', {
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
              message: '请至少选中一个对象进行删除操作',
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
  border:1px solid #e0e0e0;
}
</style>
