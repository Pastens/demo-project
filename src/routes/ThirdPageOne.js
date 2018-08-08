import React from 'react';
import { Layout, Row, Col, Button, Divider } from 'antd';
import QueueAnim from 'rc-queue-anim';
import {withRouter} from "react-router-dom";
import 'rc-texty/assets/index.css';
import { Link } from 'dva/router';
import styles from './IndexPage.css';

const { Footer, Content } = Layout;

class ThirdPageOne extends React.Component {
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
      this.props.history.push('/4-1');
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
                  <p>时针指向上午10：00，领导下午要见W公司的重要客户了。</p>
                  <p>领导让你把之前3年与W公司会面的记录及关键决策结论打印给他提前参考……</p>
                </Col>
              </Row>
            </Content>,
            <Footer className={styles.footer} key="demo3">
              <Row type="flex" justify="center" align="middle" style={{ minHeight: "200px" }}>
                <Col span={24} style={{ textAlign: "center", marginBottom: "10px" }}>
                  <Divider>作为他的得力助手你会</Divider>
                  <Button type="dashed" className={styles.options_long} onClick={this.clickOne} ghost>
                    有条不紊的打开日程归档的表格，查询会面记录，在纪要归档文件找到纪要和材料，打印给领导。
                  </Button>
                  <Button type="dashed" className={styles.options_long} onClick={this.clickOne} ghost>
                    快速响应寻求周边资源支持，找到部门内相关业务负责人，索取和问询重要信息后整理给领导
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

export default withRouter(ThirdPageOne);
