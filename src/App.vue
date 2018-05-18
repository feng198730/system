<template>
    <div id="app">
        <transition name="fade">
            <router-view :theme="theme" />
        </transition>
    </div>
</template>

<script>
import theme from "@/config/theme";

export default {
    data() {
        return {
            theme: ""
        };
    },
    created() {
        //初始化主题色
        this.theme = theme[0].value;
    },
    mounted() {
        //监听主题色改变
        this.bus.$on("updata:theme", this.updateTheme);
        this.updateTheme(this.theme);
    },
    methods: {
        //更新主题色
        updateTheme(info) {
            this.theme = info;
            document.body.className = "theme-" + info;
        }
    }
};
</script>

<style lang="less">
@import "./assets/css/theme.less";
</style>
