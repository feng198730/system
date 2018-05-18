<template>
    <div class="w90 theme-bar">
        <i class="glyphicon glyphicon-tint icon-color fix theme-icon"></i>
        <el-select v-model="value" placeholder="请选择" @change="setTheme">
            <el-option v-for="item in getThemes" :key="item.value" :label="item.label" :value="item.value">  
            </el-option>
        </el-select>
    </div>
</template>
<script>
import theme from "@/config/theme";
export default {
    props: ["theme"],
    data() {
        return {
            value: ""
        };
    },
    computed: {
        getThemes() {
            return theme;
        }
    },
    created() {
        this.value = this.theme;
    },
    methods: {
        setTheme() {
            this.bus.$emit("updata:theme", this.value);
        }
    }
};
</script>
<style scoped>
.theme-bar{
    margin-top:10px;
}
.fix.theme-icon{
    position:absolute;
    top:12px;
    left:8px;
    z-index:10;
}
.el-select{
    width:100%;
    height:100%;
}

</style>

