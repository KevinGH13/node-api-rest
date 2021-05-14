const express = require('express')
const cors = require("cors")
const routes = require('../config/routes/routes')
const mongoDb = require('./database/mongodb')

const app = express()
app.use(cors())
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: false, limit: "20mb" }));

const run = async () => {
    console.log("Connecting to MongoDB...")
    await mongoDb.connect();
    app.use(routes.router)
    app.listen(3000, () => {
        console.log("Server is listening on port 3000")
    })
}

module.exports = {
    run
}