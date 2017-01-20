import Vue from 'vue';
import VueRouter from "vue-router";
Vue.use(VueRouter);

const First = { template: '<div><h2>我是第 1 个子页面</h2></div>'}
import home from '../components/home.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/first',
            component: First,
            children: [
                {
                    path: 'profile',
                    component: First
                }
            ]
        }
    ]
})
export default router;
