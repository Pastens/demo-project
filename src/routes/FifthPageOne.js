import React from 'react';
import { Layout, Row, Col, Button, Divider } from 'antd';
import QueueAnim from 'rc-queue-anim';
import {withRouter} from "react-router-dom";
import 'rc-texty/assets/index.css';
import { Link } from 'dva/router';
import styles from './IndexPage.css';

const { Footer, Content } = Layout;

class FifthPageOne extends React.Component {
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
      this.props.history.push('/6-1');
    }, 500);
  }

  clickTwo = (e) => {
    e.preventDefault();
    this.setState({duration: 500, interval:0})
    this.setState({show: false});
    setTimeout(() => {
      this.props.history.push('/6-2');
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
                  <p>你在这S大会的筹备组织中表现优异，才能突出，得到了项目经理的认可。</p>
                  <p>项目经理邀请你换岗担任XXX项目组的运作助理……</p>
                </Col>
              </Row>
            </Content>,
            <Footer className={styles.footer} key="demo3">
              <Row type="flex" justify="center" align="middle" style={{ minHeight: "200px" }}>
                <Col span={24} style={{ textAlign: "center", marginBottom: "10px" }}>
                  <Divider>你决定</Divider>
                  <Button type="dashed" className={styles.options_long} onClick={this.clickOne} ghost>
                    接受邀请，想在新的岗位接受挑战，如果能在运作助理领域开始新的职业生涯那就太好了。
                  </Button>
                  <Button type="dashed" className={styles.options_long} onClick={this.clickTwo} ghost>
                    对运作助理不感兴趣，在文秘岗位精耕细作持续积累，树立自己的品牌是我的梦想。
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

export default withRouter(FifthPageOne);
