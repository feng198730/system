<template>
  <div>
    <el-row>
      <el-button plain icon="el-icon-plus" @click="dialogFormVisible = true" style="border:none">添加</el-button>
      <el-button plain icon="el-icon-close" @click="deleteUser" style="border:none">删除</el-button>
      <el-button plain icon="el-icon-edit" @click="editUser" style="border:none">修改</el-button>
      <el-button plain icon="el-icon-error" @click="multicleDelUser" style="border:none">批量删除</el-button>
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
      <el-table-column prop="name" label="用户名" width=""></el-table-column>
      <el-table-column prop="cname" label="中文名" width=""></el-table-column>
      <el-table-column prop="limit" label="权限" width=""></el-table-column>
      <el-table-column prop="leader" label="所属人" width=""></el-table-column>
      <el-table-column prop="group" label="所属组" width=""></el-table-column>
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
        <el-form-item label="用户名：" :label-width="formLabelWidth">
          <el-input v-model="form.name" placeholder="请输入用户名" class="border" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="中文名：" :label-width="formLabelWidth">
          <el-input v-model="form.cname" class="border" placeholder="请输入中文名" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户权限：" :label-width="formLabelWidth">
          <el-select v-model="form.limit" class="border">
            <el-option label="超级管理员" value="shanghai"></el-option>
            <el-option label="管理员" value="beijing"></el-option>
            <el-option label="普通用户" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属人：" :label-width="formLabelWidth">
          <el-select v-model="form.leader" class="border">
            <el-option v-for="item in leaders" :key="item.name" :label="item.name" :value="item.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属组：" :label-width="formLabelWidth">
          <el-select v-model="form.group" class="border">
            <el-option label="秘书" value="shanghai"></el-option>
            <el-option label="管委会" value="beijing"></el-option>
            <el-option label="其他" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addUser">确认添加</el-button>
      </div>
    </el-dialog>
    <el-dialog title="编辑用户信息" :visible.sync="dialogFormEdit">
      <el-form :model="editUserMsg">
        <el-form-item label="用户名：" :label-width="formLabelWidth">
          <el-input v-model="editUserMsg.name" placeholder="请输入用户名" class="border" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="中文名：" :label-width="formLabelWidth">
          <el-input v-model="editUserMsg.cname" class="border" placeholder="请输入中文名" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户权限：" :label-width="formLabelWidth">
          <el-select v-model="editUserMsg.limit" class="border">
            <el-option label="超级管理员" value="shanghai"></el-option>
            <el-option label="管理员" value="beijing"></el-option>
            <el-option label="普通用户" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属人：" :label-width="formLabelWidth">
          <el-select v-model="editUserMsg.leader" class="border">
            <el-option v-for="item in leaders" :key="item.name" :label="item.name" :value="item.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属组：" :label-width="formLabelWidth">
          <el-select v-model="editUserMsg.group" class="border">
            <el-option label="秘书" value="shanghai"></el-option>
            <el-option label="管委会" value="beijing"></el-option>
            <el-option label="其他" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="editUserBtn">确认修改</el-button>
      </div>
    </el-dialog>
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
          multipleSelection: [],
          dialogTableVisible: false,
          dialogFormVisible: false,
          dialogFormEdit:false,
          form: {
            name: '',
            cname: '',
            limit: '',
            leader:'',
            group:'',
          },
          editUserMsg:{
            name: '',
            cname: '',
            limit: '',
            leader:'',
            group:'',
          },
          leaders:[
            {
              name:'renky01'
            },
            {
              name:'xuelb'
            },
            {
              name:'liudy'
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
        addUser(){
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
        editUser(){
          var checkedUser = this.multipleSelection;
          if(checkedUser.length == 1){
            console.log(checkedUser)
            this.editUserMsg.name = checkedUser[0].name;
            this.editUserMsg.cname = checkedUser[0].cname;
            this.editUserMsg.limit = checkedUser[0].limit;
            this.editUserMsg.leader = checkedUser[0].leader;
            this.editUserMsg.group = checkedUser[0].group;
            this.dialogFormEdit = true;
          }else{
            this.$message({
              showClose: true,
              message: '请选中一个对象进行修改操作',
              type: 'warning'
            });
          }
        },
        editUserBtn(){
          this.dialogFormEdit = false;
          this.$message({
            message: '用户信息修改成功！',
            type: 'success'
          });
        },
        multicleDelUser(){
          var checkedUser = this.multipleSelection;
          if(checkedUser.length){
            this.$confirm('确定要删除这些用户吗?', '提示', {
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
  border: 1px solid #e0e0e0;
}
</style>
