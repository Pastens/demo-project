import React from 'react';
import { Layout, Row, Col, Button, Divider } from 'antd';
import QueueAnim from 'rc-queue-anim';
import {withRouter} from "react-router-dom";
import 'rc-texty/assets/index.css';
import { Link } from 'dva/router';
import styles from './IndexPage.css';

const { Footer, Content } = Layout;

class SixthPageTwo extends React.Component {
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
      this.props.history.push('/final');
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
              <Row type="flex" justify="center" align="middle" style={{ minHeight: "calc(100vh - 300px)" }}>
                <Col span={22} offset={1} style={{ textAlign: "left", color: "#fff", textShadow: "2px 2px 3px #000" }}>
                  <p>因为你在系统优化、效率提升等方面经验不足，运作助理的综合面试没有通过。</p>
                  <p>回到工位你很沮丧，正好收到华秘论坛第三期--提效挑战赛总决赛的观赛邀请……</p>
                </Col>
              </Row>
            </Content>,
            <Footer className={styles.footer} key="demo3">
              <Row type="flex" justify="center" align="middle" style={{ minHeight: "300px" }}>
                <Col span={24} style={{ textAlign: "left", marginBottom: "10px" }}>
                  <Divider>你决定</Divider>
                  <Button type="dashed" className={styles.options_long} onClick={this.clickOne} ghost>
                    X月X日（周X）18：00在J1-1L45现场去观看总决赛，为参赛的小姐妹加油助威，顺便学习效率提升相关的工作方法,一举两得。
                  </Button>
                  <Button type="dashed" className={styles.options_long} onClick={this.clickOne} ghost>
                    WELINK全球直播接入观看X月X日（周X）18：00的总决赛，线上为参赛队伍打CALL，也能学习到新工具新方法在日常工作中提升自己的效率。
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

export default withRouter(SixthPageTwo);
