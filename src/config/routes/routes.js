const express = require('express')
const questionController = require('../../controller/question-controller')
const answerController = require('../../controller/answer-controller')

const router = () => {
    const router = express.Router();
    console.log("entra al router")
    router.get("/questions", questionController.findAll)
    router.get('/questions/:id', questionController.findById)
    router.post('/questions', questionController.create)
    router.delete('/questions/:id', questionController.remove)

    return router
}

module.exports = {
    router
}