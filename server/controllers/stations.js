const Stations = require('../models/stations')


exports.listAllStations = async (req, res) => {
  try {
    stations = await Stations.find({}).exec()
    console.log("Stations are fetched SUCCESSFULLY")
    res.json(stations)
  } catch (error) {
    console.log(error.message)
    res.status(400).send("stations fetch Failed", error.message)
  }

}