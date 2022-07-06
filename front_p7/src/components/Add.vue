<template>
    <div class="login">
        
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
  

    </div>

</template>


<script>

</script>


<style scoped lang="scss">
</style>