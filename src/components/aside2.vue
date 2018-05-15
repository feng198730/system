<template>
    <div class="aside-wrap">
        {{active}}
        <ul class="nav-bar">
            <li class="nav-group" v-for="(item,index) of list">
                <div class="nav-head">{{item.group}}</div>
                <sub-nav v-if="item.child" :data="item.child" @updActive="updact" :active="active" :index="index"></sub-nav>
            </li>
        </ul>

    </div>
</template>
<script>
import list from "@/assets/js/nav";
import subNav from "@/components/nav-tree";
export default {
    data() {
        return {
            list,
            active: null
        };
    },
    methods: {
        updact(info) {        
            this.active = info;
        }
    },
    components: {
        subNav
    },
    mounted() {}
};
</script>
<style scoped>
.aside-wrap {
    border: 1px solid #dedede;
    box-shadow: 0 0 10px rgba(189, 189, 189, 0.8);
    height: 500px;
    border-radius: 5px;
    margin: 0 20px;
    width: 200px;
}
.nav-head {
    padding: 10px 15px;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #999999;
}
</style>

