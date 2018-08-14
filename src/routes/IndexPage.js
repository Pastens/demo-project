import React from 'react';
import { Layout, Row, Col, Button, Divider } from 'antd';
import QueueAnim from 'rc-queue-anim';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';
import { Link } from 'dva/router';
import styles from './IndexPage.css';

const { Footer, Content } = Layout;

class IndexPage extends React.Component {
  // state= {
  //   show: true,
  //   duration: 2000,
  //   interval: 2000
  // }
  
  // clickOne = (e) => {
  //   e.preventDefault();
  //   this.setState({duration: 500, interval:0})
  //   this.setState({show: false});
  //   setTimeout(() => {
  //     this.props.history.push('/2-1');
  //   }, 500);
  // }

  // clickTwo = (e) => {
  //   e.preventDefault();
  //   this.setState({duration: 500, interval:0})
  //   this.setState({show: false});
  //   setTimeout(() => {
  //     this.props.history.push('/2-2');
  //   }, 500);
  // }

  // clickThree = (e) => {
  //   e.preventDefault();
  //   this.setState({duration: 500, interval:0})
  //   this.setState({show: false});
  //   setTimeout(() => {
  //     this.props.history.push('/2-3');
  //   }, 500);
  // }
  render() {
    const options = [
    ];
    const content = [
      "成为文秘，或许是你初心的选择，或许是你偶然的邂逅，在华秘大家庭也有一些时日了，惊喜过失落过，感动过也成长过，笑过也累过，如果命运的魔法棒掌握在你的手里，一切会不会又不一样",
      "点击屏幕进入游戏，你将经历一段非同凡响的华秘人生"
    ];
    return(
      <PageComponent
        backgroundUrl='background'
        optionHeight='0px'
        enableClick='true'
        content={content}
        nextPage='/select'
        hasOptions="false"
        options={options}
      />
    )
  }
  // render() {
  //   return (
  //     <div>
  //       <Layout className={styles.layout}>
  //         <QueueAnim duration={this.state.duration} interval={this.state.interval} type="alpha">
  //         {this.state.show ? 
  //         [
  //           <div key="demo1" className={styles.background} />,
  //           <Content key="demo2" type="flex">
  //             <Row type="flex" justify="center" align="middle" style={{ minHeight: "calc(100vh - 200px)" }}>
  //               <Col span={22} offset={1} style={{ textAlign: "left", color: "#fff", textShadow: "2px 2px 3px #000" }}>
  //                 <p>成为文秘，或许是你初心的选择，或许是你偶然的邂逅，在华秘大家庭也有一些时日了，惊喜过失落过，感动过也成长过，笑过也累过。</p>
  //                 <p>此刻，如果让你重新选择不一样的华秘人生……</p>
  //               </Col>
  //             </Row>
  //           </Content>,
  //           <Footer className={styles.footer} key="demo3">
  //             <Row type="flex" justify="center" align="middle" style={{ minHeight: "200px" }}>
  //               <Col span={24} style={{ textAlign: "center", marginBottom: "10px" }}>
  //                 <Divider>你会选择</Divider>
  //                 <Button type="dashed" className={styles.options} onClick={this.clickOne} ghost>
  //                   气质优雅深藏不露的总裁秘书
  //                 </Button>
  //                 <Button type="dashed" className={styles.options} onClick={this.clickTwo} ghost>
  //                   青春无敌能力开挂的部门秘书
  //                 </Button>
  //                 <Button type="dashed" className={styles.options} onClick={this.clickThree} ghost>
  //                   仙女本仙人见人爱的文员MM
  //                 </Button>
  //               </Col>
  //             </Row>
  //           </Footer>
  //         ] : null
  //         }
  //         </QueueAnim>
  //       </Layout>
  //     </div>
  //   );
  // }
}

export default withRouter(IndexPage);
