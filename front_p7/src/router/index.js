import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import Sign_upView from '../views/Sign_upView.vue'
//import LoginView from '../views/LoginView.vue'
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
        path: 'publi/:id',
        component: publi,
        props: true
      }
    ]*/
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
    // si le chemin n'est pas correct redirection vers l'accueil 
    path: '/:pathMatch(.*)', name: 'NotFound', component: HomeView
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// nom par défault refaire si j'ai le temps
router.afterEach((to) => {
  to.meta.title = 'Groupomania';
  document.title = to.meta.title;
})

export default router
