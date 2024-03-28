// Import Student Model 
const studentModel = require('../models/student');

function loadStudentData(req, res) {
    studentModel.Student.find({}).then(function(studentList) {
        res.render('', {
            pageTitle: 'INFT 2202 - Student Class List',
            students: studentList
        })
    })
}

function studentView(req, res) {
    // Render student view 
    res.render('./pages/student', {
        pageTitle: "INFT 2202 - Student View"
    })
}

// Exports 
module.exports = {
    studentView
};