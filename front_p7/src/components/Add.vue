<template>
    <div class="card">
        <h1>Add publication</h1>

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
               <!-- <button class="button button--addImg"
                    type="file"
                    @click="addImg()"
                    :class="addImg"
                > Add image </button>-->

                <input type="file" @change="onFileSelected" >
                <button class="button button--connection"
                    @click="onUpload"
                    :class="{'button--disable' : !validatedFields }">
                    Submit 
                </button>
                
            </div>

            <!-- v-model="selectedFile" div class="form-row">
                <button class="button button--connection"
                    @click="Submit()"
                    :class="{'button--disable' : !validatedFields }"
                > Submit </button>
            </div>-->
		</form>
  
    </div>

    <hr>
    <button @click="consoleLog()" class="button"> console.log </button>

</template>


<script>

import axios from 'axios';
import { mapState } from 'vuex';

export default {
  name: 'userAdd',
  data() {
        return {
           //publication: this.$store.state.publicationSchema,
           mode: 'add',
           userInfos: this.$store.state.userInfos,
           title: '',
           description: '',
           addImg: '',
           selectedFile: null,
           publication: {
            /*userId,
            userName,
            title,
            validation,
            description,
            imageUrl,
            likes,
            dislike*/
           }
        }
  },
  methods: {
    onFileSelected(event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
    },
    onUpload() {
        const fd = new FormData();
        
        fd.append('image', this.selectedFile, this.selectedFile.name);

        /*this.publication =  new publication {
            this.userId = this.userInfos.id,
            this.userName = this.userInfos.name,
            this.title = this.title,
            this.description = this.description,
            this.imageUrl = fd,
            this.likes = 0,
            this.dislikes = 0
        };*/

        axios.post('http://localhost:3000/api/publication', this.userInfos.id, {
            userId : this.userInfos.id,
            userName : this.userInfos.name,
            title : this.title,
            description : this.description,
            imageUrl : this.selectedFile.name,
            date: Date.now(),
            likes : 0,
            dislikes : 0,
            file: fd
        })
        .then(res => {
            console.log(res)
        }).catch(function (error) {
            console.log(error);
        });
    },
    consoleLog() {
      //console.log(this.publication.imageUrl);
      console.log("add.vue");
      console.log(localStorage.userInfos);
      console.log("selectedFile");
      console.log(this.selectedFile);
      
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
            self.$router.push('home');
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
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
        ...mapState(['status'])
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
            margin-right: 5px;
            // pour mettre quelque chose à virer plus tard
        }
        input, textarea {
            margin-right: 5px;
            // pour mettre quelque chose à virer plus tard
        }
        button {
            min-width: 100px;
            max-width: 200px;
            margin-left: 30%;
        }
    }
}


</style>