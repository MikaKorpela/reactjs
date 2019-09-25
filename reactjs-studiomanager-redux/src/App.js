import React, {Component} from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Bands from './Bands';
import Recordings from './Recordings';
import Releases from './Releases';
import BandEditor from './BandEditor';
import {fetchBands} from './actions/bandActions';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchBands());
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/bands" component={Bands} />
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

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(App);