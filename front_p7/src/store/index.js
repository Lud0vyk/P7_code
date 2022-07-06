import { createStore } from 'vuex'

const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://localhost:3000/api/'
});

// récupération de l'utilisateur dans le localStorage si il s'est connecté
let user = localStorage.getItem('user');
if(!user) {
  user = {
    id: -1,
    role: '',
    token: ''
  }
}

export default createStore({
  // état
  state: {
    // exemple
    totalFromVueX: 0,
    status: '',
    user: {
      id: '',
      role: '',
      token: ''
    },
    userInfos: {
      nom: '',
      email: ''
    },
    publicationSchema: [
      {userId: 0, titre: '0', validation: true, date: 20220630, description: '0', 
        imageUrl: "../assets/images/blanche_640.jpg", likes: 0, dislikes: 0, usersLikes: [0], usersDislikes: [0]},
      {userId: 1, titre: '1', validation: true, date: 20220701, description: '1',
        imageUrl: "../assets/images/chili_640.jpg", likes: 0, dislikes: 0, usersLikes: [0], usersDislikes: [0]},
      {userId: 2, titre: '3', validation: false, date: 20220630, description: '3',
        imageUrl: "../../blanche_640.jpg", likes: 0, dislikes: 0, usersLikes: [0], usersDislikes: [0]},
      {userId: 3, titre: '4', validation: false, date: 20220701, description:'4',
        imageUrl: "../src/assets/images/chili_640.jpg", likes: 0, dislikes: 0, usersLikes: [0], usersDislikes: [0]}
    ],
    showPublication: document.getElementById('items'),
    liens: document.createElement('a'),
    article: document.createElement('article'),
    images: document.createElement("img"),
    publicationTitre: document.createElement("h3"),
    error: 'error'
  },
  getters: {
    // exemple
    doubleDuTotal(state) {
      return state.totalFromVueX * 2;
    },
    error() {
      alert ('error publication');
    },
    getPublication() {
      return fetch('http://localhost:3000/api/publications/')
      .then( function(reponse) { return reponse.json()})
      .then( function(publications) { return publications})
      .catch( alert('error publication'))
    },
    /*getPublication() {
      fetch('http://localhost:3000/api/publication/')
      .then((reponse) => reponse.json())
      .then((publications) => this.publications)
      .catch((error) => alert ('error publication'))
    },*/
    functionShowPublication (state, publication) {
      return state.liens,
        state.liens.href = `./publication.html?id=${publication._id}`,
        state.showPublication.appendChild(state.liens),

        state.article = document.createElement('article'),
        state.showPublication.appendChild(state.liens).appendChild(state.article),
        
        state.images.src = publication.imageUrl,
        state.images.alt = publication.titre,
        state.showPublication.appendChild(state.liens).appendChild(state.article).appendChild(state.images),
        
        state.publicationTitre.classList.add("publicationTitre"),
        state.publicationTitre.innerText = publication.titre,
        state.showPublication.appendChild(state.liens).appendChild(state.article).appendChild(state.publicationTitre);
        /*
        let pubDescription = document.createElement("p");
        pubDescription.classList.add("publicationDescription");
        pubDescription.innerText = publication.description;
        state.showPublication.appendChild(liens).appendChild(article).appendChild(pubDescription); */
    
 }
  },
  mutations: {
    // exemple
    setTotalFromVueX(state, nouvelleValeur) {
      state.totalFromVueX = nouvelleValeur;
    },
    setStatus: function (state, status) {
      state.status = status;
    },
    logUser: function (state, user) {
      instance.defaults.headers.common['Authorization'] = user.token;
      // localStorage.setItem('user', user); pas de déconnexion donc pas utile pour le moment
      state.user = user;
    }
  },
  actions: {
    // création du compte utilisteur
    signup: ({commit}, userInfos) => {
      console.log(userInfos);
      return new Promise((resolve, reject) => {
        commit;
        instance.post('auth/signup', userInfos)
        .then(function (response) {
          commit('setStatus', 'created');
          resolve(response);
        })
        .catch(function (error) {
          commit('setStatus', 'error_sign_up');
          reject(error);
        });
     });
    },
     // connexion du compte utilisteur
    login: ({commit}, userInfos) => {
      commit('setStatus', 'loading');
      return new Promise((resolve, reject) => {
        instance.post('auth/login', userInfos)
        .then(function (response) {
          commit('setStatus', '');
          commit('logUser', response.data);
          resolve(response);
        })
        .catch(function (error) {
          commit('setStatus', 'error_login');
          reject(error);
        });
     });
    },
    /* // récuprération des infos de l'utilisateur
    getUserInfos: ({commit}) => {
      instance.post('auth/infos') // route inexistante dans l'api
      .then(function (response) {
        commit('userInfos', response.data.infos);
      })
      .catch(function (error) {
        commit('setStatus', 'error_create');
      });
    }*/
  },
  modules: {
  }
})

/*
getters :
Prend une fonction getter et renvoie un objet ref réactif en lecture seule pour la valeur renvoyée par le getter. 
Il peut également prendre un objet avec les fonctions get et set pour créer un objet ref accessible en écriture

mutations :
Vue est capable de détecter quand les méthodes de mutation d'un tableau réactif sont appelées et de déclencher les mises à jour nécessaires.
méthodes :      push()    pop()    shift()    unshift()    splice()    sort()    reverse()


actions :
Les actions sont similaires aux mutations, les différences étant que :
    Au lieu de faire muter l'état, les actions commettent des mutations.
    Les actions peuvent contenir des opérations asynchrones arbitraires.

*/