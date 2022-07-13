import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Publication from '../views/PublicationView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/sign_up',
    name: 'sign_up',
   //component: Sign_upView
    component: () => import(/* webpackChunkName: "sign_up" */ '../views/Sign_upView.vue')
  },
  {
    path: '/login',
    name: 'login',
    //component: LoginView
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    // lors d'un clic sur une publication
    path: '/publication/:id',
    name: 'publication',
    props: true,
    component: Publication,
    //component: () => import(/* webpackChunkName: "publication" */ '../views/PublicationView.vue')
  },
  {
    path: '/add',
    name: 'add',
    //component: AddView
    component: () => import(/* webpackChunkName: "add" */ '../views/AddView.vue')
  },
  {
    path: '/publication/:pathMatch(.*)',
    redirect: 'publication'
  },
  {
    // si le chemin n'est pas correct redirection vers l'accueil 
    path: '/:pathMatch(.*)', name: 'NotFound', component: HomeView
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// nom par défault
router.afterEach((to) => {
  to.meta.title = 'Groupomania';
  document.title = to.meta.title;
})

export default router
