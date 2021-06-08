import { useState, useEffect } from 'react'
import './card.css'
import {listAllStations} from '../functions/Stationsfunc'

const Stations = () => {
    const [allstations, setAllstations] = useState([])

    useEffect(()=>{
        loadAllStations()
    },[])

    const loadAllStations = async() => {
        const allFetchedStations = await listAllStations()
        .then((res)=>{
            console.log("allFetchedStations RES...",res)
            setAllstations(res.data)
        })
    }

    return(
        <>
        <br />
        {/* {JSON.stringify(allstations, null, 4)} */}
        {allstations.map((st) => (
            <div key={st._id} className="inner-textColor">
                <div className="row">
                    <div className="col-auto">
                        <p className="pl-2">{st.name}</p>
                    </div>

                    <div className="col">
                        <p className="float-right">{st.freq.$numberDecimal}</p>
                    </div>
                </div>
              <hr className="hrLine" style={{width: 380}}/>
            </div>
        ))}
        </>
    )
}

export default Stations

