module.exports = function(sequelize, DataTypes){
    var ToDo = sequelize.define("todos",{
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    });

return ToDo;

};


