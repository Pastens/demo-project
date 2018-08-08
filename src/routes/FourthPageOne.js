import React from 'react';
import { Layout, Row, Col, Button, Divider } from 'antd';
import QueueAnim from 'rc-queue-anim';
import {withRouter} from "react-router-dom";
import 'rc-texty/assets/index.css';
import { Link } from 'dva/router';
import styles from './IndexPage.css';

const { Footer, Content } = Layout;

class FourthPageOne extends React.Component {
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
      this.props.history.push('/5-1');
    }, 500);
  }

  clickTwo = (e) => {
    e.preventDefault();
    this.setState({duration: 500, interval:0})
    this.setState({show: false});
    setTimeout(() => {
      this.props.history.push('/5-2');
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
                  <p>作为总裁专业可信赖的助手，日常工作让你充满了满满的成就感，但也有一丝丝觉得平淡。</p>
                  <p>下午你收到秘书体系征集报名支撑公司S大会的邮件……</p>
                </Col>
              </Row>
            </Content>,
            <Footer className={styles.footer} key="demo3">
              <Row type="flex" justify="center" align="middle" style={{ minHeight: "200px" }}>
                <Col span={24} style={{ textAlign: "center", marginBottom: "10px" }}>
                  <Divider>你选择</Divider>
                  <Button type="dashed" className={styles.options_long} onClick={this.clickOne} ghost>
                    去参加，会务组织能力是我的强项，我想利用这个机会展现自己，也想进一步得到提升和锻炼
                  </Button>
                  <Button type="dashed" className={styles.options_long} onClick={this.clickTwo} ghost>
                    这次就算了，把机会留给其他MM吧，我最近正好在专注搞部门的颁奖晚会
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

export default withRouter(FourthPageOne);
