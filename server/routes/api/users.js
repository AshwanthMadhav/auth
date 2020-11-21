const express = require('express')
const router = express.Router()


// getting api contains api/users
router.get('/', (req, res) => {
    return res.status(200).json({
        success: true
    })
})

// getting api contains api/users/login
router.get('/', () => { })

// getting api contains api/users/signup
router.get('/', () => { })

module.exports = router