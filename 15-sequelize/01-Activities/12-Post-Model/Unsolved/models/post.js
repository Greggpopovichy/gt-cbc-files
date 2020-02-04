module.exports = function(sequelize, DataTypes) {


        var Posts = sequelize.define("Posts", {
            text: {
                type: DataTypes.STRING,


            },
            complete: {
                type: DataTypes.BOOLEAN,
            },

            body: {
                type: DataTypes.TEXT
            }
        });
            return Posts;

 // Add code here to create a Post model
 // This model needs a title, a body, and a category
 // Don't forget to 'return' the post after defining
};
