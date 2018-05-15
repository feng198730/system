<template>
    <div class="aside-wrap">
        <el-container style="height: 500px;">
            <el-aside width="200px">
                <el-menu :default-openeds="['user-control']" default-active = '1-1' unique-opened>
                    <el-submenu index="user-control">
                         <template slot="title">
                            <i class="el-icon-menu"></i>用户管理</template>
                        <el-menu-item-group>  
                            <el-menu-item v-for="item of navList" :key="item.name" :index="item.name" @click="handleTab">
                                <i class="glyphicon icon-color" v-if="item.iconClass" :class="item.iconClass"></i>{{item.title}}
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-phone"></i>节日管理</template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                             <el-menu-item index="2-3">选项3</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-setting"></i>组管理</template>
                       <el-menu-item-group>
                            <el-menu-item index="3-1">选项1</el-menu-item>
                            <el-menu-item index="3-2">选项2</el-menu-item>
                             <el-menu-item index="3-3">选项3</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
        </el-container>
    </div>
</template>
<script>
import tabList from '@/assets/js/subNav';

export default {
    data(){
        return {
            navList:tabList
        }
    },
    methods:{
       handleTab(ev){
           this.bus.$emit('updata:tabView',ev.index)
       }
    }
}
</script>
<style scoped>
  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
    flex-shrink: 1;
    padding:10px;
}
 .el-menu{
     border-right:none; 
 }
 .aside-wrap {
    border: 1px solid #DEDEDE;
    box-shadow: 0 0 10px rgba(189, 189, 189, 0.8);
    height: 500px;
    border-radius: 5px;
    margin-left:20px;
    width: 200px;
}
.el-menu-item .glyphicon{
    margin-right:10px;
}
.el-menu-item {
    text-align:left;
}
.el-submenu .el-menu-item{
    min-width:0;
}
</style>

