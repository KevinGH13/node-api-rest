const questionService = require('../service/question-service')
console.log("entro al controller")

const create = async (req, res) => {
    console.log("entro al create")
    try {
        const response = await questionService.create(req.headers)
        return res.status(200).json(response)
    } catch (error) {

    }
}

const findAll = async (req, res, next) => {
    console.log("entro al findAll")
    try {
        const response = await questionService.findAll()
        return res.status(200).json(response)
    } catch (error) {
        next(error)
    }
}

const findById = async (req, res, next) => {
    try {
        const response = await questionService.findById(req.params.id)
        return res.status(200).json(response)
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const response = await questionService.remove(req.params.id)
        return res.status(200).json(response)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create, remove, findAll, findById
}
