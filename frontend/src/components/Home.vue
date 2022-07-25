<template>
  <div class="home">

    <h2>Publications</h2>

    <div class="cart-card-container">

      <div class="card-container">

      </div>

      <div v-if="user.role =='admin'" class="card"><!-- changer la condition -->
        <h3>admin</h3>
        <div v-for="(publication, id) in publicationsList" :key="id">
        <nav>
          <!-- <div :to=publicationId(publication.id)> -->
            <img :src="publication.imageUrl" :alt="publication.description"/>
            <h3>{{ publication.title }}</h3>
          <!-- </div> -->
        </nav>
        </div>
      </div>
      <div v-else-if="user.role =='user'" class="card">
         <h3>user</h3>
        <div v-for="(publication, id) in publicationsList" :key="id">
          <div v-if="publication.validation">
            <nav>
              <!-- <div :to=publicationId(publication.id)> -->
                <img :src="publication.imageUrl" :alt="publication.description"/>
                <h3>{{ publication.title }}</h3>
              <!-- </div> -->
            </nav>
          </div>
        </div>
      </div>
      <div v-else-if="user.role ==''">
            <h3>Veuillez vous connecter.</h3>
      </div>
      <div v-else>
            <div @load="redirection()"></div>
      </div>

    </div>
    
    <div v-if="user.id !=''">
      <button @click="logout()" class="button"> Logout </button>
    </div>

    <section class="items" id="items">
      <span v-if="publicationsList.length < 1"> Il n'y aucune publication </span>
    </section>

  </div>

  <hr>
    <button @click="consoleLog()" class="button"> console.log </button>
    <button @click="affichage()" class="button"> publications </button>
  <hr>
      
        <h3>test</h3>
        <div v-for="(publication, id) in publicationsList" :key="id">
  
          <!-- <div :to=publicationId(publication.id)> -->
            <img :src="publication.imageUrl" :alt="publication.description"/>
            <h3>{{ publication.title }}</h3>
            <!-- require() -->
          <!-- </div> -->
      
        </div>
      
  <router-view />
</template>

<script>

import { mapState } from "vuex";

export default {
  name: 'HomePage',
  data() {
    return {
      componentLoaded: false,
      publicationsList: [this.$store.dispatch("getAllPublications")],
      post: {
          title: '',
          description: '',
          date: '',
          image: '',
          imageData: ''
      },
      messageError: '',
      //publications: '',
      //list: [],
    }
  },
  methods: {
    logout() {
      this.$store.commit('logout');
      this.$router.push('/login');
    },
    redirection() {
      this.$router.push('/signup');
    },
    showPublication: function(id) {
      this.$router.push({name: 'publication', params: {id: id}});
    },
    // voir laquel est mieux des 2 méthodes
    publicationId(id) {
			this.$router.push("/publication/" + id);
		},
    /*listpublicationSortedByDate(publicationsList) {

      return publicationsList.sort((a,b) => b.date - a.date);
    },*/
    /*publicationSortedByDate() {
      const list = list();
      return list.sort((a,b) => b.date - a.date);
    },*/
    consoleLog() {
        //console.log();
        console.log("session");
        console.log(this.user);
        console.log("publications");
        console.log(this.publications);
        console.log("publicationsList");
        console.log(this.publicationsList);
    },
    affichage() {
      const listaffichage = this.$store.state.list;
      console.log("setPublications");
      console.log(listaffichage);
      return listaffichage;
    }
  },
	mounted() {
		this.componentLoaded = true;
		//this.id = this.$route.params.id;

		if (this.$store.state.user.userId == -1) {
			this.$router.push("/sign_up");
			return;
		}
		//this.$store.dispatch("publicationId", { id: this.$route.params.id });
	},
  computed: {
    ...mapState({
			publicationInfos: "publicationInfos",
      //list: "publications",
			user:"user",
      publications: "publications",
      publication: "publication",
		}),
    list() {
      return this.$store.state.list;
    },
    message() {
			if (!this.componentLoaded) {
				return null;
			} else {
				return this.$store.state.publications;
			}
		},
    // sert a rien
    /*message() {
			if (!this.componentLoaded) {
				return null;
			} else {
        console.log("setPublications");
        console.log(this.$store.state.setPublications);
				return this.$store.state.setPublications;
			}
		},*/
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 0 0 20px 0;
  //text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.cart-card-container {
  display: wrap;
  flex-wrap: wrap;
  .card {

    img {
      width: 15%;
    }
  }
}
</style>
