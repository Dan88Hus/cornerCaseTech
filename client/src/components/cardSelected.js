import { Layout, Card } from 'antd';
import './card.css'
import Stations from './Allstations'
import {LeftOutlined, PoweroffOutlined} from '@ant-design/icons';
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
    <Footer className="ant-layout-footer rounded-bottom mb-0" style={{ textAlign: 'center'}}>Huseyin Ozdogan</Footer>
      </>
    )
}
export default cardSelected