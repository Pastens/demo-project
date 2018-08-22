import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role3Step2Page extends React.Component {
  render() {
    const options = [
      {dest: '/group', content: "求保险：在秘书科其他姐妹共享的方案中选择二个优质方案，供员工投票选择"},
      {dest: '/group', content: "求创新：找一个大家都没来没有去过的地方，认真做攻略，带大家体验不同feel的春游"}
    ];
    const content = [
      "这次过后，你们的关系迅速升温，这种感觉让你非常愉快。",
      "春天来了，部门打算出游，由你来策划方案和组织，你准备："
    ];
    const optionTitle = ""
    return(
      <PageComponent
        backgroundUrl='背景3'
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

export default withRouter(Role3Step2Page);
