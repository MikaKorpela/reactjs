import React, {Component} from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component
{
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/bands'>
                <div className="nav-link">Bands</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/recordings'>
                <div className="nav-link">Recordings</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/releases'>
                <div className="nav-link">Releases</div>
              </Link>
            </li>    
          </ul>
        </div>  
      </nav>
    )
  }
}

