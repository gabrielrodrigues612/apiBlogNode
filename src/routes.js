const express = require("express");
const routes = express.Router();
const PostsController = require("./controllers/PostsController");
const SignUpUsers = require("./controllers/SignUpUsers");

//Página dos posts
routes.get("/posts", PostsController.posts);
routes.get("/posts/:id", PostsController.post);
routes.post("/criar", PostsController.create);

//Página de login
routes.get("/perfil", SignUpUsers.perfil);
routes.post("/cadastro", SignUpUsers.cadastrar);

module.exports = routes;
