import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role3Step4Page extends React.Component {
  render() {
    const options = [
      {dest: '/beforefinal', content: "X月X日（周X）18：00在J1-1L45现场去观看总决赛，为参赛的小姐妹加油助威，顺便学习效率提升相关的工作方法，一举两得"},
      {dest: '/beforefinal', content: "WELINK全球直播接入观看X月X日（周X）18：00的总决赛，线上为参赛队伍打CALL，也能学习到新工具新方法在日常工作中提升自己的效率"}
    ];
    const content = [
      "工作愉快，生活精彩，这样的时光是那么美好，但是你也深深的明白不能让自己陷入舒适区，要时刻保持学习的心态，不断的提升自己。",
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

export default withRouter(Role3Step4Page);
