<template>
    <div class="login">
        
        <div class="row">
            <h2>Ma publication</h2>
            <p> identifiant : {{ id}}</p>
             
        </div>
    </div>

</template>

<script>
export default {

    name: 'publicationS',

    props: ['id']


}
</script>

<style scoped lang="scss">
</style>