<template>
    <div class="w90">
        <el-select v-model="value" placeholder="请选择" @change="setLanguage">
            <el-option v-for="item in getLanguage" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>
<script>
import language from "@/i18n/language.config";
export default {
    props: ["language"],
    data() {
        return {
            value: ""
        };
    },
    created() {
        this.value = this.language;
    },
    computed: {
        getLanguage() {
            return this.$t("language");
        }
    },
    methods: {
        setLanguage() {
            this.bus.$emit("updata:language", this.value);
        }
    }
};
</script>
<style scoped>

</style>
