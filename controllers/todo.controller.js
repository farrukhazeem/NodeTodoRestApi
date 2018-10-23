const Todo = require('../models/todo.model');


//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Item controller!');
};

exports.todo_create = function (req, res) {
    let todo = new Todo(
        {
            todo: req.body.todo,
            desc: req.body.desc
        }
    );

    todo.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Todo Created successfully')
    })
};

exports.todo_details = function (req, res) {
    Todo.findById(req.params.id, function (err, todo) {
        if (err) return next(err);
        res.send(todo);
    })
};


exports.todo_update = function (req, res) {
    Todo.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, todo) {
        if (err) return next(err);
        res.send('todo udpated.');
    });
};

exports.todo_delete = function (req, res) {
    Todo.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};