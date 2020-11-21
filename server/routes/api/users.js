const express = require('express')
const router = express.Router()
const userControllerApis = require('../../controller/api/userApis')

// getting api contains api/users
router.get('/', userControllerApis.index)

// getting api contains api/users/login
router.get('/', () => { })

// getting api contains api/users/signup
router.get('/', () => { })

module.exports = router