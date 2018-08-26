import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role1Step51PrePage extends React.Component {
  render() {
    const content = [
      "因为你在系统优化、效率提升等方面经验不足，运作助理的综合面试没有通过，回到工位你很沮丧……",
    ];
    return(
      <PageComponent
        backgroundUrl='背景8'
        enableClick='true'
        content={content}
        nextPage='/arrangeFail'
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

export default withRouter(Role1Step51PrePage);
