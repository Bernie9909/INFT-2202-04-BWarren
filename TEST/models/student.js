const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('', {

}, function(error) {
    if (error) {
        console.error("unable to connect", error);
    }
});

mongoose.set('useCreateIndex', true);

// Declare schema as mongoose.schema to cut down on typing
let schema = mongoose.schema;

// Student schema 
let studentSchema = new Schema({
    studentId: Number,
    firstName: String,
    lastName: String,

}, {
    collection: 'students'
});

// Export schema as models
module.exports.Student = mongoose.model('student', studentSchema);

