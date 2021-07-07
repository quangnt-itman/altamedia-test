import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export class Navbar extends Component {
  render () {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hoc">HOC</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hook">Hook</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/test-axios">test-axios</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

    );
  }
}

const mapStateToProps = ( state ) => ( {

} );

const mapDispatchToProps = {

};

export default connect( mapStateToProps, mapDispatchToProps )( Navbar );

