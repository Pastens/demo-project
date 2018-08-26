import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role3Step5PrePage extends React.Component {
  render() {
    const content = [
      "工作愉快，生活精彩，这样的时光是那么美好，但是你也深深的明白不能让自己陷入舒适区，要时刻保持学习的心态，不断的提升自己。",
    ];
    return(
      <PageComponent
        backgroundUrl='背景3'
        enableClick='true'
        content={content}
        nextPage='/learning'
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

export default withRouter(Role3Step5PrePage);
