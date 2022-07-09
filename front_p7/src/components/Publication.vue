<template>
    <div class="card">
        
        <div class="row">
            <h2>Ma publication</h2>
            <p> identifiant : {{ id}}</p>
             
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

    name: 'publicationS',

    props: ['id'],

    methods : {

        consoleLog() {
            //console.log();
            console.log("login.vue");
            console.log(this.email, this.password);
        }
    }



}
</script>

<style scoped lang="scss">
</style>