import Vue from 'vue';
import VueRouter from 'vue-router';

const Townspersons = () => import('./pages/Townspersons.vue');
const FormTownsperson = () => import('./pages/FormTownsperson.vue');

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Townspersons },
    { path: '/new-townsperson', component: FormTownsperson },
]

const router = new VueRouter({
    routes
})

export default router;
  