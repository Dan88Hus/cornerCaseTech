const express = require('express')

const router = express.Router()

// controllers
const {listAllStations, createStations} = require('../controllers/stations')

//routes

router.get('/stations', listAllStations);
router.post('/stations/create', createStations)

module.exports = router