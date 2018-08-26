import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class Role2Step51PrePage extends React.Component {
  render() {
    const content = [
      "优秀的你为工作付出了很多，加班让你充实但也时常让你冒痘让你有了黑眼圈。",
    ];
    return(
      <PageComponent
        backgroundUrl='背景8'
        enableClick='true'
        content={content}
        nextPage='/cost'
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

export default withRouter(Role2Step51PrePage);
