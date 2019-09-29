import React, {Component} from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';
import Bands from './Bands';
import Recordings from './Recordings';
import Releases from './Releases';
import BandEditor from './BandEditor';
import {getBands} from './actions/bandActions';

class App extends Component {

  constructor(props) {
    super(props);
    console.log(`APP CONSTRUCTOR CALLED`);
    this.props.dispatch(getBands());
  }

  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Navbar/>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/" render={()=> <Home />} exact />
            {/* <Route exact path="/bands" component={Bands} /> */}
            <Route path="/bands" render={()=> <Bands />} exact />
            <Route exact path="/recordings" component={Recordings} />
            <Route exact path="/releases" component={Releases} />
            <Route exact path="/bands/:id" component={BandEditor} />
            <Route exact path="/newband" component={BandEditor} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bandReducer.bands
  }
};

export default connect(mapStateToProps)(App);