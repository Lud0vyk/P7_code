<template>
    <div class="card">
        <h1>Add publication</h1>

        <form method="get" id="form_add">
            <div class="form-row">
                <label for="title">Title : </label>
                <input 
                    v-model="post.title"
                    alt="title" 
                    id="title" 
                    class="form-row_input" 
                    type="text" required />
            </div>
            <div class="form-row">
                <label for="description">Description : </label>
                <textarea 
                    v-model="post.description" 
                    id="description" 
                    class="form-row_input" 
                    rows="5" cols="50" 
                    type="textarea" required>
                </textarea>
            </div>
            <div class="form-row">

                <input 
                    type="file" 
                    @change="onFileSelected()"
                    id="image"
                    name="image"
                    ref="image" >
                <label for="image">
                    <span class="material-icons">add_photo_alternate</span>
                </label>
                <div
                    class="image-preview"
                    id="imagePreview"
                    v-if="post.imageData.length > 0">
                    <img
                        :src="post.imageData"
                        alt="Image Preview"
                        class="image-preview__image" />
                </div>

            </div>

            <div class="form-row">
                <button 
                    class="button button--connection"
                    type="submit"
                    tabindex="0"
                    @click="onUpload()"
                    :class="{'button--disable' : !validatedFields }">
                    Submit 
                </button>
            </div>
        </form>
  
    </div>

</template>


<script>

//import axios from 'axios';
import { mapState } from 'vuex';

export default {
  name: 'userAdd',
  data() {
        return {
           
            mode: 'add',
            user: this.$store.state.userInfos,
            //selectedFile: null,
            publication: this.$store.state.currentPublication,
            post: {
                title: '',
                description: '',
                date: '',
                image: '',
                imageData: ''
            },
            messageError: '',
        }
  },
  methods: {
    onFileSelected() {
        this.post.image = this.$refs.image.files[0];
    },
    onUpload() {
			const formData = new FormData();
			formData.append("title", this.post.title);
			formData.append("description", this.post.description);
            formData.append("image", this.post.image);
            formData.append("date", Date.now);

			if (formData.get("image") === "" && formData.get("message") === "") {
				let messageError = document.getElementById("error_message");
				messageError.classList.add("text-danger");
				this.messageError ="Votre devez nous partager au moins une photo et un message !";
			} else {
				this.$store.dispatch("publicationPost", formData);
				if (this.user.role === 'admin') {
					window.alert("Votre publication a été posté.");
					window.location.reload();
				} else {
                    window.alert("Votre publication a bien été posté. Un de nos administrateurs va valider votre poste.");
                    window.location.reload();
				}
			}
		},/*
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
/*
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
    },*/

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
            if(this.post.title == "" || this.post.description == "" || this.post.image == "") { 
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

    .form-row{
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 33%;
        margin-left: 33%;

        label {
            margin-right: 5px;
        }
        input, textarea {
            margin-right: 25px;
            min-width: 200px;
            width: 90%;
        }
        button {
            min-width: 100px;
            max-width: 200px;
            margin-left: 30%;
        }
    }
}
.image-preview {
width: 300px;
min-height: 100px;
border: 2px solid #212121;
margin-top: 15px;

display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
color: #cccccc;
}
.image-preview__image {
	height: 100%;
	width: 100%;
}

@media (max-width: 768px) {
	.card {
		width: auto;
        margin-left: 10px;

        #form_add {
            margin-right: 10%;
        }
        .form-row{
            margin-left: 0;

            label {
                margin-right: 5px;
            }
            input, textarea {
                margin-right: 25px;
                min-width: 200px;
                width: 90%;
            }
        }
}
}

</style>