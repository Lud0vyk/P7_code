import { createStore } from 'vuex'

const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://localhost:3000/api/'
});

// récupération de l'utilisateur dans le localStorage si il s'est connecté
let userInfos = localStorage.getItem('userInfos');
if(!userInfos) {
  userInfos = {
    nom: '',
    email: '',
    id: -1,
    role: '',
    token: ''
  }
} else {
  try {
    userInfos = JSON.parse(userInfos);
    instance.defaults.headers.common['Authorization'] = userInfos.token;
    //userInfos.token = 'RANDOM_TOKEN_SECRET';
  } catch {
    userInfos = {
      nom: '',
      email: '',
      id: -1,
      role: '',
      token: ''
    }
  }
}

export default createStore({
  // état
  state: {
    status: '',
    userInfos: {
      nom: '',
      email: '',
      id: '',
      role: '',
      token: ''
    },
    publicationSchema: [
      {id: 0, userId: 0, titre: '0', validation: true, date: 20220630, description: '0', 
        imageUrl: require("@/assets/images/blanche_640.jpg"), likes: 0, dislikes: 0, usersLikes: [0], usersDislikes: [0]},
      {id: 1, userId: 1, titre: '1', validation: true, date: 20220701, description: '1',
        imageUrl: require("@/assets/images/chili_640.jpg"), likes: 0, dislikes: 0, usersLikes: [0], usersDislikes: [0]},
      {id: 2, userId: 2, titre: '3', validation: false, date: 20220702, description: '3',
        imageUrl: require("@/assets/images/pesto_640.jpg"), likes: 0, dislikes: 0, usersLikes: [0], usersDislikes: [0]},
      {id: 3, userId: 3, titre: '4', validation: false, date: 20220703, description:'4',
        imageUrl: require("@/assets/images/salad_640.jpg"), likes: 0, dislikes: 0, usersLikes: [0], usersDislikes: [0]},
      {id: 4, userId: 3, titre: '55', validation: false, date: 20220603, description:'55',
        imageUrl: require("@/assets/images/soja_640.jpg"), likes: 0, dislikes: 0, usersLikes: [0], usersDislikes: [0]}
    ],
    showPublication: document.getElementById('items'),
    liens: document.createElement('a'),
    article: document.createElement('article'),
    images: document.createElement("img"),
    publicationTitre: document.createElement("h3"),
    error: 'error',
    publication: [],
    currentPublication: [],
  },
  getters: {
    // pas sur que ce soit utile
    error() {
      alert ('error publication');
    },
    getPublication() {
      return fetch('http://localhost:3000/api/publication/')
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
    setStatus: function (state, status) {
      state.status = status;
    },
    logUser: function (state, userInfos) {
      instance.defaults.headers.common['Authorization'] = userInfos.token;
      localStorage.setItem('userInfos', JSON.stringify(userInfos));
      state.userInfos = userInfos;
    },
    userInfos: function (state, userInfos) {
      state.userInfos = userInfos;
    },
    logout: function (state) {
      state.userInfos = {
        name: '',
        email: '',
        id: '',
        role: '',
        token: ''
      }
      localStorage.removeItem('userInfos');
    },
  },
  actions: {
    // création du compte utilisteur
    signup: ({commit}, userInfos) => {
      commit('setStatus', 'loading');
      return new Promise((resolve, reject) => {
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
    /*async fetch(state) {
      state.publication = await 
    },*/
    async getPublication() {
      return await fetch('http://localhost:3000/api/publication/')
      .then( function(reponse) { return reponse.json()})
      .then( function(publications) { return publications})
      .catch( alert('error publication'))
    },
    setCurrentPublication ({commit, state}, publicationId) {
      let publicationFound = {};
      // A CHANGER
      state.publicationSchema.forEach((publication) => {
        if(publicationId == publication.id) {
          publicationFound = publication;
        }
      });
      commit('setCurrentPublication', publicationFound);
    }
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
** pour appeler une mutation : this.$store.commit('leNomDeLaMutation'); **

actions :
Les actions sont similaires aux mutations, les différences étant que :
    Au lieu de faire muter l'état, les actions commettent des mutations.
    Les actions peuvent contenir des opérations asynchrones arbitraires.
** pour ce qui est asynchrone les actions sont plus adaptées **
** pour appeler une action : this.$store.dispatch('leNomDeLAction'); **

*/