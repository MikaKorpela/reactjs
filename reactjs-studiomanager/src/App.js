import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';
import Bands from './Bands';
import Recordings from './Recordings';
import Releases from './Releases';
// import Footer from './Footer';
import BandEditor from './BandEditor';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Header/> */}
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/bands" component={Bands} />
            <Route exact path="/recordings" component={Recordings} />
            <Route exact path="/releases" component={Releases} />
            <Route exact path="/bands/:id" component={BandEditor} />
            <Route exact path="/newband" component={BandEditor} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}
