import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role1Step51Page extends React.Component {
  render() {
    const options = [
      {dest: '/beforefinal', content: "9月4日（周二）18：30在J1-1L44R现场去观看总决赛，为参赛的小姐妹加油助威，顺便学习效率提升相关的工作方法，一举两得"},
      {dest: '/beforefinal', content: "WELINK全球直播接入观看9月4日（周二）18：30的总决赛，线上为参赛队伍打CALL，也能学习到新工具新方法在日常工作中提升自己的效率"}
    ];
    const content = [
      "这时你正好收到华秘论坛第三期--提效挑战赛总决赛的观赛邀请，你决定：",
    ];
    const optionTitle = ""
    return(
      <PageComponent
        backgroundUrl='背景8'
        enableClick='false'
        content={content}
        contentAlign="bottom"
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

export default withRouter(Role1Step51Page);
