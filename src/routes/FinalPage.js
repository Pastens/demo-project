import React from 'react';
import { Layout, Row, Col, Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import {withRouter} from "react-router-dom";
import styles from './FinalPage.css';
import '../models/result';

const { Content, Footer } = Layout;


class FinalPage extends React.Component {
  constructor(props) {
    super(props);
    this.resultIndex = Math.round(Math.random()*11) ;
    console.log(this.resultIndex);
    this.state = {
      show: true,
      backgroundName: "",
      result: global.result[this.resultIndex],
      animDuration:     2000,
      animInterval:     2000,
      animType:         "alpha",
    }
  }

  playAgain = (e) => {
    this.props.history.push("/");
  }

  componentDidMount = (e) => {
    // this.setState({result: global.result[0]});
  }

  render() {
    const backgroundStyle = {
      backgroundImage: `url(${require('../assets/背景最后.jpg')})`
    }
    return(
      <div>
        <Layout className={styles.layout}>
          <QueueAnim
            duration={this.state.animDuration}
            interval={this.state.animInterval}
            type={this.state.animType}
          >
          {
            this.state.show ? [
              <div
                key="demo1"
                className={styles.background}
                style={backgroundStyle}
              />,
              <Content
                key="demo2"
                type="flex"
              >
                <Row
                  type="flex"
                  justify="center"
                  align="bottom"
                  style={{ minHeight: "calc(100vh - 12rem)", padding: "0 0 10rem 0" }}
                >
                  <Col
                    span={22}
                    offset={1}
                    style={{ textAlign: "center", color: "#fff", textShadow: "0px 0px 10px #000" }}
                  >
                    <h1
                      style={{ textAlign: "center", color: "#fff", textShadow: "0px 0px 10px #000" }}
                    >{this.state.result.title}</h1>
                    {this.state.result.content.map((item, index) => {
                      return(
                        <p
                          key={"p-"+index}
                          style={{ textAlign: "left", color: "#fff", textShadow: "0px 0px 10px #000" }}
                        >
                          {item}
                        </p>
                      )
                    })}
                  </Col>
                </Row>
              </Content>,
              <Footer
                key="demo3"
                type="flex"
                className={styles.footer}
              >
                <Row
                  type="flex"
                  justify="center"
                  align="middle"
                  style={{minHeight: "12rem"}}
                >
                  <Col
                    span={24}
                    style={{ textAlign: "center" }}
                  >         
                    <Button
                      type="dashed"
                      className={styles.options}
                      onClick={this.playAgain.bind(this)}
                    >
                      再玩一次
                    </Button>        
                    <Button
                      type="dashed"
                      className={styles.options}
                    >
                      分享到朋友圈
                    </Button>
                  </Col>
                </Row>
              </Footer>
            ] : null
          }
          </QueueAnim>
        </Layout>
      </div>
    )
  }
}

export default withRouter(FinalPage);
