var Todo = require('../models/todoModel');

module.exports = function(app) {

    app.get("/api", function(req, res) {
        res.send("Welcome to the api navigation page.");
    });

    app.get("/api/todos", function(req, res) {
        Todo.find({user: "chandan"}).sort('-date').exec(function(err, data) {
            if(err){
                console.log(err);
            } else
            {
                res.send(data);
            }
        });
    });

    app.get("/api/todo/:id", function(req, res) {
        Todo.find({_id: req.params.id}, function(err, data) {
            if(err){
                console.log(err);
            } else
            {
                res.send(data);
            }
        });
    });

    app.post("/api/todos", function(req, res) {
        if(req.body.id) {
            console.log(request);
            Todo.findOneAndUpdate({_id: req.body.id}, {
                user: req.body.user,
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function(err, data) {
                if(err)
                    throw err;
                else {
                    res.send("update successful");
                }
            })
        } else {
            var todo = new Todo({
                user: req.body.user,
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            todo.save(function(err, data) {
                if(err)
                    throw err;
                else
                    res.send("insert successful");
            });
        }
    });


    app.delete("/api/todos", function(req, res) {
        Todo.findOneAndRemove({_id: req.body.id}, function(err, data){
            if(err)
                throw err;
            else
                res.send("delete successful");
        });
    });
}
