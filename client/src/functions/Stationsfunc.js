import axios from 'axios'

const PATH = "http://localhost:8000/api"

export const listAllStations = async () => {
    console.log("functions listAllStations")
    return await axios.get(`${PATH}/stations`)
}