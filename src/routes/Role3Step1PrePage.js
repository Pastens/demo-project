import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role3Step1PrePage extends React.Component {
  render() {
    const content = [
      "你那么美，在工作生活中总是闪闪惹人爱。",
      "可是仙女本仙也有烦恼，为主管的各种会议协调会议室经常让你很头疼。",

    ];
    return(
      <PageComponent
        backgroundUrl='3文员mm'
        enableClick='true'
        content={content}
        nextPage='/role3'
        contentAlign="bottom"
        hasOptions="false"
        hasOptionHeader="false"
        hasNextPage="true"
        contentPadding="0 0 8rem 0"
        optionHeight='0rem'
        optionAlign="left"
      />
    )
  }
}

export default withRouter(Role3Step1PrePage);
