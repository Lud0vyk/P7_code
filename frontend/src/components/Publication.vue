<template>
    <div class="card">
        <h2> {{ UserPublication.titre }}</h2>

        <img :src="UserPublication.imageUrl" :alt="UserPublication.description"/>

        <p> {{ UserPublication.description }}</p>
    
        <div class="row">
            <p> by : {{ userInfos.name }} </p>
        </div>
    </div>

    <div class="card-icons">
        <div class="like-container">
            <input type="checkbox" name="checkbox" v-bind:id="publication.id"/>
            <label v-bind:for="publication.id">
                <i class="fa-regular fa-thumbs-up"></i>
                <i class="fa-solid fa-thumbs-up"></i>
                <font-awesome-icon icon="fa-regular fa-thumbs-up" />
                <font-awesome-icon icon="fa-solid fa-thumbs-up" />
            </label>
        </div>
        <div class="dislike-container">
            <input type="checkbox" name="checkbox" v-bind:id="publication.id"/>
            <label v-bind:for="publication.id">
                <font-awesome-icon icon="fa-regular fa-thumbs-down" />
                <font-awesome-icon icon="fa-solid fa-thumbs-down" />
            </label>
        </div>
    </div>

    <hr>
    <button @click="consoleLog()" class="button"> console.log </button>

</template>

<script>
export default {

    name: 'publicationVue',
    props: ['id'],
    data() {
        return {
           publications: this.$store.state.publicationSchema,
           userInfos: this.$store.state.userInfos,
           UserPublication: []
        }
    },
    components : {

    },
    created () {
        // action
        this.$store.dispatch('setCurrentPublication', this.id);
    },
    methods : {
        URL: function url() {
            // récupération de l'id du produit
            let queryString_url_id = window.location.search;
            let urlSearchParams = new URLSearchParams(queryString_url_id);
            let id = urlSearchParams.get("id");

            for(let publication in this.publications) {

                if(id === publication.id) {
                    this.UserPublication = publication;
                    return this.UserPublication;
                } else {
                    console.log('error publication');
                }
                console.log(this.UserPublication);
            }
        },
        goToUpdate(id) {
			this.$router.push("/publication/" + id);
		},
        deletePublication() {
			this.$store.dispatch("deletePublication", { id: this.id });
			this.$router.push("/");
			window.alert(
				"La publication supprimée."
			);
		},
		switchStatus() {
			this.$store.dispatch("updateStatus", { id: this.id });
			this.$router.push("/");
			window.alert(
				"La publication validée."
			);
		},
    },
    computed: {
        
    }



}
</script>

<style scoped lang="scss">
</style>