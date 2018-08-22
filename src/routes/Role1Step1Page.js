import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role1Step1Page extends React.Component {
  render() {
    const options = [
      {dest: '/meeting', content: "全面了解每件事的背景，事无据悉标清备注，打印与主管书面确认后安排主管日程"},
      {dest: '/meeting', content: "根据经验迅速识别关键信息，提取决策点，进办公室口头与主管确认后上传下达"}
    ];
    const content = [
      "清晨的阳光从落地窗倾泻而下，得体的着装搭配精致的妆容，作为总裁秘书的你一直是办公室美丽优雅的存在。",
      "打开邮箱，收到周边和上层会议的通知，几位部门内的主管也来找你预约领导时间，这个时候，你会……"
    ];
    const optionTitle = ""
    return(
      <PageComponent
        backgroundUrl='1总裁'
        enableClick='false'
        content={content}
        nextPage=''
        hasOptions="true"
        contentAlign="top"
        contentPadding="10rem 10rem 0 0"
        hasOptionHeader="false"
        optionTitle={optionTitle}
        optionHeight='14rem'
        optionAlign="left"
        options={options}
      />
    )
  }
}

export default withRouter(Role1Step1Page);
