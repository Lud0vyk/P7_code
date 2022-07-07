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
