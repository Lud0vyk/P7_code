<template>
    <img alt="logo groupomania" :src= functionLogo>
</template>

<script>
export default {
    name: 'LogoVue',

    computed: {
        functionLogo () {
            return require("@/assets/icon-left-font.png");
        }
    }
}
</script>

<style>
    img {
        width: 20%;
        min-width: 200px;
        align-items: center;
    }
</style>