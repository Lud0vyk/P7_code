cd backend

git init                                     // puis un fichier .gitignore contenant node_modules
npm init                                     // server.js
npm install -g nodemon                       // server
npm install express
npm install mongoose                         // bdd
npm install mongoose-unique-validator        // sécurité bdd
npm install bcrypt                           // sécurité mdp
npm install jsonwebtoken                     // sécurité session
npm install multer                           // téléchargement de fichiers
npm install --save dotenv                    // sécurisation de la bdd

npm install helmet --save                    // pour la sécurité (pas encore installé le faire à la fin et supprimer ce com)


démarage :

TERMINAL 1 :
cd Web-Developer-P6-master
ng serve

TERMINAL 2 :
cd backend
nodemon server

question :
chiffrement de l'email ?
mot de passe fort ?

