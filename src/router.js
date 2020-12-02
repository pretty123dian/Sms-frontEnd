
import Home from './pages/Home.vue';
import VueRouter from 'vue-router';
import Vue from 'vue'
// import components here
import Lessons from './components/lessons/LessonsTable';
import Dashboard from './pages/Dashboard.vue'
import Statistics from './components/main/StatisticalVisual.vue'
// import MainBody from './components/shared/MainBody.vue'
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        component: Home
    },
    {

        path: '/dashboard',
        name: 'Lessons',
        component: Dashboard,
        children: [
            {
                path: '/',
                name: 'Dashboard',
                component: Statistics
            },
            {
                path: '/view/lessons',
                name: 'Lessons',
                component: Lessons
            }

        ]

    }

    ]

})
export default router;