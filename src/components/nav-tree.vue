<template>
    <ul class="sub-nav">
        <router-link tag="li" class="sub-item" :to="{path:item.href}" v-for="(item,index2) of data" :key="item.href" >
            <a  href="javascript:;" @click="click"  :index="getIndex(index2)" :class="">
                {{item.name}}
                <i class="glyphicon" :class="getIcon(item)"></i>
            </a>
        </router-link>

    </ul>
</template>
<script>
export default {
    props: ["data",'active','index'],
    data(){
        return {
            a:this.active
        }
    },
    methods: {
        getIcon(item) {
            return "glyphicon-" + item.icon;
        },
        getIndex(item){
            return this.index+'-'+item;
        },
        click(ev){
            let index = ev.currentTarget.getAttribute('index');
            this.$emit('updActive',index);
        }
    },
    mounted(){
        
    }
};
</script>
<style>
.sub-item a {
    border: 1px solid rgba(221, 221, 221, 0.46);
    border-radius: 4px;
    padding: 10px 15px 10px 45px;
    position: relative;
    display: block;
    transition: 0.5s;
}
.sub-item i {
    position: absolute;
    left: 20px;
    top: 12px;
}
.sub-item:hover {
    margin-left: 10px;
}
.sub-item a:hover {
    background: #eee;
}
.sub-item {
    transition: 0.3s;
}

</style>

