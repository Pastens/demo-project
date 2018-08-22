import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class IndexPage extends React.Component {
  render() {
    const options = [
    ];
    const content = [
      "成为文秘，或许是你初心的选择，或许是你偶然的邂逅，在华秘大家庭也有一些时日了，惊喜过失落过，感动过也成长过，笑过也累过，如果命运的魔法棒掌握在你的手里，一切会不会又不一样",
      "点击屏幕进入游戏，你将经历一段非同凡响的华秘人生"
    ];
    return(
      <PageComponent
        backgroundUrl='背景1'
        enableClick='true'
        content={content}
        nextPage='/select'
        hasOptions="false"
        hasOptionHeader="true"
        contentPadding="0 0 10rem 0"
        contentAlign="bottom"
        optionTitle=""
        optionHeight='0px'
        options={options}
      />
    )
  }
}

export default withRouter(IndexPage);
