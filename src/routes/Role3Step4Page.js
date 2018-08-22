import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role3Step4Page extends React.Component {
  render() {
    const options = [
      {dest: '/learning', content: "还好最近手头工作不多，尽快预定场地、协调资源、发布通知进行与会人确认，提前把一切安排妥当"},
      {dest: '/learning', content: "最近手头工作太多，编排议题先提交审核,以我丰富的经验判断预留一周再预定其他资源也能完美交付"}
    ];
    const content = [
      "你的热情、能干让主管和员工得到主管和员工的认可，每天都感到元气满满。",
      "这天早上，主管说让你安排下月初召开部门的战略解码，你准备："
    ];
    const optionTitle = ""
    return(
      <PageComponent
        backgroundUrl='背景8'
        enableClick='false'
        content={content}
        nextPage=''
        hasOptions="true"
        contentAlign="bottom"
        hasOptionHeader="false"
        optionTitle={optionTitle}
        optionHeight='14rem'
        optionAlign="left"
        options={options}
      />
    )
  }
}

export default withRouter(Role3Step4Page);
