import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import SecondPageOne from './routes/SecondPageOne';
import SecondPageTwo from './routes/SecondPageTwo';
import SecondPageThree from './routes/SecondPageThree';
import ThirdPageOne from './routes/ThirdPageOne';
import ThirdPageTwo from './routes/ThirdPageTwo';
import FourthPageOne from './routes/FourthPageOne';
import FifthPageOne from './routes/FifthPageOne';
import FifthPageTwo from './routes/FifthPageTwo';
import SixthPageOne from './routes/SixthPageOne';
import SixthPageTwo from './routes/SixthPageTwo';
import FinalPage from './routes/FinalPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/2-1" exact component={SecondPageOne} />
        <Route path="/2-2" exact component={SecondPageTwo} />
        <Route path="/2-3" exact component={SecondPageThree} />

        <Route path="/3-1" exact component={ThirdPageOne} />
        <Route path="/3-2" exact component={ThirdPageTwo} />


        <Route path="/4-1" exact component={FourthPageOne} />

        <Route path="/5-1" exact component={FifthPageOne} />
        <Route path="/5-2" exact component={FifthPageTwo} />

        <Route path="/6-1" exact component={SixthPageOne} />
        <Route path="/6-2" exact component={SixthPageTwo} />
        <Route path="/final" exact component={FinalPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
