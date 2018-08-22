import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role2Step3Page extends React.Component {
  render() {
    const options = [
      {dest: '/tools', content: "道系跟踪法：发邮件给责任人，每日提醒，如果还有不反馈的员工，直接电话跟催，季度对进展进行晾晒，确保落地有节奏，事事有闭环"},
      {dest: '/tools', content: "佛系跟踪法：打电话给责任人询问进展，不强制反馈，只要没有太大问题尽量不去打扰大家，让主管聚焦更重要的工作"}
    ];
    const content = [
      "因为你的专业和高效，战略解码组织的井井有条，主管非常满意，对你更加信任，让你负责跟踪部门今年的所有重点工作。",
      "在跟踪过程中你发现，工作千头万绪，你准备如何开展工作？"
    ];
    const optionTitle = ""
    return(
      <PageComponent
        backgroundUrl='背景5'
        enableClick='false'
        content={content}
        nextPage=''
        contentAlign="bottom"
        hasOptions="true"
        hasOptionHeader="false"
        optionTitle={optionTitle}
        optionHeight='12rem'
        optionAlign="left"
        options={options}
      />
    )
  }
}

export default withRouter(Role2Step3Page);
