<template>
    <div class="aside-wrap">
        <el-container style="height: 500px;">
            <transition name="width">
                <el-aside width="200px" class="fl" v-show="isShow" >
                    <el-menu :default-openeds="['user-control']" default-active='1-1' unique-opened>
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
                                <i class="el-icon-phone"></i>管理组</template>
                            <el-menu-item-group>
                                <el-menu-item index="2-1">选项1</el-menu-item>
                                <el-menu-item index="2-2">选项2</el-menu-item>
                                <el-menu-item index="2-3">选项3</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                                <i class="el-icon-setting"></i>管理组</template>
                            <el-menu-item-group>
                                <el-menu-item index="3-1">选项1</el-menu-item>
                                <el-menu-item index="3-2">选项2</el-menu-item>
                                <el-menu-item index="3-3">选项3</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-aside>
            </transition>
            <div class="show-btn fl" @click="listShow">
                <i class="el-icon-arrow-left" ref="icon"></i>
            </div>
        </el-container>
    </div>
</template>
<script>
import tabList from "@/assets/js/subNav";

export default {
    data() {
        return {
            navList: tabList,
            isShow: true
        };
    },
    methods: {
        handleTab(ev) {
            this.bus.$emit("updata:tabView", ev.index);
        },
        listShow(ev) {
            let t = ev.currentTarget;
            let s = this.isShow;
            if (s) {
                this.$refs.icon.className = "el-icon-arrow-right";
            } else {
                this.$refs.icon.className = "el-icon-arrow-left";
            }
            this.isShow = !this.isShow;
            console.log(this.isShow);
        }
    },
    computed: {
        asideW() {
            return { width: this.w + "px" };
        }
    }
};
</script>
<style scoped>
.el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
    flex-shrink: 1;
}
.el-menu {
    border-right: none;
}
.aside-wrap {
    border: 1px solid #dedede;
    box-shadow: 0 0 10px rgba(189, 189, 189, 0.8);
    height: 500px;
    border-radius: 5px;
}
.aside-wrap .el-menu-item .glyphicon {
    margin-right: 10px;
}
.el-menu-item {
    text-align: center;
}
.el-submenu .el-menu-item {
    min-width: 0;
}
.fl {
    float: left;
}
.show-btn {
    width: 20px;
    line-height: 500px;
    text-align: center;
    font-size: 20px;
    font-weight: blod;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #fff;
}
.width-leave-active,
.width-enter-active {
    transition: width .5s ease-out;
}
.width-leave-active,
.width-enter {
    width: 0px !important;
}
.width-leave,
.width-enter-active {
    width: 200px;
}
</style>

