<template>
    <div class="el-select user-bar" @click="outShow">
        <div class=" el-input">
            <div class="user-name">张三</div>
            <i class="glyphicon glyphicon-user icon-color icon"></i>
            <span class="el-input__suffix">
                <i class="el-select__caret el-input__icon el-icon-arrow-up arrow" :class="{'is-reverse':isShow}"></i>
            </span>
        </div>
        <transition name="el-zoom-in-top">
            <div v-if="isShow" class="el-select-dropdown el-popper zdy" ref="outBar" x-placement="bottom-start">
                <div class="el-scrollbar" style="">
                    <div class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default">
                        <ul class="el-scrollbar__view el-select-dropdown__list">
                            <li @click="logout" class="el-select-dropdown__item">
                                <span>退出</span>
                            </li>
                        </ul>
                    </div>
                    <div class="el-scrollbar__bar is-horizontal">
                        <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
                    </div>
                    <div class="el-scrollbar__bar is-vertical">
                        <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
                    </div>
                </div>
                <div x-arrow="" class="popper__arrow" style="left: 35px;"></div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShow: false
        };
    },
    methods: {
        outShow() {
            this.isShow = !this.isShow;
        },
        logout() {
            this.isShow = false;
            this.$router.push("/");
        }
    },
    mounted() {
        let _this = this;
        //点击其他区域关闭登出框
        let s1 = document.getElementsByClassName("el-select")[0];
        let p = document.getElementsByClassName("user-bar")[0];
        document.addEventListener("click", function(ev) {
            if (p && p.contains(ev.target)) {
                return;
            }
           fixFn();
        });
        // 修复select组件阻止冒泡bug
        let i1 = document.getElementsByClassName("el-input__inner")[0];
        let i3 = document.getElementsByClassName("el-input__suffix")[0];
        i1.addEventListener("click", fixFn);
        i3.addEventListener("click", fixFn);
        function fixFn() {
            _this.isShow = false;
        }
    }
};
</script>
<style scoped>
.user-bar {
    width: 120px;
    height: 40px;
    background: #fff;
    border-radius: 4px;
    margin-top: 10px;
    float: left;
    position: relative;
    cursor: pointer;
}

.user-bar .icon {
    position: absolute;
    left: 8px;
    top: 12px;
}
.user-name {
    line-height: 40px;
    text-align: left;
    padding-left: 30px;
}
.user-bar .arrow {
    position: absolute;
    top: 0;
    left: 90px;
}
.el-input__suffix{
    display:block;
    width:100%;
    right:0;
}
.user-bar .el-input {
    display: block;
}
.zdy {
    width: 120px;
    position: absolute;
    top: 40px;
    left: 0;
}
</style>

