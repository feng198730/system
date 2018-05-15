<template>
    <div class="w90">
        <el-select v-model="value" placeholder="请选择" @change="setTheme">
            <el-option v-for="item in getThemes" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>
<script>
export default {
    props: ["theme"],
    data() {
        return {
            value: ""
        };
    },
    computed: {
        getThemes() {
            return this.$t("theme");
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

</style>

