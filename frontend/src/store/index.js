import { createStore } from 'vuex'

const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://localhost:3000/api/'
});

// récupération de l'utilisateur dans le localStorage si il s'est connecté
let user = sessionStorage.getItem('user');
if(!user) {
  user = {
    id: -1,
    token: ''
  }
} else {
  try {
    user = JSON.parse(user);
    instance.defaults.headers.common['Authorization'] = user.token;
  } catch {
    user = {
      id: -1,
      token: ''
    }
  }
}

export default createStore({
  // état
  state: {
    status: '',
    user: user,
    userInfos: {
      nom: '',
      email: '',
      role: ''
    },
    currentPublication: {
      userName: "",
      userId: "",
      titre: "",
      description: "",
      date: "",
      validation: "",
      image: ""
    },
    imageLogo: {
      alt:"logo groupomania",
      src: require("@/assets/icon-left-font.png")
    }
  },
  getters: {
  },
  mutations: {
    
    setStatus: function (state, status) {
      state.status = status;
    },
    logUser: function (state, user) {
      instance.defaults.headers.common['Authorization'] = user.token;
      sessionStorage.setItem('user', JSON.stringify(user));
      state.user = user;
    },
    userInfos: function (state, userInfos) {
      state.userInfos = userInfos;
    },
    logout: function (state) {
      state.user = {
        id: '',
        token: ''
      }
      sessionStorage.removeItem('user');
    },
    setUserInfos: function (state, userInfos) {
      state.userInfos = userInfos;
    },
    setCurrentPublication: function (state, currentPublication) {
      state.currentPublication = currentPublication;
    },
    functionLogo2 () {
      return require("@/assets/icon-left-font.png");
    }
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
    // récuprération des infos de l'utilisateur
    getUserInfos: ({commit}) => {
      instance.post('auth/user')
      .then(function (response) {
        commit('userInfos', response.data);
      })
      .catch(function (error) {
        return error;
      });
    },
    // création d'une publication
    publicationPost: ({ commit }, publicationInfos) => {
			commit("publicationInfos", "created");
			return new Promise((resolve, reject) => {
				commit;
				instance.post("/publications", publicationInfos)
        .then(function (response) {
          commit("publicationInfos", response);
          resolve(response);
        })
        .catch(function (error) {
          commit("setStatus", "error_signIn");
          reject(console.log(error));
        });
			});
		},
    // récupération d'une d'une publication
		/*publicationId: ({ commit }, messages) => {
			instance.get("/publications/" + messages.id)
				.then(function (response) {
					commit("setMessage", response.data.publication);
					this.feed = response.data.publication.data;
				})
				.catch(function (error) {
					return error
				});
		},*/
    // récupérations des publications
		allPublications: ({ commit }) => {
			instance.get("/publications")
      .then(function (response) {
        commit("setMessages", response.data.publication);
        this.list = response.data.publication;
      })
      .catch(function (error) {
        return error
      });
		},
    // mise à jour d'une publication
		updatePublication({ commit }, message) {
			instance.put("/publications/" + message.id, {
					message: message.message,
      })
      .then(function (response) {
        commit("publicationInfos", response.data);
      })
      .catch(function (error) {
        return error
      });
		},
    // suppression d'une publication
		deletePublication({ commit }, message) {
			instance.delete("/publications/" + message.id)
      .then(function (reponse) {
				commit("publicationInfos", reponse.data);
			});
		},
    functionLogo () {
      return require("@/assets/icon-left-font.png");
    }
  },
  modules: {
  }
});

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