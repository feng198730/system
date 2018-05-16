<template>
  <div>
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :xs="{span:6,offset:18}" :sm="{span:9,offset:15}" :md="{span:7,offset:17}" :lg="{span:6,offset:18}" :xl="{span:6,offset:18}">
            <my-theme :theme="theme" class="mr20" :class="iTheme"></my-theme>
            <my-user></my-user>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <my-aside></my-aside>
        <div class="content-wrap">
          <el-tabs v-model="currentView" type="card" @tab-remove="removeTab">
            <el-tab-pane v-for="(item, index) in tabList" :key="item.name"  :name="item.name" :closable="item.name=='welcome'?false:true">
              <span slot="label"><i class="glyphicon icon-color" v-if="item.iconClass" :class="item.iconClass"></i> {{item.title}}</span>
              <custom-view :is="item.view"></custom-view>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import myLanguage from "@/components/language";
import myTheme from "@/components/theme";
import myUser from "@/components/user";
import myAside from "@/components/aside";
import tabList from "@/assets/js/subNav";
import welcome from "@/view/welcome";


export default {
    props: ["language", "theme"],
    data() {
        return {
            currentView: "welcome",
            tabList: [
                {
                    title: "欢迎使用",
                    name: "welcome",
                    view: welcome
                }
            ]
        };
    },
    components: {
        myLanguage,
        myTheme,
        myUser,
        myAside,
    },
    mounted() {
        this.bus.$on("updata:tabView", this.updateTab);
    },
    methods: {
        removeTab(targetName) {
            let tabs = this.tabList;
            let activeName = this.currentView;
            if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                        let nextTab = tabs[index + 1] || tabs[index - 1];
                        if (nextTab) {
                            activeName = nextTab.name;
                        }
                    }
                });
            }
            this.currentView = activeName;
            this.tabList = tabs.filter(tab => tab.name !== targetName);
        },
        updateTab(info) {
            let tab = tabList[info];
            if (!this.tabList.includes(tab)) {
                this.tabList.push(tabList[info]);
            }
            this.currentView = info;
        }
    },
    computed:{
        iTheme(){
            return 'theme-'+this.theme;
        }
    }
};
</script>
<style scoped lang="less">
.el-header {
    position: relative;
    min-height: 50px;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
    border: 1px solid transparent;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
}

.content-wrap {
    color: #333;
    padding: 0;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(189, 189, 189, 0.8);
    margin:0 20px;
    width:100%;
}
.wrap {
    border: 1px solid #dedede;
    box-shadow: 0 0 10px rgba(189, 189, 189, 0.8);
    border-radius: 5px;
    height: 500px;
    width: 100%;
}

</style>

