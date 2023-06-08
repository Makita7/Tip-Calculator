import { createRouter, createWebHistory } from "vue-router";
import StartView from '../views/StartView.vue';
import TipCal from '../views/TipCalView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name:'',
            path:'/',
            component: StartView,
        },
        {
            name:'',
            path:'/tip_calculator',
            component: TipCal,
        },
    ],
})

export default router;