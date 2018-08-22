import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class SelectPage extends React.Component {
  render() {
    const options = [
      {dest: '/role1', content: "气质优雅深藏不露的总裁秘书"},
      {dest: '/role2', content: "青春无敌能力开挂的部门秘书"},
      {dest: '/role3', content: "仙女本仙人见人爱的文员MM"}
    ];
    const content = [
      "是羡慕成熟后的沉静内敛还是追忆年少时的意气风发，是渴望运筹帷幄后的波澜不惊还是怀念少不更事时的小鹿乱撞。",
      "此时的你，如果重新选择不一样的华秘人生，你会选择……"
    ];
    return(
      <PageComponent
        backgroundUrl='背景2'
        enableClick='false'
        content={content}
        nextPage=''
        hasOptions="true"
        hasOptionHeader="false"
        contentAlign="bottom"
        optionHeight='12rem'
        optionAlign="center"
        options={options}
      />
    )
  }
}

export default withRouter(SelectPage);
