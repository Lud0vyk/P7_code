import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Sign_upView from '../views/Sign_upView.vue'
import LoginView from '../views/LoginView.vue'
//import Publication from '../views/PublicationView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
    /*
    children: [
      {
        // lors d'un clic sur une publication
        path: 'publi',
        component: publi
      }
    ]*/
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/sign_up',
    name: 'sign_up',
    component: Sign_upView
    //component: () => import(/* webpackChunkName: "sign_up" */ '../views/Sign_upView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
    //component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/publi/:id',
    name: 'publi',
    //component: PublicationView
    component: () => import(/* webpackChunkName: "publication" */ '../views/PublicationView.vue')
  },
  {
    path: '/add',
    name: 'add',
    //component: AddView
    component: () => import(/* webpackChunkName: "add" */ '../views/AddView.vue')
  },
  {
    // si le chemin n'est pas correct
    path: '/*', name: 'NotFound', component: HomeView
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
