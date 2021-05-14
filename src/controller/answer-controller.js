const answerService = require('../service/answer-service')

const create = async (req, res, next) => {
    try {
        const response = await answerService.create(req.headers)
        return res.status(200).json(response)
    } catch (error) {
        next(error)
    }
}

const findAll = async (req, res, next) => {
    try {
        const response = await answerService.findAll()
        return res.status(200).json(response)
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const response = await answerService.remove(req.headers.id)
        return res.status(200).json(response)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create, remove, findAll
}
