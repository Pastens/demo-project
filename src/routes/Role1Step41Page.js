import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role1Step41Page extends React.Component {
  render() {
    const options = [
      {dest: '/arrangeFail', content: "接受邀请，想在新的岗位接受挑战，如果能在运作助理领域开始新的职业生涯那就太好了。"},
      {dest: '/efficientFail', content: "对运作助理不感兴趣，在文秘岗位精耕细作持续积累，树立自己的品牌是我的梦想。"}
    ];
    const content = [
      "你在这S大会的筹备组织中表现优异，才能突出。",
      "得到了项目经理的认可，邀请你换岗担任XXX项目组的运作助理，你决定：",
    ];
    const optionTitle = ""
    return(
      <PageComponent
        backgroundUrl='背景7'
        enableClick='false'
        content={content}
        nextPage=''
        contentAlign="bottom"
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

export default withRouter(Role1Step41Page);
