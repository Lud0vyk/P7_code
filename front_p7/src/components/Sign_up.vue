<template>

    <div class="card">
        <h1>Sign up</h1>
        <div class="form-row">
            <p> Name : <input v-model="name" class="form-row_input" type="text" placeholder="name"/></p>
        </div>
        <div class="form-row">
            <p> Email : <input v-model="email" class="form-row_input" type="text" placeholder="email"/></p>
        </div>
        <div class="form-row">
            <p> Password : <input v-model="password" class="form-row_input" type="password" placeholder="password"/></p>
        </div>
        <div class="form-row">
            <button class="button button--connection"
                @click="signup()"
                :class="{'button--disable' : !validatedFields }"
            > Sign up </button>
        </div>

    </div>

</template>


<script>

import { mapState } from 'vuex';

export default {

    name: 'identifiantsSign_up',
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
            if(this.email != "" && this.password != "" && this.name != "") {
                return true;
            } else {
                return false;
            }
        },
        ...mapState([status])
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
                self.login();
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        consoleLog() {
            console.log(this.email, this.password, this.name);
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
.button--connection {
    width: 12%;
    height: 30px;
}

</style>