import React from 'react';
import { Layout, Row, Col, Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { withRouter } from "react-router-dom";
import 'rc-texty/assets/index.css';
import { Link } from 'dva/router';
import styles from './IndexPage.css';
const { Footer, Content } = Layout;

class FinalPage extends React.Component {
  state = {
    show: true,
    duration: 2000,
    interval: 1000
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
                      <p>你是华秘活力之星的代表。</p>
                      <p>你毫不吝惜地在文秘岗位燃烧自己的激情和能量，永远元气满满充满正能量，但有时会稍稍缺少一丝温柔的气息。</p>
                      <p>工作中你常直言不讳，敢于进击，不怕挫折。在职场的选择面前，你当机立断毫不纠结，并能迅速形成方案并落地执行。活力如你，担当如你，果敢如你，闪闪发光！</p>
                      <p>9月4日（周二）18：30深圳J1-1L43R华秘论坛第三期提效挑战赛总决赛现场，邀你一起来释放激情和活力！</p>
                    </Col>
                  </Row>
                </Content>,
                <Footer key="demo3" className={styles.footer}>
                  <Row type="flex" justify="center" align="middle" style={{ minHeight: "200px" }}>
                    <Col span={24} style={{ textAlign: "center", marginBottom: "10px" }}>
                      <Button type="dashed" className={styles.options} ghost>
                        <Link to="/">保存至本地相册</Link>
                      </Button>
                      <Button type="dashed" className={styles.options} ghost>
                        <Link to="/">分享给好友</Link>
                      </Button>
                      <Button type="dashed" className={styles.options} ghost>
                        <Link to="/">再玩一次</Link>
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

export default FinalPage;
