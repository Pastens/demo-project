import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role2Step51Page extends React.Component {
  render() {
    const options = [
      {dest: '/beforefinal', content: "X月X日（周X）18：00在J1-1L45现场去观看总决赛，为参赛的小姐妹加油助威，顺便学习效率提升相关的工作方法，一举两得"},
      {dest: '/beforefinal', content: "WELINK全球直播接入观看X月X日（周X）18：00的总决赛，线上为参赛队伍打CALL，也能学习到新工具新方法在日常工作中提升自己的效率"}
    ];
    const content = [
      "优秀的你为工作付出了很多，加班让你充实但也时常让你冒痘让你有了黑眼圈。",
      "你发现隔壁部门的秘书小A总是能高质高效的完成手头的工作早点下班，你请教了小A，小A邀请你去观看X月X日（周X）18：00的华秘论坛第三期-提效挑战赛，从中学习提升效率的好方法，你决定：",
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

export default withRouter(Role2Step51Page);
