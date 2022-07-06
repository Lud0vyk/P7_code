<template>
  <div class="home">

    <!-- -->

    <h2>Publications</h2>

    <!--<imput v-model="searchKey" type="search" id="search" placeholder="Rechercher..." autocomplete="off"></imput>
    pas utile -->

    <div class="cart-card-container">
      <div class="card-container">
        <div v-for="publication in publications" :key="publication.userId" class="card">
          <img :src="publication.imageUrl" :alt="publication.description"/>
          <h3>{{ publication.titre }}</h3>
        </div>
      </div>
    </div>
    <img src="../assets/images/blanche_640.jpg" alt="publicationdescription"/>

    <p></p>

  <section class="items" id="items">
    <span v-if="publications.length < 1"> Il n'y aucune publication </span>

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
           searchKey: '',
        }
  },
  methods: {
    consoleLog() {
            console.log(this.publication.imageUrl);
        }
    
  },
  computed: {

  }
}


/******************************************************************
 ***                    DECLARATION VARIABLES                   ***
 ******************************************************************/
/*
const showPublic = document.getElementById('items');


/******************************************************************
 ***                          FONCTIONS                         ***
 ******************************************************************/
/*
 // fonction principale asynchrone pour récupérer les produits et les afficher
 async function mainHome (){

    const publications = await getPublication();
    for(publication of publications) {
        showPublication(publication);
    }
 }

 // fonction pour récupérer les produits à l'aide de promesses 
 function getPublication(){

/*

    return fetch('http://localhost:3000/api/products/')
    .then( function(reponse) { return reponse.json()})
    .then( function(publication) { return publications})
    .catch(function (error) {alert ('error publication')} )
 }

 // création des balises HTML pour l'affichage
 function showPublication (publication) {
    
    let liens = document.createElement('a');
    liens.href = `./publication.html?id=${publication._id}`;
    showPub.appendChild(liens);

    let article = document.createElement('article');
    showPub.appendChild(liens).appendChild(article);
    
    let images = document.createElement("img");
    images.src = publication.imageUrl;
    images.alt = publication.altTxt;
    showPub.appendChild(liens).appendChild(article).appendChild(images);
    
    let pubTitre = document.createElement("h3");
    pubTitre.classList.add("publicationName");
    pubTitre.innerText = publication.name;
    showPub.appendChild(liens).appendChild(article).appendChild(pubTitre);

    let pubDescription = document.createElement("p");
    pubDescription.classList.add("publicationDescription");
    pubDescription.innerText = publication.description;
    showPub.appendChild(liens).appendChild(article).appendChild(pubDescription);   
 }
*/
 
/******************************************************************
 ***                       CODE PRINCIPAL                       ***
 ******************************************************************/
 /*
 //fonction principale de l'index qui appelle toutes les autres
 mainHome();
*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
  img {
    width: 15%;
  }
}
</style>
