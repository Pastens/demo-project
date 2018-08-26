import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role1Step2Page extends React.Component {
  render() {
    const options = [
      {dest: '/relation_pre', content: "有条不紊的打开日程归档的表格，查询会面记录，在纪要归档文件找到纪要和材料，打印给领导"},
      {dest: '/relation_pre', content: "快速响应寻求周边资源支持，找到部门内相关业务负责人，索取和问询重要信息后整理给领导"}
    ];
    const content = [
      "时针指向上午10：00，领导下午要见W公司的重要客户了，让你把之前3年与W公司会面的记录及关键决策结论打印给他提前参考。",
      "作为他的得力助手你会："
    ];
    const optionTitle = ""
    return(
      <PageComponent
        backgroundUrl='背景3'
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

export default withRouter(Role1Step2Page);
