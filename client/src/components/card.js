import { Layout, Card } from 'antd';
import './card.css'
const { Header, Footer } = Layout;


const card = () => {

    return(
        <>
        <br />
    <div className="site-card-border-less-wrapper ml-3 pl-0 pt-0">

    <Header style={{ position: 'fixed', zIndex: 1, width: '34%' }}>
            <div className="stationHeader rounded-top">
                <h5 className="text-center ">STATIONS</h5>
            </div>
    </Header>
        <Card bordered={false} style={{ width: 100 }}>
        <br />
          <div className="inner-textColor">
          <p >Card content</p>
          <hr className="hrLine" style={{width: 200}}/>
          <p>Card content</p>
          <p>Card content</p>
          </div>
        </Card>
      </div>
    <Footer className="ant-layout-footer rounded-bottom mb-0" style={{ textAlign: 'left'}}>Ant Design ©2018 Created by Ant UED</Footer>
      </>
    )
}

export default card