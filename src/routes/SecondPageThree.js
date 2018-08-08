import React from 'react';
import { Layout, Row, Col, Button, Divider } from 'antd';
import QueueAnim from 'rc-queue-anim';
import {withRouter} from "react-router-dom";
import 'rc-texty/assets/index.css';
import { Link } from 'dva/router';
import styles from './IndexPage.css';

const { Footer, Content } = Layout;

class SecondPageThree extends React.Component {
  state= {
    show: true,
    duration: 2000,
    interval: 1000
  }
  
  click = (e) => {
    e.preventDefault();
    this.setState({duration: 500, interval:0})
    this.setState({show: false});
    setTimeout(() => {
      this.props.history.push('/second');
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
                  <p>你那么美，在工作生活中总是闪闪惹人爱。</p>
                  <p>可是仙女本仙也有烦恼，为主管的各种会议协调会议室经常让你很头疼。</p>
                  <p>隔壁部门一位长相似吴彦祖学识如高晓松的GG经常帮你抢会议室，对你非常照顾。</p>
                </Col>
              </Row>
            </Content>,
            <Footer className={styles.footer} key="demo3">
              <Row type="flex" justify="center" align="middle" style={{ minHeight: "200px" }}>
                <Col span={24} style={{ textAlign: "center", marginBottom: "10px" }}>
                  <Divider>你决定</Divider>
                  <Button type="dashed" className={styles.options_long} onClick={this.click} ghost>
                    偷偷在他工位放杯热咖啡和温馨字条，表示满满的谢意
                  </Button>
                  <Button type="dashed" className={styles.options_long} onClick={this.click} ghost>
                    当面表示感谢，约他一起去喝咖啡度过愉快的下午茶时光
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

export default withRouter(SecondPageThree);
