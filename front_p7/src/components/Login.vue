<template>

    <div class="card">
        <h1> Login </h1>
        <div class="form-row">
            <p> Email : <input v-model="email" class="form-row_input" type="text" placeholder="email"/></p>
        </div>
        <div class="form-row">
            <p> Password : <input v-model="password" class="form-row_input" type="password" placeholder="password"/></p>
        </div>
        <div class="form-row" v-if="mode == 'login' && status == error_login">
            <p> </p>
        </div>
        <div class="form-row">
            <button class="button button--connection"
                @click="login()"
                :class="{'button--disable' : !validatedFields }">
                <span v-if="status == 'loading'">Connection...</span>
                <span v-else> Login </span>
            </button>
        </div>
    </div>

    <button @click="logout()" class="button"> Logout </button>

</template>

<script>

import { mapState } from 'vuex';

export default {

    name: 'Login_vue',
    data() {
        return {
            mode: 'login',
            email: '',
            password: ''
        }
    },
    computed: {
        validatedFields() {
            if(this.email != "" && this.password != "") {
                return true;
            } else {
                return false;
            }
        },
        ...mapState(['status'])
    },
    methods: {
        login() {
            const self = this;
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password
            })
            .then(function (response) {
                self.$router.push('home');
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        logout() {
        this.$store.commit('logout');
        this.$router.push('/login');
        }
    }
}
</script>


<style scoped lang="scss">

.form-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 15px;
}

</style>