import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role1Step53PrePage extends React.Component {
  render() {
    const content = [
      "在前辈的指导下，你完美的解决了颁奖晚会筹备过程中遇到的问题，但是也深深意识到自己在工作效率、系统思维等方面的不足。",
    ];
    return(
      <PageComponent
        backgroundUrl='背景8'
        enableClick='true'
        content={content}
        nextPage='/askElder'
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

export default withRouter(Role1Step53PrePage);
