const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
  todo: {type: String, required: true},
    desc: {type: String, required: true},
});

// Export the model
module.exports = mongoose.model('Todo', TodoSchema);