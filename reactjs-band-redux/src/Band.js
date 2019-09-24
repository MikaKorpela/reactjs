import React, {Component} from 'react';
import { connect } from "react-redux";

class Band extends Component {

  render() {

    return (
      <div>
        <ul>
            {this.props.bands.map(band => (
                <li key={band.id}>{band.band_name}</li>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bands: state.bands
});

export default connect(mapStateToProps)(Band);