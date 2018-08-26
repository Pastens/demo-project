import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role1Step54PrePage extends React.Component {
  render() {
    const content = [
      "在家人朋友的关心和疏导下的指导下，你调整心态完美的解决了颁奖晚会筹备中遇到的问题，但是也深深意识到自己在工作效率、系统思维等方面的不足。",
    ];
    return(
      <PageComponent
        backgroundUrl='背景8'
        enableClick='true'
        content={content}
        nextPage='/askFamily'
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

export default withRouter(Role1Step54PrePage);
