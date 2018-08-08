import React from 'react';
import { Layout, Row, Col, Button, Divider } from 'antd';
import QueueAnim from 'rc-queue-anim';
import {withRouter} from "react-router-dom";
import 'rc-texty/assets/index.css';
import { Link } from 'dva/router';
import styles from './IndexPage.css';

const { Footer, Content } = Layout;

class SecondPageOne extends React.Component {
  state= {
    show: true,
    duration: 2000,
    interval: 1000
  }
  
  clickOne = (e) => {
    e.preventDefault();
    this.setState({duration: 500, interval:0})
    this.setState({show: false});
    setTimeout(() => {
      this.props.history.push('/3-1');
    }, 500);
  }

  render() {
    return (
      <div>
        <Layout className={styles.layout}>
          <QueueAnim duration={this.state.duration} interval={this.state.interval} type="alpha">
          {this.state.show ? 
          [
            <div key="demo1" className={styles.background} />,
            <Content key="demo2" type="flex">
              <Row type="flex" justify="center" align="middle" style={{ minHeight: "calc(100vh - 200px)" }}>
                <Col span={22} offset={1} style={{ textAlign: "left", color: "#fff", textShadow: "2px 2px 3px #000" }}>
                  <p>清晨的阳光从落地窗倾泻而下，得体的着装搭配精致的妆容，作为总裁秘书的你一直是办公室美丽优雅的存在。</p>
                  <p>打开邮箱，收到周边和上层会议的通知，几位部门内的主管也来找你预约领导时间……</p>
                </Col>
              </Row>
            </Content>,
            <Footer className={styles.footer} key="demo3">            
              <Row type="flex" justify="center" align="middle" style={{ minHeight: "200px" }}>
                <Col span={24} style={{ textAlign: "center", marginBottom: "10px" }}>
                  <Divider>这个时候，你会</Divider>
                  <Button type="dashed" className={styles.options_long} onClick={this.clickOne} ghost>
                    全面了解每件事的背景，事无据悉标清备注，打印与主管书面确认后安排主管日程
                  </Button>
                  <Button type="dashed" className={styles.options_long} onClick={this.clickOne} ghost>
                    根据经验迅速识别关键信息，提取决策点，进办公室口头与主管确认后上传下达。
                  </Button>
                </Col>
              </Row>
            </Footer>
          ] : null
          }
          </QueueAnim>
        </Layout>
      </div>
    );
  }
}

export default withRouter(SecondPageOne);
