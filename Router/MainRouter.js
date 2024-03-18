const express = require('express')
const router = express.Router()

const { sendMessage } = require('../Controllers/MainController')


router.post('/sendMessage', sendMessage)

module.exports = router