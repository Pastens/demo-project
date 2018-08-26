import React from 'react';
import { Layout, Row, Col, Button, Divider } from 'antd';
import {withRouter} from "react-router-dom";
import styles from './PageComponent.css';

const { Footer } = Layout;

class OptionComponent extends React.Component {
  buttonHandle = (dest, e) => {
    e.preventDefault();
    this.setState({duration: 500, interval: 0});
    this.setState({show: false});
    setTimeout(() => {
      this.props.history.push(dest);
    }, 500);
  }

  render() {
    return (
      <div>
        {this.props.hasOptions === "true" ? [
          <Footer
            className={styles.footer}
          >
            <Row
              type="flex"
              justify="center"
              align="middle"
              style={{minHeight: this.props.optionHeight}}
            >
              <Col
                span={24}
                style={{ textAlign: "center" }}
              >            
                {this.props.hasOptionHeader === "true" ? [
                  <Divider>{this.props.optionTitle}</Divider>
                ]:null}
                {
                  this.props.options.map((item, index) => {
                    return(
                      <Button
                        type="dashed"
                        style={{ textAlign: this.props.optionAlign }}
                        key={`dest_` + item.dest+`_`+index}
                        className={styles.options}
                        onClick={this.buttonHandle.bind(this, item.dest)}
                      >
                        {item.content}
                      </Button>
                    )
                  })
                }
              </Col>
            </Row>
          </Footer>
        ] : null}
      </div>
    );
  }
}

export default withRouter(OptionComponent);