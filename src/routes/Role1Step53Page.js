import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role1Step53Page extends React.Component {
  render() {
    const options = [
      {dest: '/beforefinal', content: "X月X日（周X）18：00在J1-1L45现场去观看总决赛，为参赛的小姐妹加油助威，顺便学习效率提升相关的工作方法，一举两得"},
      {dest: '/beforefinal', content: "WELINK全球直播接入观看X月X日（周X）18：00的总决赛，线上为参赛队伍打CALL，也能学习到新工具新方法在日常工作中提升自己的效率"}
    ];
    const content = [
      "在前辈的指导下，你完美的解决了颁奖晚会筹备过程中遇到的问题，但是也深深意识到自己在工作效率、系统思维等方面的不足。",
      "正好收到华秘论坛第三期--提效挑战赛总决赛的观赛邀请，你决定："
    ];
    const optionTitle = ""
    return(
      <PageComponent
        backgroundUrl='meeting'
        enableClick='false'
        content={content}
        nextPage=''
        hasOptions="true"
        hasOptionHeader="false"
        optionTitle={optionTitle}
        optionHeight='18rem'
        optionAlign="left"
        options={options}
      />
    )
  }
}

export default withRouter(Role1Step53Page);
