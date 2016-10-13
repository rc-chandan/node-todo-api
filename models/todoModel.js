var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    user: String,
    todo: String,
    date: { type: Date, default: Date.now },
    isDone: Boolean,
    hasAttachment: Boolean
});

var Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
