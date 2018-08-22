import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role2Step52Page extends React.Component {
  render() {
    const options = [
      {dest: '/beforefinal', content: "X月X日（周X）18：00在J1-1L45现场去观看总决赛，为参赛的小姐妹加油助威，顺便学习效率提升相关的工作方法，一举两得"},
      {dest: '/beforefinal', content: "WELINK全球直播接入观看X月X日（周X）18：00的总决赛，线上为参赛队伍打CALL，也能学习到新工具新方法在日常工作中提升自己的效率"}
    ];
    const content = [
      "你总是善于发现问题并想方设法对工作方法改进，在华秘队伍里同样也有这样一群人，她们参加了X月X日（周X）18：00的华秘论坛第三期-提效挑战赛，当收到观赛邀请，你决定：",
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
        optionHeight='12rem'
        optionAlign="left"
        options={options}
      />
    )
  }
}

export default withRouter(Role2Step52Page);
