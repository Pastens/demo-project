import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role1Step3Page extends React.Component {
  render() {
    const options = [
      {dest: '/meetingArrange', content: "去参加，会务组织能力是我的强项，我想利用这个机会展现自己，也想进一步得到提升和锻炼"},
      {dest: '/awardArrange', content: "这次就算了，把机会留给其他MM吧，我最近正好在专注搞部门的颁奖晚会"}
    ];
    const content = [
      "作为总裁专业可信赖的助手，日常工作让你充满了满满的成就感，但也有一丝丝觉得平淡。",
      "下午你收到秘书体系征集报名支撑公司S大会的邮件，你该如何选择?",
      "（慎选，因为这个选择将决定你接下来的命运）",
    ];
    const optionTitle = ""
    return(
      <PageComponent
        backgroundUrl='背景4'
        enableClick='false'
        content={content}
        contentAlign="bottom"
        nextPage=''
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

export default withRouter(Role1Step3Page);
