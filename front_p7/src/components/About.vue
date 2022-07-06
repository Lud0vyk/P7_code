<template>
    <div>
        <h1> super compteur</h1>
        <p @click="increment">Vous avez cliqué {{ total }} fois.</p>
        <p>Le total général depuis VueX est de {{ totalGeneral }} </p>
        <p>Le total x2 général depuis VueX est de {{ doubleDuTotal }} </p>

        <font-awesome-icon icon="fa-regular fa-thumbs-up" />
        <font-awesome-icon icon="fa-solid fa-thumbs-up" />
        <i class="fa-regular fa-thumbs-up"></i>
        <i class="fa-solid fa-thumbs-up"></i>
    </div>

        <p>{{ a }}</p>
</template>

<script>

export default {

    name: 'CompteurS',
    data() {
        return {
            total: 0,
             a: 1
        }
    },
    computed: {
        totalGeneral() {
            return this.$store.state.totalFromVueX;
        },
        doubleDuTotal() {
            return this.$store.getters.doubleDuTotal;
        },
        aDouble() {
            return this.a * 2
        },
        // writable
        aPlus: {
            get() {
                return this.a + 1
            },
            set(v) {
                this.a = v - 1
            }
        }
    },
    methods: {
        increment() {
            this.total +=1;
            this.$store.commit('setTotalFromVueX', this.totalGeneral += 1 );
        },
        created() {
            console.log(this.aDouble) // => 2
            console.log(this.aPlus) // => 2

            this.aPlus = 3
            console.log(this.a) // => 2
            console.log(this.aDouble) // => 4
        }
    }
}
</script>

<style scoped lang="scss">
</style>