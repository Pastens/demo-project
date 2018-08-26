import html2canvas from 'html2canvas';
import React from 'react';
import { Layout, Row, Col, Button, Modal } from 'antd';
import QueueAnim from 'rc-queue-anim';
import {withRouter} from "react-router-dom";
import styles from './FinalPage.css';
import '../models/result';
import imgSrc from '../assets/qrcode.png'

const { Content, Footer } = Layout;

class FinalPage extends React.Component {
  constructor(props) {
    super(props);
    this.resultIndex = Math.round(Math.random()*11) ;
    // console.log(this.resultIndex);
    this.state = {
      show: true,
      display: 'none',
      saveImage: false,
      backgroundName: "",
      result: global.result[this.resultIndex],
      imageUrl:         "",
      animDuration:     2000,
      animInterval:     2000,
      animType:         "alpha",
      modalVisible:     false,
    }
  }

  playAgain = (e) => {
    this.props.history.push("/");
  }

  saveImage = (e) => {
    this.setState({saveImage: true});
    var cntElem = document.body;

    var shareContent = cntElem;//需要截图的包裹的（原生的）DOM 对象
    var width = shareContent.offsetWidth; //获取dom 宽度
    var height = shareContent.offsetHeight; //获取dom 高度
    var canvas = document.createElement("canvas"); //创建一个canvas节点
    var scale = 2; //定义任意放大倍数 支持小数
    canvas.width = width * scale; //定义canvas 宽度 * 缩放
    canvas.height = height * scale; //定义canvas高度 *缩放
    canvas.getContext("2d").scale(scale, scale); //获取context,设置scale 
    var opts = {
        scale: scale, // 添加的scale 参数
        canvas: canvas, //自定义 canvas
        width: width, //dom 原始宽度
        height: height,
        logging: false,
        useCORS: true // 【重要】开启跨域配置
    };

    html2canvas(shareContent, opts).then( (canvas) => {
        var context = canvas.getContext('2d');
        context.mozImageSmoothingEnabled = false;
        context.webkitImageSmoothingEnabled = false;
        context.msImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;

        var imgUri = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        this.setState({imageUrl: imgUri});
        this.setModalVisible(true);
    });
  }

  setModalVisible = (modalVisible) => {
    this.setState({modalVisible})
    if (modalVisible === false) {
      this.setState({saveImage: false});
    }
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
              <Modal
                title="长按图片保存至相册，分享到朋友圈"
                style={{top: 0}}
                bodyStyle={{textAlign: "center"}}
                footer={null}
                visible={this.state.modalVisible}
                onCancel={() => this.setModalVisible(false)}
              >
                <img src={this.state.imageUrl} style={{maxWidth: "100%", maxHeight: "calc(80vh)"}} alt=""/>
              </Modal>,
              <Content
                key="demo2"
                type="flex"
              >
                <Row
                  type="flex"
                  justify="center"
                  align="bottom"
                  style={{ minHeight: "calc(100vh - 10rem)", padding: "0" }}
                >
                  <Col
                    span={22}
                    style={{ textAlign: "center", color: "#fff", textShadow: "0px 0px 10px #000" }}
                  >
                    <h1
                      style={{ textAlign: "center", color: "#fff", fontSize: "1.4em", textShadow: "0px 0px 10px #000" }}
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
                  style={{minHeight: "10rem"}}
                >
                  <Col
                    span={24}
                    style={{ textAlign: "center" }}
                  >
                    {this.state.saveImage ? [
                      <img src={imgSrc} style={{height: "5rem"}} alt=""/>,
                      <p style={{ fontSize: "12px",color: "#fff", paddingTop: "5px", textShadow: "0px 0px 10px #000", margin:"0"}}>长按识别二维码<br/>寻找我的华秘关键词</p>
                    ]:[
                      <Button
                        type="dashed"
                        className={styles.options}
                        onClick={this.playAgain.bind(this)}
                      >
                        再玩一次
                      </Button>,        
                      <Button
                        type="dashed"
                        className={styles.options}
                        onClick={this.saveImage.bind(this)}
                      >
                        分享到朋友圈
                      </Button>
                    ]}
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
