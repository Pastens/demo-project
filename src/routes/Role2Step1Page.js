import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role2Step1Page extends React.Component {
  render() {
    const options = [
      {dest: '/department', content: "担任A部门秘书：主管很有亲和力，员工也都是年轻的博士硕士，和他们一起工作会很愉悦"},
      {dest: '/department', content: "担任B部门秘书：主管雷厉风行严谨细致，部门业务全球化，在这个部门更能锻炼和提升自己"}
    ];
    const content = [
      "青春洋溢，能力超群，你是华秘队伍里能量的存在，入职短短3年就得到了秘书科和业务部门的认可，你的优异表现也为自己赢得了更多成长机会。",
      "因为你支撑的主管退休，这天，秘书科长找到你，向你推荐了2个更有挑战性的岗位，你决定去哪个："
    ];
    const optionTitle = "你会选择"
    return(
      <PageComponent
        backgroundUrl='role2'
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

export default withRouter(Role2Step1Page);
