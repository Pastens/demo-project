import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role3Step1Page extends React.Component {
  render() {
    const options = [
      {dest: '/affairs', content: "偷偷在他工位放杯热咖啡和温馨字条，表示满满的谢意"},
      {dest: '/affairs', content: "当面表示感谢，约他一起去喝咖啡度过愉快的下午茶时光"}
    ];
    const content = [
      "你那么美，在工作生活中总是闪闪惹人爱。",
      "可是仙女本仙也有烦恼，为主管的各种会议协调会议室经常让你很头疼。",
      "隔壁部门一位长相似吴彦祖学识如高晓松的GG经常帮你抢会议室，对你非常照顾。",
      "你决定："
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

export default withRouter(Role3Step1Page);
