const mongoose = require('mongoose')

const QuestionDb = mongoose.model(
    "Question", {
    Id: String,
    Title: String,
    Description: String,
    UserId: Number,
    UserName: String
},
    "Question"
)

module.exports = {
    QuestionDb
}