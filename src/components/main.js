import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import About from './about';
import Projects from './projects';
import Content from './content';
import HalfAndHalf from './halfandhalf';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/contents" component={Content} />
    <Route path="/halfandhalf" component={HalfAndHalf} />

  </Switch>
)

export default Main;
