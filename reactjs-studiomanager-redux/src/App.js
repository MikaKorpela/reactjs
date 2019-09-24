import React, {Component} from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Bands from './Bands';
import Recordings from './Recordings';
import Releases from './Releases';
import BandEditor from './BandEditor';
import {useDispatch} from 'react-redux';
import {fetchBands} from './actions/bandActions';

//export default class App extends React.Component {
class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchBands());
  }

  render() {
    
    const { bands } = this.props;

    const dispatch = useDispatch();
    dispatch(fetchBands());

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
  // }
}

export default App;