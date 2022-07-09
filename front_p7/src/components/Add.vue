<template>
    <div class="card">
        <h1>Add publication</h1>

        <div class="form-row">
            <p> title : </p>
            <input v-model="title1" class="form-row_input" type="text" />
        </div>
        <div class="form-row">
            <p> Description : </p>
            <input v-model="description1" class="form-row_input" type="textarea" />
        </div>
           
        <hr>

        <form method="get" id="form_add">
            <div class="form-row">
                <label for="title">Title : </label>
                <input v-model="title" alt="title" id="title" class="form-row_input" type="text" required />
            </div>
            <div class="form-row">
                <label for="description">Description : </label>
                <textarea v-model="description" id="description" class="form-row_input" rows="5" cols="50" type="textarea" required></textarea>
            </div>
                <div class="form-row">
                <button class="button button--addImg"
                    @click="addImg()"
                    :class="addImg"
                > Add image </button>
            </div>

            <div class="form-row">
                <button class="button button--connection"
                    @click="Submit()"
                    :class="{'button--disable' : !validatedFields }"
                > Submit </button>
            </div>
		</form>
  
    </div>

    <hr>
    <button @click="consoleLog()" class="button"> console.log </button>

</template>


<script>

import { mapState } from 'vuex';

export default {
  name: 'userAdd',
  data() {
        return {
           //publication: this.$store.state.publicationSchema,
           mode: 'add',
           user: this.$store.state.user,
           userInfos: this.$store.state.userInfos,
           title: '',
           description: '',
           addImg: '',
        }
  },
  methods: {
    consoleLog() {
      //console.log(this.publication.imageUrl);
      console.log("meth");
      console.log(this.user);
    },
    logout() {
      this.$store.commit('logout');
      this.$router.push('/');
    },
    addPublication() {
        const self = this;
        this.$store.dispatch('addPublication', {
            userId: this.user.id,
            userName: this.userInfos.name,
            title: this.title,
            description: this.description,
            date: 0,
            validation: false,
            likes: 0,
            dislikes: 0
        })
        .then(function (response) {
            self.function(); // a faire
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    },
  },
  computed: {
        validatedFields() {
            if(this.title == "" || this.description == "" ) { 
                return false;
            } else {
                return true;
            }
        },
        // ajouter || this.addImg == "" quand je saurais
        /*validatedFields() {
            if(this.title != "" && this.description != "") {
                return true;
            } else {
                return false;
            }
        },*/
        ...mapState([status])
  }
}

</script>


<style scoped lang="scss">

#form_add {
    
    //display: flex;
    //flex-direction: column;
    //justify-content: center;
    //align-content: space-between;

    .form-row{
        text-align: left;
        display: flex;
        flex-direction: column;
       // justify-content: center;
        width: 33%;
        margin-left: 33%;

        label {
            //justify-content: left;
        
        }
        input, textarea {
            
        }
        button {
            min-width: 100px;
            max-width: 200px;
            margin-left: 30%;
        }
    }
}


</style>