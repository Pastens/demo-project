import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role3Step3Page extends React.Component {
  render() {
    const options = [
      {dest: '/meetingtask', content: "读书协会：文艺青年的聚集地，宁静致远，这里有工作之外的诗和远方"},
      {dest: '/meetingtask', content: "篮球协会：荷尔蒙在这里爆发，啤酒炸鸡和朋友，这才是工作之余洒脱的生活"}
    ];
    const content = [
      "这次的春游非常棒，员工和主管满意度很高，在科长面前对你大加赞赏。",
      "秘书科长看到了你在组织策划方面的才能，决定任命你为一层组织协会的负责人，你选择哪个协会？"
    ];
    const optionTitle = ""
    return(
      <PageComponent
        backgroundUrl='role3'
        enableClick='false'
        content={content}
        nextPage=''
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

export default withRouter(Role3Step3Page);
