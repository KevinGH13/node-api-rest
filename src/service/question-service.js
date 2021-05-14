const { QuestionDb } = require('../model/question')
const questionRepository = require('../repository/question-repository')

const findAll = async () => {
    return await questionRepository.findAll()
}

const findById = async (id) => {
    return await questionRepository.findById(id)
}

const create = async (question) => {
    return await questionRepository.create(question)
}

const remove = async (id) => {
    return await questionRepository.remove(id)
}

module.exports = {
    findAll, findById, create, remove
}