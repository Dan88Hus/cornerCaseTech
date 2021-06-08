// import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';
import AllStations from './components/Allstations'
import CardSelected from './components/cardSelected'
import {listAllStations} from './functions/Stationsfunc'

function App() {

    const [allstations, setAllstations] = useState([])
    const [selectedStation, setSelectedStation] = useState([])

    useEffect(()=>{
        loadAllStations()
    },[])

    const loadAllStations = async() => {
        await listAllStations()
        .then((res)=>{
          // console.log("allFetchedStations RES...",res)
          setAllstations(res.data)
        })
    }
  
  return (
    
    <div className="background">
      <div className="row">

        <div className="col-auto mr-5">
        <AllStations allstations={allstations}
        selectedStation={selectedStation}
        setSelectedStation={setSelectedStation}
        />

        </div>
          {/* {JSON.stringify(selectedStation)} */}
        <div className="col-auto ml-5">
        <CardSelected selectedStation={selectedStation}/>
        </div>

      </div>
    </div>
  );
}

export default App;
