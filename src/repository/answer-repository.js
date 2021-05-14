const { AnswerDb } = require('../model/answers')

const create = async (answer) => {
    const dbAnswer = AnswerDb(answer)
    return await dbAnswer.save();
}

const findAll = async () => {
    return await AnswerDb.find()
}

const remove = async (id) => {
    if (AnswerDb.findById({ id: id })) {
        return await AnswerDb.remove({ id: id })
    }
    return "Cannot delete!"
}

module.exports = { create, findAll, remove }