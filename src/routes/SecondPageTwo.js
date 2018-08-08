import React from 'react';
import { Layout, Row, Col, Button, Divider } from 'antd';
import QueueAnim from 'rc-queue-anim';
import {withRouter} from "react-router-dom";
import 'rc-texty/assets/index.css';
import { Link } from 'dva/router';
import styles from './IndexPage.css';

const { Footer, Content } = Layout;

class SecondPageTwo extends React.Component {
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
                  <p>青春洋溢，能力超群，你是华秘队伍里能量的存在，入职短短3年就得到了秘书科和业务部门的认可，你的优异表现也为自己赢得了更多成长机会。</p>
                  <p>因为你支撑的主管退休，这天，秘书科长找到你，向你推荐了2个更有挑战性的岗位……</p>
                </Col>
              </Row>
            </Content>,
            <Footer className={styles.footer} key="demo3">
              <Row type="flex" justify="center" align="middle" style={{ minHeight: "200px" }}>
                <Col span={24} style={{ textAlign: "center", marginBottom: "10px" }}>
                  <Divider>你决定去</Divider>
                  <Button type="dashed" className={styles.options_long} onClick={this.click} ghost>
                    担任A部门秘书：主管很有亲和力，员工也都是年轻的博士硕士，和他们一起工作会很愉悦
                  </Button>
                  <Button type="dashed" className={styles.options_long} onClick={this.click} ghost>
                    担任B部门秘书：主管雷厉风行严谨细致，部门业务全球化，在这个部门更能锻炼和提升自己
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

export default withRouter(SecondPageTwo);
