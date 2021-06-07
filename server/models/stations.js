const mongoose = require("mongoose");

const freqSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    freq: {
        type: mongoose.Decimal128,
    }
})

const Stations = mongoose.model("Stations", freqSchema)

module.exports = Stations