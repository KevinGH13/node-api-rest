const { AnswerDb } = require('../model/answers')
const answerRepository = require('../repository/answer-repository')

const create = async (answer) => {
    return await answerRepository.create(answer)
}

const findAll = async () => {
    return await answerRepository.findAll()
}

const remove = async (id) => {
    return await answerRepository.remove(id)
}

module.exports = {
    create, findAll, remove
}