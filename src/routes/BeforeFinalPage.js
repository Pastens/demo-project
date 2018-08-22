import React from 'react';
import {withRouter} from "react-router-dom";
import PageComponent from '../components/PageComponent';
import 'rc-texty/assets/index.css';

class BeforeFinalPage extends React.Component {
  render() {
    const options = [
    ];
    const content = [
      "每一次选择都是内心小宇宙光芒的展露，这一路旅程虽短暂也让你认识了更加不一样的自己。",
      "点击屏幕，查看不一样的自己"
    ];
    return(
      <PageComponent
        backgroundUrl='intro'
        enableClick='true'
        content={content}
        nextPage='/final'
        hasOptions="false"
        hasOptionHeader="true"
        optionTitle=""
        optionHeight='0px'
        options={options}
      />
    )
  }
}

export default withRouter(BeforeFinalPage);
