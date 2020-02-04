

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the posts
    app.get("/api/posts", function(req, res) {
        db.Posts.findAll({}).then(function(allblogs) {
            res.json(allblogs);
        });
        // Add sequelize code to find all posts, and return them to the user with res.json
    });

    // Get route for returning posts of a specific category
    app.get("/api/posts/category/:category", function(req, res) {
        db.Posts.findAll({
            where:{
                id: req.params.id
            }
        }).then(function(specific) {
            res.json(specific);
        });
    });

        // Add sequelize code to find all posts where the category is equal to req.params.category,
        // return the result to the user with res.json


    // Get route for retrieving a single post
    // app.get("/api/posts/:id", function(req, res) {
    //     // Add sequelize code to find a single post where the id is equal to req.params.id,
    //     // return the result to the user with res.json
    // });

    // POST route for saving a new post
    app.post("/api/posts", function(req, res) {
        db.Posts.create({
            title: req.body.title,
            body: req.body.body,
            complete: req.body.complete
        }).then(function(createPost){
            res.json(createPost);
        });
        // Add sequelize code for creating a post using req.body,
        // then return the result using res.json
    });

    // DELETE route for deleting posts
    app.delete("/api/posts/:id", function(req, res) {
        db.Posts.destroy({
            where:{
                id: req.params.id
            }
        }).then(function(deletePost){
            res.json(deletePost);
        });
        // Add sequelize code to delete a post where the id is equal to req.params.id,
        // then return the result to the user using res.json
    });

    // PUT route for updating posts
    app.put("/api/posts", function(req, res) {
        db.Posts.update({
            title: req.body.title,
            complete: req.body.complete,
            category: req.body.category
            },
            {
                where: {
                id: req.body.id
            }
        }).then(function(updatePost){
            res.json(updatePost);
        });
        // Add code here to update a post using the values in req.body, where the id is equal to
        // req.body.id and return the result to the user using res.json
    });
};
