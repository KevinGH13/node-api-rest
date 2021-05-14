const mongoose = require('mongoose')

const AnswersDb = mongoose.model(
    "Answers", {
    Id: String,
    QuestionId: Number,
    Answer: String,
    UserId: Number,
    UserName: String
},
    "Answers"
)

module.exports = {
    AnswersDb
}