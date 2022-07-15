<template>

    <div class="card">
        <h1>Sign up</h1>
        <div class="form-row">
            <p> Name : <input
                v-validate="'required|email'"
                v-model="name" 
                class="form-row_input" 
                type="text" 
                placeholder="name"
                aria-label="name"/></p>
        </div>
        <div class="form-row">
            <p> Email : <input
                v-model="email"
                class="form-row_input"
                type="text"
                placeholder="email"
                aria-label="email"/></p>
        </div>
        <div class="form-row">
            <p> Password : <input
                v-model="password"
                class="form-row_input"
                type="password"
                placeholder="password"
                aria-label="password"/></p>
        </div>
        <div class="form-row">
            <button class="button button--connection"
                @click="signup()"
                :class="{'button--disable' : !validatedFields }">
                <span v-if="status == 'loading'">Connection...</span>
                <span v-else> Sign up </span>
            </button>
        </div>

    </div>

</template>


<script>

import { mapState } from 'vuex';

export default {

    name: 'Sign_up_vue',
    data() {
        return {
            mode: 'signup',
            email: '',
            password: '',
            name: ''
        }
    },
    computed: {
        validatedFields() {
            if(this.email == "" || this.password == "" || this.name == "") {
                return false;
            } else {
                return true;
            }
        },
        ...mapState(['status'])
    },
    methods: {
        signup() {
            const self = this;
            this.$store.dispatch('signup', {
                email: this.email,
                password: this.password,
                name: this.name
            })
            .then(function (response) {
                self.$router.push('/login');
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
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