import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage.jsx';

import Portfolio from './components/Portfolio.jsx';
import HomesApp from './components/projects/HomesApp.jsx';
import Ocampo from './components/projects/Ocampo.jsx';
import MyHomes from './components/projects/MyHomes.jsx';
import Vigil from './components/projects/Vigil.jsx';
import Space from './components/projects/Space.jsx';
import Imprint from './components/projects/Imprint.jsx';
import Lovegrove from './components/projects/Lovegrove.jsx';
import Icons from './components/projects/Icons.jsx';
import CarryNorfolk from './components/projects/CarryNorfolk.jsx';
import Bodacious from './components/projects/Bodacious.jsx';
import BrauHaus from './components/projects/BrauHaus.jsx';
import Groweather from './components/projects/Groweather.jsx';

import Blog from './components/Blog.jsx'
import About from './components/About.jsx';



export default (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />

          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/portfolio/ios-homes" exact component={HomesApp} />
          <Route path="/portfolio/ocampo" exact component={Ocampo} />
          <Route path="/portfolio/my-homes" exact component={MyHomes} />
          <Route path="/portfolio/vigil" exact component={Vigil} />
          <Route path="/portfolio/space" exact component={Space} />
          <Route path="/portfolio/imprint" exact component={Imprint} />
          <Route path="/portfolio/ross-lovegrove" exact component={Lovegrove} />
          <Route path="/portfolio/icons" exact component={Icons} />
          <Route path="/portfolio/carry-norfolk" exact component={CarryNorfolk} />
          <Route path="/portfolio/bodacious-pizza" exact component={Bodacious} />
          <Route path="/portfolio/brau-haus" exact component={BrauHaus} />
          <Route path="/portfolio/groweather" exact component={Groweather} />


          <Route path="/shop" exact component={() => window.location = 'http://Hellojared.bigcartel.com'}/>
          <Route path="/about" exact component={About}/>
          <Route path="/blog" exact component={Blog} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </BrowserRouter>
);
