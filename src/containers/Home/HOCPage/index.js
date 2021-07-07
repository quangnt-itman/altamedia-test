import React, { Component } from 'react';
import Product from './Product';
import User from './User';
import WithModal from './WithModal';

let FormModal = WithModal( Product );
export default class HOCPage extends Component {
  render () {
    return (
      <div>
        <h3>HOCPage</h3>

        <FormModal />
      </div>
    );
  }
}

