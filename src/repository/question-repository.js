const { QuestionDb } = require('../model/question')

const create = async (question) => {
    const dbQuestion = QuestionDb(question);
    return await dbQuestion.save();
}

const findAll = async () => {
    return await QuestionDb.find()
}

const findById = async (id) => {
    return await QuestionDb.findById({ id: id });
}

const remove = async (id) => {
    if (QuestionDb.findById({ id: id })) {
        return await QuestionDb.remove({ id: id })
    } else {
        return "Doesn't exist!"
    }
}

module.exports = { create, findAll, findById, remove }