// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
//css
import '@/assets/css/index';

//组件通信
let bus = new Vue();
Vue.prototype.bus = bus;
//国际化语言
import i18n from './i18n/i18n';
//ElementUI
import ElementUI from './elementUI';





Vue.config.productionTip = false;
/* eslint-disable no-new */
let vm = new Vue({
    el: '#app',
    router,
    i18n,
    components: { App },
    template: '<App/>'
});