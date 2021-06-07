import { Layout, Card } from 'antd';
import './card.css'
import {LeftOutlined, PoweroffOutlined} from '@ant-design/icons';
const { Header, Footer } = Layout;


const card = () => {

    return(
        <>
        <br />
    <Header style={{ position: 'fixed', zIndex: 1, width: '42%' }}>
            <div className="stationHeader rounded-top">
                <div className="row">
                    <div className="col-auto mr-3">
                <LeftOutlined/>
                    </div>
                    <div className="col-auto">
                    <h5 className="text-center pl-5 mr-3">STATIONS</h5>
                    </div>
                    <div className="ml-5">
                        <div>
                            
                    <PoweroffOutlined />
                        </div>
                    </div>

                </div>
               
            </div>
    </Header>
    <br />
    <div className="site-card-border-less-wrapper ml-3 pl-0 pt-0">

        <Card bordered={false} style={{ width: 100 }}>
        <br />
          <div className="inner-textColor">
          <p >Card content</p>
          <hr className="hrLine" style={{width: 200}}/>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>

          </div>
        </Card>
      </div>
    <Footer className="ant-layout-footer rounded-bottom mb-0" style={{ textAlign: 'center'}}>Huseyin Ozdogan</Footer>
      </>
    )
}

export default card