// import { useState, useEffect } from 'react'
import './card.css'
import { Layout, Card } from 'antd';
import {LeftOutlined, PoweroffOutlined} from '@ant-design/icons';
const { Header, Footer } = Layout;


const Stations = ({allstations, selectedStation, setSelectedStation}) => {

    const handleClick = (e) => {
        e.preventDefault()
        console.log("Station Clicked")
        // console.log(e.target.innerText)
        setSelectedStation(e.target.innerText)
    }

    return(
        <>
        <br />
        <div className="ml-5">


        <Header style={{ position: 'fixed', zIndex: 1, width: '32.6%' }}>
                <div className="stationHeader rounded-top">
                    <div className="row">
                        <div className="col-auto ml-2 mr-3">
                        <LeftOutlined/>
                        </div>

                        <div className="col">
                        <h5 className="text-center pl-5 mr-3">STATIONS</h5>
                        </div>
                        
                        <div className="col-auto mr-3">
                            <div>
                            <PoweroffOutlined/>
                            </div>
                        </div>
                    </div>
                </div>
        </Header>
    <br />

    <div className="site-card-border-less-wrapper ml-3 pl-0 pt-0">
        <Card >
        <br />
    {/* {JSON.stringify(allstations,null,4)} ok */}
        {allstations.map((st) => (
            <div key={st._id} className="inner-textColor">
            <div className="row">
                <div className="col-auto" style={{cursor: "pointer"}}>
                    <p className="pl-3 bg-primary"
                    onClick={handleClick}
                    >{st.name}</p>
                </div>

                <div className="col">
                    <p className="float-right">{st.freq.$numberDecimal}</p>
                </div>
            </div>
          <hr className="hrLine" style={{width: 380}}/>
        </div>
    ))}
        </Card>
    </div>

    <Footer className="ant-layout-footer rounded-bottom mb-0" style={{ color: "#a8acbc",textAlign: 'center'}}>Huseyin Ozdogan</Footer>
    </div>
 

    {/* {JSON.stringify(allstations,null,4)} ok */}
    </>
    )
}

export default Stations

