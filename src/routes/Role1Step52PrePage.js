import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role1Step52PrePage extends React.Component {
  render() {
    const content = [
      "日常工作中你兢兢业业，为了将主管的事务安排的井井有条，付出了很多的时间和精力。",
      "但工作中，总有一些影响效率的痛点让你难以聚焦更加有价值的工作。",
    ];
    return(
      <PageComponent
        backgroundUrl='背景8'
        enableClick='true'
        content={content}
        nextPage='/efficientFail'
        contentAlign="bottom"
        hasOptions="false"
        hasOptionHeader="false"
        hasNextPage="true"
        contentPadding="0 0 8rem 0"
        optionHeight='0rem'
        optionAlign="left"
      />
    )
  }
}

export default withRouter(Role1Step52PrePage);
