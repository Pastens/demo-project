import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role1Step42Page extends React.Component {
  render() {
    const options = [
      {dest: '/askElder', content: "找秘书科的前辈请教，让她们帮忙出谋划策解决问题。"},
      {dest: '/askFamily', content: "给家人朋友倾诉，排解压力调整状态。"}
    ];
    const content = [
      "颁奖晚会的策划组织千头万绪，挑战非常大，你感到压力很大，你选择：",
    ];
    const optionTitle = ""
    return(
      <PageComponent
        backgroundUrl='背景6'
        enableClick='false'
        content={content}
        nextPage=''
        contentAlign="bottom"
        hasOptions="true"
        hasOptionHeader="false"
        optionTitle={optionTitle}
        optionHeight='14rem'
        optionAlign="left"
        options={options}
      />
    )
  }
}

export default withRouter(Role1Step42Page);
