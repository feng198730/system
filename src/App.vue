<template>
  <div id="app">
    <router-view :theme="theme" />
  </div>
</template>

<script>
import language from "@/i18n/language.config";

export default {
    data() {
        return {
            theme: ""
           // language: ""
        };
    },
    created() {
        //初始化主题色
        this.theme = this.$t("theme")[0].value;
        //this.language = language && language[0].value;
    },
    mounted() {
        //监听主题色改变
        this.bus.$on("updata:theme", this.updateTheme);
        this.updateTheme(this.theme) ;
        // this.bus.$on("updata:language", this.updateLanguage);
    },
    methods: {
        updateTheme(info) {
            this.theme = info;
            document.body.className = "theme-" + info;
        }
        // updateLanguage(info) {
        //     this.language = info;
        //     this.$i18n.locale = this.language;
        // }
    }
};
</script>

<style lang="less">
@import './assets/css/theme.less';
</style>
