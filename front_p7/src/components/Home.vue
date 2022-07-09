<template>
  <div class="home">

    <!-- -->

    <h2>Publications</h2>

    <div class="cart-card-container">
      <div class="card-container">
        <!--<div v-for="publication in publications" :key="publication.userId" class="card">-->
        <div v-for="(publication, idx) in publications" :key="idx" class="card">
          <img :src="publication.imageUrl" :alt="publication.description"/>
          <h3>{{ publication.titre }}</h3>
        </div>
      </div>
    </div>

    <p></p>
    <button @click="logout()" class="button"> Logout </button>

    <hr>
    <button @click="consoleLog()" class="button"> console.log </button>

    <section class="items" id="items">
      <span v-if="publications.length < 1"> Il n'y aucune publication </span>
    <!-- router-link :to="{name: 'publication', params: {name: 'id'}}></router-link> ex à supprimer -->
    <!-- <a @click="showPublication('publication.id');"></a> ex à incorporer -->
    </section>

  </div>
</template>

<script>
//import axios from 'axios';

export default {
  name: 'HomePage',
  data() {
        return {
           publications: this.$store.state.publicationSchema,
           user: this.$store.state.user,
           error: this.$store.state.error
        }
  },
  methods: {
    consoleLog() {
      //console.log(this.publication.imageUrl);
      console.log("meth");
      console.log(this.user);
   },
    logout() {
      this.$store.commit('logout');
      this.$router.push('/');
    },
    showPublication: function(id) {
      this.$router.push({id: 'publication.id', params: {name: id}}); // pas sur de la formulation
    }
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

.card {
  //display: grid;
  /*display: flex;
  flex-direction:row;
  flex-wrap:wrap;*/

  img {
    width: 15%;
  }
}
</style>
