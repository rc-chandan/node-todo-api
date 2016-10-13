var Todo = require('../models/todoModel');

var seedData = require("./seedData");

module.exports = function(app) {
    app.get("/seedcontroller", function(req, res){

        Todo.find(function(err, todos) {
            if(err)
                console.log(err);
            else {
                if(todos.length !== 0) {
                    res.send(todos);
                } else {
                    seedData.map(function(todo){
                        var todoItem = new Todo(todo);
                        todoItem.save(function(err){
                            if(err)
                                throw err;
                        });
                    });
                    res.send("Todo db seeded successfully");
                }
            }
        });
    });
}