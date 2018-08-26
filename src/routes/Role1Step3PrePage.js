import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role1Step2PrePage extends React.Component {
  render() {
    const content = [
      "作为总裁专业可信赖的助手，日常工作让你充满了满满的成就感，但也有一丝丝觉得平淡。",
    ];
    return(
      <PageComponent
        backgroundUrl='背景4'
        enableClick='true'
        content={content}
        nextPage='/relation'
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

export default withRouter(Role1Step2PrePage);
