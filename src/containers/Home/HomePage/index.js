import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from '../../../components/Comments/index.js';
import Posts from '../../../components/Posts/index.js';

export class HomePage extends Component {
  componentDidMount () {
    console.log( this );
  }
  render () {
    return (
      <div>
        <h3>HomePage</h3>

        <Posts />
        <Comments />
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ( {
} );

const mapDispatchToProps = ( dispatch ) => ( {
} );

export default connect( mapStateToProps, mapDispatchToProps )( HomePage );

