<template>
  <div class="home">

    <h2>Publications</h2>

    <div class="cart-card-container">

      <div class="card-container">

      </div>

      <div v-if="userInfos.role =='admin'" class="card"><!-- changer la condition -->
        <h3>admin</h3>
        <div v-for="(publication, id) in publicationSortedByDate(publications)" :key="id">
        <nav>
          <div :to=publicationId(publication.id)>
            <img :src="publication.imageUrl" :alt="publication.description"/>
            <h3>{{ publication.titre }}</h3>
          </div>
        </nav>
        </div>
      </div>
      <div v-else-if="userInfos.role =='user'" class="card">
         <h3>user</h3>
        <div v-for="(publication, id) in publicationSortedByDate(publications)" :key="id">
          <div v-if="publication.validation">
            <nav>
              <div :to=publicationId(publication.id)>
                <img :src="publication.imageUrl" :alt="publication.description"/>
                <h3>{{ publication.titre }}</h3>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div v-else-if="userInfos.role ==''">
            <h3>Veuillez vous connecter.</h3>
      </div>
      <div v-else>
            <div @load="redirection()"></div>
      </div>

    </div>
    
    <div v-if="userInfos.id !=''">
      <button @click="logout()" class="button"> Logout </button>
    </div>

    <section class="items" id="items">
      <span v-if="publications.length < 1"> Il n'y aucune publication </span>
    </section>

  </div>
  <router-view />
</template>

<script>

import { mapState } from "vuex";
import axios from 'axios';
//import router from 'vue-router';

export default {
  name: 'HomePage',
  data() {
        return {
           publications: [this.$store.dispatch("allPublications")],
           userInfos: this.$store.state.userInfos,
           post: {
                title: '',
                description: '',
                date: '',
                image: '',
                imageData: ''
            },
            messageError: '',
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
    publicationId(id) {
			this.$router.push("/publications/" + id);
		},
    updatePost() {
      axios.get('http://localhost:3000/api/')
      .then(res => {this.publicationsReceived = res.data })
      .catch(function (error) {console.log(error) })
    },
    publicationSortedByDate(publications) {

      return publications.sort((a,b) => b.date - a.date);
    },

  },
  computed: {
    ...mapState({
			publication: "currentPublication",
			user:"userInfos",
		})
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
