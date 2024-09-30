import { createRouter, createWebHistory } from "vue-router";
import Register from "../view/Register.vue";
import Login from "../view/Login.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import Dashboard from "../view/Dashboard.vue";
import Surveys from "../view/Surveys.vue";

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: DefaultLayout,
    children: [
      {path: '/dashboard', name: 'Dashboard', component: Dashboard},
      {path: '/surveys', name: 'Surveys', component: Surveys}

    ]
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/register',
    name: 'Register',
    component: Register
  },
];


const router = createRouter({

    history: createWebHistory(),
    routes
})


export default router;
