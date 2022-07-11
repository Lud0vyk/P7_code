<template>
  <div class="home">

    <h2>Publications</h2>

    <div class="cart-card-container">

      <div class="card-container">

      </div>

      <div v-if="userInfos.role !='admin'" class="card"><!-- changer la condition -->
        <h3>admin</h3>
        <div v-for="(publication, id) in publicationSortedByDate(publications)" :key="id">
        <nav>
          <!--<router-link :to="{name: 'publication', params: {id: publication.id}}" >  -->
          <router-link :to=showPublication(publication.id)>
            <img :src="publication.imageUrl" :alt="publication.description"/>
            <h3>{{ publication.titre }}</h3>
          </router-link>
        </nav>
        </div>
      </div>
      <div v-else-if="userInfos.role =='user'" class="card">
         <h3>user</h3>
        <div v-for="(publication, id) in publicationSortedByDate(publications)" :key="id">
          <div v-if="publication.validation">
            <nav>
              <router-link :to=showPublication(publication.id)>
                <img :src="publication.imageUrl" :alt="publication.description"/>
                <h3>{{ publication.titre }}</h3>
              </router-link>
            </nav>
          </div>
        </div>
      </div>
      <div v-else-if="userInfos.role ==''">
            <h3>Veuillez vous connecter.</h3>
      </div>
      <div v-else>
            <h3> ERROR 404 </h3>
      </div>

    </div>
    
    <div v-if="userInfos.id !=''">
      <button @click="logout()" class="button"> Logout </button>
    </div>

    <hr>
    <button @click="consoleLog()" class="button"> console.log </button>
    <button @click="publicationSortedbyDate(publications)" class="button"> console.log 2 </button>

    <section class="items" id="items">
      <span v-if="publications.length < 1"> Il n'y aucune publication </span>
    <!-- router-link :to="{name: 'publication', params: {name: 'id'}}></router-link> ex à supprimer -->
    <!-- <a @click="showPublication('publication.id');"></a> ex à incorporer -->
    </section>

  </div>
  <router-view />
</template>

<script>

import axios from 'axios';
//import router from 'vue-router';

export default {
  name: 'HomePage',
  data() {
        return {
           publications: this.$store.state.publicationSchema,
           userInfos: this.$store.state.userInfos,
           error: this.$store.state.error,
           publicationsOrderbyDate: [],
           mostRecentDate: '',
           datedujour: ''
        }
  },
  methods: {
    consoleLog() {
      //console.log(this.publication.imageUrl);
      console.log("Home methods");
      console.log(this.userInfos);
      console.log(this.publications);
      console.log(this.datedujour =  Date.now());
   },
    logout() {
      this.$store.commit('logout');
      this.$router.push('/');
    },
    showPublication: function(id) {
      this.$router.push({name: 'publication', params: {id: id}});
      console.log(this.$router);
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
    showPublications() {
      if(this.user.role === 'admin') {
        // affichage de toute les publications
        return this.$store.commit('getPublication');
      } else if(this.user.role === 'user') {
        // affichage de toute les publications validées
         return this.$store.commit('getPublication');
      } else {
        // message d'enristrement.
        return this.error;
      }
    }

    /*consoleLog2() {
      return {
        console.log(this.publication.imageUrl);
        console.log('comp');
        console.log(this.user);
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
    //display: grid;
    /*display: flex;
    flex-direction:row;
    flex-wrap:wrap;*/
    //width: 30%;

    img {
      width: 15%;
    }
  }
}
</style>
