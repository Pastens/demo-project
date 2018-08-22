import React from 'react';
import { Layout, Row, Col } from 'antd';
import OptionComponent from './OptionComponent';
import QueueAnim from 'rc-queue-anim';
import {withRouter} from "react-router-dom";
import styles from './PageComponent.css';

const { Content } = Layout;

class PageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show:             true,
      enableClick:      this.props.enableClick,         // 默认是否可以点击屏幕进入下一页，用于不需要选择的页面
      backgroundName:   this.props.backgroundUrl,       // 背景图片名称，由传参设置
      hasOptions:       this.props.hasOptions,          // 是否含有选择
      hasOptionHeader:  this.props.hasOptionHeader,
      content:          this.props.content,             // 内容
      options:          this.props.options,             // 选项数组
      nextPage:         this.props.nextPage,            // 下一页url
      contentHeight:    'calc(100vh - '+this.props.optionHeight+')',
      contentPadding:   this.props.contentPadding ? this.props.contentPadding : "",
      contentAlign:     this.props.contentAlign ? this.props.contentAlign : "middle",
      optionHeight:     this.props.optionHeight,        // 选项窗口高度
      optionTitle:      this.props.optionTitle,         // 选项上方提示语     
      optionAlign:      this.props.optionAlign,         // 选项上方提示语     
      animDuration:     2000,
      animInterval:     2000,
      animType:         "alpha",
    }
  }

  componentDidMount = (e) => {
    document.getElementById('all').addEventListener("click", this.clickHandle);
  }

  clickHandle = (e) => {
    if(this.state.hasOptions === "false" && this.state.enableClick === "true") {
      this.setState({animDuration: 800, animInterval: 0});
      this.setState({show: false});
      setTimeout(() => {
        this.props.history.push(this.state.nextPage);
      }, 800);
    }
  }

  render() {
    const backgroundStyle = {
      backgroundImage: `url(${require('../assets/'+this.state.backgroundName+'.jpg')})`
    }
    return (
      <div id="all">
        <Layout className={styles.layout}>
          <QueueAnim
            duration={this.state.animDuration}
            interval={this.state.animInterval}
            type={this.state.animType}
          >
          {
            this.state.show ? 
            [
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
                  align={ this.state.contentAlign }
                  style={{ minHeight: this.state.contentHeight }}
                >
                  <Col
                    span={22}
                    style={{ textAlign: "left", color: "#fff", textShadow: "0px 0px 10px #000", padding: this.state.contentPadding  }}
                  >
                    {
                      this.props.content.map((item, index) => {
                        return <p className={styles.content} key={"content-"+index}>{item}</p>
                      })
                    }
                  </Col>
                </Row>
              </Content>,
              <OptionComponent
                key="demo3"
                options={this.state.options}
                optionHeight={this.state.optionHeight}
                optionTitle={this.state.optionTitle}
                optionAlign={this.state.optionAlign}
                hasOptions={this.state.hasOptions}
                hasOptionHeader={this.state.hasOptionHeader}
              />
            ]:null
          }
          </QueueAnim>
        </Layout>
      </div>
    );
  }
};

export default withRouter(PageComponent);
