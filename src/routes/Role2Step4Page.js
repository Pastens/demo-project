import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role2Step4Page extends React.Component {
  render() {
    const options = [
      {dest: '/cost_pre', content: "兢兢业业，职业化的态度是优质交付的保障，工作本来就需要付出时间和精力，很正常"},
      {dest: '/prof', content: "对不合理的需求SAY NO,识别低效点，推动周边一起优化"}
    ];
    const content = [
      "因为在日常工作中因为缺乏智能化的工具，收集工员信息、处理部门员工的各种问询求助总是耗费你很多的时间和精力。",
      "你决定："
    ];
    const optionTitle = ""
    return(
      <PageComponent
        backgroundUrl='背景7'
        enableClick='false'
        content={content}
        nextPage=''
        hasOptions="true"
        hasOptionHeader="false"
        contentAlign="bottom"
        optionTitle={optionTitle}
        optionHeight='12rem'
        optionAlign="left"
        options={options}
      />
    )
  }
}

export default withRouter(Role2Step4Page);
