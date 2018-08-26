import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IntroPage from './routes/IntroPage';
import SelectPage from './routes/SelectPage';

import Role1Step1Page from './routes/Role1Step1Page';
import Role1Step2Page from './routes/Role1Step2Page';
import Role1Step3PrePage from './routes/Role1Step3PrePage';
import Role1Step3Page from './routes/Role1Step3Page';
import Role1Step41Page from './routes/Role1Step41Page';
import Role1Step42Page from './routes/Role1Step42Page';
import Role1Step51PrePage from './routes/Role1Step51PrePage';
import Role1Step52PrePage from './routes/Role1Step52PrePage';
import Role1Step53PrePage from './routes/Role1Step53PrePage';
import Role1Step54PrePage from './routes/Role1Step54PrePage';
import Role1Step51Page from './routes/Role1Step51Page';
import Role1Step52Page from './routes/Role1Step52Page';
import Role1Step53Page from './routes/Role1Step53Page';
import Role1Step54Page from './routes/Role1Step54Page';

import Role2Step1Page from './routes/Role2Step1Page';
import Role2Step2Page from './routes/Role2Step2Page';
import Role2Step3Page from './routes/Role2Step3Page';
import Role2Step4Page from './routes/Role2Step4Page';
import Role2Step51PrePage from './routes/Role2Step51PrePage';
import Role2Step51Page from './routes/Role2Step51Page';
import Role2Step52Page from './routes/Role2Step52Page';

import Role3Step1PrePage from './routes/Role3Step1PrePage';
import Role3Step1Page from './routes/Role3Step1Page';
import Role3Step2Page from './routes/Role3Step2Page';
import Role3Step3Page from './routes/Role3Step3Page';
import Role3Step4Page from './routes/Role3Step4Page';
import Role3Step5PrePage from './routes/Role3Step5PrePage';
import Role3Step5Page from './routes/Role3Step5Page';

import BeforeFinalPage from './routes/BeforeFinalPage';
import FinalPage from './routes/FinalPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IntroPage} />
        <Route path="/select" exact component={SelectPage} />

        <Route path="/role1" exact component={Role1Step1Page} />
        <Route path="/meeting" exact component={Role1Step2Page} />
        <Route path="/relation_pre" exact component={Role1Step3PrePage} />
        <Route path="/relation" exact component={Role1Step3Page} />
        <Route path="/meetingArrange" exact component={Role1Step41Page} />
        <Route path="/awardArrange" exact component={Role1Step42Page} />
        <Route path="/arrangeFail_pre" exact component={Role1Step51PrePage} />
        <Route path="/efficientFail_pre" exact component={Role1Step52PrePage} />
        <Route path="/askElder_pre" exact component={Role1Step53PrePage} />
        <Route path="/askFamily_pre" exact component={Role1Step54PrePage} />
        <Route path="/arrangeFail" exact component={Role1Step51Page} />
        <Route path="/efficientFail" exact component={Role1Step52Page} />
        <Route path="/askElder" exact component={Role1Step53Page} />
        <Route path="/askFamily" exact component={Role1Step54Page} />

        <Route path="/role2" exact component={Role2Step1Page} />
        <Route path="/department" exact component={Role2Step2Page} />
        <Route path="/tracing" exact component={Role2Step3Page} />
        <Route path="/tools" exact component={Role2Step4Page} />
        <Route path="/cost_pre" exact component={Role2Step51PrePage} />
        <Route path="/cost" exact component={Role2Step51Page} />
        <Route path="/prof" exact component={Role2Step52Page} />

        <Route path="/role3_pre" exact component={Role3Step1PrePage} />
        <Route path="/role3" exact component={Role3Step1Page} />
        <Route path="/affairs" exact component={Role3Step2Page} />
        <Route path="/group" exact component={Role3Step3Page} />
        <Route path="/meetingtask" exact component={Role3Step4Page} />
        <Route path="/learning_pre" exact component={Role3Step5PrePage} />
        <Route path="/learning" exact component={Role3Step5Page} />

        <Route path="/beforefinal" exact component={BeforeFinalPage} />
        <Route path="/final" exact component={FinalPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
