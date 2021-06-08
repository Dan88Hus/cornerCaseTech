import { Layout, Card, Avatar } from 'antd';
import './card.css'
import Stations from './Allstations'
import {LeftOutlined, PoweroffOutlined, 
    UserOutlined, MinusCircleOutlined, 
    PlusCircleOutlined} from '@ant-design/icons';
const { Header, Footer } = Layout;


const cardSelected = ({allstations, selectedStation}) => {

    return(
        <>
        <br />
    <Header style={{ position: 'fixed', zIndex: 1, width: '33.2%' }}>
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
                        <PoweroffOutlined size={64}/>
                        </div>
                    </div>
                </div>
            </div>
    </Header>
    <br />
    <div className="site-card-border-less-wrapper ml-3 pl-0 pt-0">
        <Card >
        <br />
    {/* {JSON.stringify(allstations[0],null,4)} ok */}
        {allstations[0] && 
        <div className="inner-textColor">
            <div className="row">
                <div className="col-auto">
                    <p className="pl-3 bg-primary"
                    >{allstations[0].name}</p>
                </div>

                <div className="col">
                    {/* {JSON.stringify(allstations[0].freq.$numberDecimal)} */}
                    <p className="float-right">{allstations[0].freq.$numberDecimal}</p>
                </div>
            </div>
          <hr className="hrLine" style={{width: 380}}/>
        </div>}

        <div className="row">
            <div className="col-auto float-left pl-5">
            <MinusCircleOutlined style={{color: "#a8acbc"}} size="small"/>
            </div>

            <div className="col-auto pl-5 float-center">
                <Avatar       
                style={{
                color: '#f56a00',
                backgroundColor: '#fde3cf',}}
                // icon={<UserOutlined />}
                className="ml-5 float-center"
                size={40}>No Image</Avatar>
            </div>

            <div className="col">
            <PlusCircleOutlined style={{color: "#a8acbc"}} size={64} className="float-right"/>
            </div>
        </div>
        
        <hr className="hrLine" style={{width: 380}}/>

        {allstations[1] && 
        allstations.slice(1).map((st) => (
            <div key={st._id} className="inner-textColor">
            <div className="row">
                <div className="col-auto">
                    <p className="pl-3 bg-primary"
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
    <Footer className="ant-layout-footer rounded-bottom mb-0" style={{ textAlign: 'center'}}>CURRENTLY PLAYING <br />{selectedStation}</Footer>
      </>
    )
}
export default cardSelected